<script setup>
import {ref, onMounted} from 'vue'
import DiscussItem from '@/views/search/DiscussItem.vue'
import EmptyItem from '@/components/empty/EmptyItem.vue'
import {getArticlesByPageUsingPost, getCountByUsernameUsingGet} from '@/openapi/api/articleController'

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

const pageRequestDTO = ref({
  pageNum: 1,
  pageSize: 2,
  username: props.username
})

const getCount =  async () =>{
  await getCountByUsernameUsingGet({
    username: props.username
  }).then(res => {
    total.value = res.data
  })
}

const getData = async () => {
  const res = await getArticlesByPageUsingPost({
    pageNum: pageRequestDTO.value.pageNum,
    pageSize: pageRequestDTO.value.pageSize,
    username: props.username
  })
  dataList.value = res.data
  await getCount()
}

const onSizeChange = (size) => {
  pageRequestDTO.value.pageNum = 1
  pageRequestDTO.value.pageSize = size
  getData()
}

const onCurrentPage = (current) => {
  pageRequestDTO.value.pageNum = current
  getData()

}

const handleClick = async (tab) => {

  // activeName.value = tab

}

const handleChange = async (tab) => {
  console.log(tab)
  switch (tab) {
    case 'first':
      await getData()
      break
    case 'second':
      dataList.value = []

      break
    case 'third':
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
  await getData()
})

</script>

<template>
  <el-tabs v-model="activeName" class="nav-tabs"
            @tab-click="handleClick(activeName)"
            @tab-change="handleChange(activeName)">
    <el-tab-pane label="Article" name="first">
      <discuss-item :list="dataList" v-if="dataList.length>=0"></discuss-item>
      <pagination-item
          :pageNum="pageRequestDTO.pageNum"
          :pageSize="pageRequestDTO.pageSize"
          :total="total"
          @size-change="onSizeChange"
          @current-change="onCurrentPage"/>
      <empty-item v-if="dataList.length===0"></empty-item>


    </el-tab-pane>
    <el-tab-pane label="Likes" name="second">
      <discuss-item :list="dataList" :username="props.username" v-if="dataList.length"></discuss-item>
      <empty-item v-else></empty-item>

    </el-tab-pane>
    <el-tab-pane label="Collects" name="third">
      <discuss-item :list="dataList" :username="props.username" v-if="dataList.length"></discuss-item>
      <empty-item v-else></empty-item>

    </el-tab-pane>
    <el-tab-pane label="Fraud Cases" name="fourth">
      <discuss-item :list="dataList" :username="props.username" v-if="dataList.length"></discuss-item>
      <empty-item v-else></empty-item>

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