<script setup>
import {ref, onMounted} from 'vue'
import DiscussItem from '@/views/search/DiscussItem.vue'
import EmptyItem from '@/components/empty/EmptyItem.vue'
import {getArticlesByPageUsingPost} from '@/openapi/api/articleController'
import {pageLikesUsingGet} from '@/openapi/api/userController'

const activeName = ref('first')

//接收父子间传递的userId，并查询对应的数据
const props = defineProps({
  username: {
    required: true,
    type: String
  }
})

const dataList = ref([])
const total = ref()
const username = props.username


const pageRequestDTO = ref({
  pageNum: 1,
  pageSize: 5,
  username: username,
  actionType: '',
  userId: ''
})

const getData = async (actionType) => {

  if (actionType !== 'article') {
    pageRequestDTO.value.userId = '1712410707829501954'

    if (actionType === 'like') {
      pageRequestDTO.value.actionType = 'like'
    } else {
      pageRequestDTO.value.actionType = 'collect'
    }
    const res = await pageLikesUsingGet(pageRequestDTO.value)
    dataList.value = res.data.records
    total.value = res.data.total
  } else {
    const res = await getArticlesByPageUsingPost({
      pageNum: pageRequestDTO.value.pageNum,
      pageSize: pageRequestDTO.value.pageSize,
      username: props.username,
    })
    dataList.value = res.data.records
    total.value = res.data.total
  }
}

const typeKey = ref('')

const onSizeChange = (size) => {
  pageRequestDTO.value.pageNum = 1
  pageRequestDTO.value.pageSize = size
  if (typeKey.value === 'article') {
    getData('article')
  } else if (typeKey.value === 'like'){
    getData('like')
  } else if (typeKey.value === 'collect') {
    getData('collect')
  }
}

const onCurrentPage = (current) => {
  pageRequestDTO.value.pageNum = current
  if (typeKey.value === 'article') {
    getData('article')
  } else if (typeKey.value === 'like'){
    getData('like')
  } else if (typeKey.value === 'collect') {
    getData('collect')
  }

}

const handleClick = async (tab) => {

  // activeName.value = tab

}

const handleChange = async (tab) => {
  console.log(tab)
  switch (tab) {
    case 'first':
      typeKey.value = 'article'
      await getData('article')

      break
    case 'second':
      typeKey.value = 'like'
      await getData('like')
      break
    case 'third':
      typeKey.value = 'collect'
      await getData('collect')
      break
    case 'fourth':
      break
    case 'fifth':
      break
    default:
      dataList.value = []
      break
  }
}

onMounted (async () => {
  await getData('article')
})

</script>

<template>
  <el-tabs v-model="activeName" class="nav-tabs"
            @tab-click="handleClick(activeName)"
            @tab-change="handleChange(activeName)">
    <el-tab-pane label="Article" name="first">
      <article-list :list="dataList" v-if="dataList.length>0"></article-list>
      <pagination-item
          :pageNum="pageRequestDTO.pageNum"
          :pageSize="pageRequestDTO.pageSize"
          :total="total"
          @size-change="onSizeChange"
          @current-change="onCurrentPage"/>
      <empty-item v-if="total === 0"></empty-item>


    </el-tab-pane>
    <el-tab-pane label="Likes" name="second">
      <article-list :list="dataList" v-if="dataList.length>0"></article-list>
      <pagination-item
          :pageNum="pageRequestDTO.pageNum"
          :pageSize="pageRequestDTO.pageSize"
          :total="total"
          @size-change="onSizeChange"
          @current-change="onCurrentPage"/>
      <empty-item v-if="total === 0"></empty-item>

    </el-tab-pane>
    <el-tab-pane label="Collects" name="third">
      <article-list :list="dataList" v-if="dataList.length>0"></article-list>
      <pagination-item
          :pageNum="pageRequestDTO.pageNum"
          :pageSize="pageRequestDTO.pageSize"
          :total="total"
          @size-change="onSizeChange"
          @current-change="onCurrentPage"/>
      <empty-item v-if="total === 0"></empty-item>

    </el-tab-pane>
    <el-tab-pane label="Fraud Cases" name="fourth">
      <discuss-item :list="dataList" :username="props.username" v-if="dataList.length"></discuss-item>
      <pagination-item
          :pageNum="pageRequestDTO.pageNum"
          :pageSize="pageRequestDTO.pageSize"
          :total="total"
          @size-change="onSizeChange"
          @current-change="onCurrentPage"/>
      <empty-item v-if="total === 0"></empty-item>

    </el-tab-pane>
    <el-tab-pane label="Issues" name="fifth">
      <empty-item></empty-item>
    </el-tab-pane>

  </el-tabs>
</template>

<style scoped>
.nav-tabs > .el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}

/deep/ .el-tabs__item {
  font-size: 16px;
  font-weight: 300;
}

.nav-tabs {
  width: 100%;
}

:deep(.el-tabs__item.is-top) {
  font-family: "Luckiest Guy";
}

</style>