<script setup>
import {ref, onMounted} from 'vue'
import {searchFuzzyUsingGet} from '@/openapi/api/userController'
import {useSearchStore} from '@/stores'

const dataList = ref([])

const key = ref()
const pageRequestDTO = ref ({
	pageNum: 1,
	pageSize: 7,
  keyword: key
})
const total = ref()




onMounted(() => {
  const searchStore = useSearchStore()
  key.value = searchStore.searchKey
})

const getData = async () => {

  const res = await searchFuzzyUsingGet(pageRequestDTO.value)
  dataList.value = res.data.records
  total.value = res.total
}
// 文章分页
const onSizeChange = (size) => {
  pageRequestDTO.value.pageNum = 1
  pageRequestDTO.value.pageSize = size
  getData()
}
const onCurrentChange = (current) => {
  pageRequestDTO.value.pagenum = current
  getData()
}

onMounted(() => {
  getData()
})

</script>

<template>
  <div class="user-search-container">
    <div class="userResult-main">
      <div v-for="items in dataList" :key="items.id" class="user-card item-flex">
        <div class="user-avatar">
          <img :src="items.avatar" alt="">
        </div>
        <div class="user-middle">
          <div class="item-flex item-center">
            <h3 class="user-name" style="font-size: 15px">{{ items.username }}</h3>
            <h3 class="nickname">{{ items.nickName }}</h3>
          </div>
          <div class="user-info">
            <div class="info-item">zhengzhou, Henan</div>
            <div class="info-item">·</div>
            <div class="info-item">
              <img class="icon" src="@/assets/icon/bookmark.svg" alt="">
            </div>
            <div class="info-item">{{ items.fans }}</div>
            <div class="info-item">·</div>
            <div class="info-item">
              <img class="icon" src="@/assets/icon/focuson.svg" alt="">
            </div>
            <div class="info-item">{{ items.focusOn }}</div>
          </div>
        </div>
        <div class="user-right">
          <el-button class="follow-button" plain>follow</el-button>
        </div>
      </div>
      <div class="pagination">
        <el-pagination
            v-model:current-page="pageRequestDTO.pageNum"
            v-model:page-size="pageRequestDTO.pageSize"
            :page-sizes="[2, 3, 5, 10]"
            :background="true"
            layout="total, sizes, prev, pager, next, jumper"
            :total="total"
            @size-change="onSizeChange"
            @current-change="onCurrentChange"
            style="margin-top: 20px; justify-content: flex-end"
        />

      </div>
    </div>
    <empty-item v-if="dataList.length == 0"></empty-item>
  </div>
</template>

<style scoped>
.user-search-container {
  width: 880px;

}

.userResult-main {
  .user-card {
    justify-content: space-between;
    height: 100px;
    padding: 16px;
    border-radius: 9px;
    border: 1px solid #d0d7de;
    margin-bottom: 16px;
    background-color: #ffffff;

    &:hover {
      cursor: pointer;
    }

    .user-avatar {
      & > img {
        height: 60px;
        width: 60px;
        border-radius: 50%;
      }
    }

    .user-middle {
      width: 695px;
      height: 69px;
      margin: 0 16px;

      .user-info {
        margin: 19px 0 0;
        font-size: 14px;

        & > span:nth-child(even) {
          margin: 0 8px 0 8px;
        }
      }
    }

    .user-right {
      width: 74px;
      height: 69px;

      & > button:hover {
        background-color: #269a4f;
      }
    }
  }
}

.item-flex {
  display: flex;
}

.item-center {
  align-items: center;
}


.user-name {
  font-size: 22px;
  font-weight: 700;
  color: #2069da;
}

.nickname {
  margin-left: 6px;
  font-size: 16px;
  font-weight: 300;
  color: #636c76;
}

.user-info {
  display: flex;
}

.info-item {
  padding-right: 6px;
  color: #636c76;
  font-size: 12px;

  & > .icon {
    max-width: 16px;
  }
}

.follow-button {

  background: #f6f8fa;

  &:hover {
    background: transparent !important;
  }
}
</style>