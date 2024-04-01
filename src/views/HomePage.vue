<script setup>
import {ref} from 'vue'
import {articleGetAllService} from '@/api/article'

import ArticleItem from '@/components/article/ArticleItem.vue'
import {useUserStore} from '@/stores'

const articleList = ref([])

const getArticles = async () => {
  const articleDTO = ref()
  const userInfo = ref()
  const userStore = useUserStore()
  console.log(userStore.userInfo)
  userInfo.value = userStore.userInfo
  console.log(userInfo.value.user.id)
  articleDTO.value = userInfo.value.user
  console.log(articleDTO.value)
  const res = await articleGetAllService(articleDTO)
  console.log(res)
  articleList.value = res.data
}

getArticles()


</script>

<template>
  <div class="home-container">
    <div class="home-main">
      <div class="main-article main-item">
        <div v-for="article in articleList" :key="article.id" class="article-card">
          <article-item :article="article"></article-item>
        </div>
        <div class="empty-content" v-if="articleList.length===0">
          <empty-item class="empty-item"></empty-item>
        </div>
      </div>
      <div class="main-function main-item">
        <div class="illustration-area">
          <img class="illustration" src="@/assets/illustration/index.svg" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

.home-container {


  .home-main {
    display: flex;
    justify-content: center;
    margin-bottom: 40px;
    padding-top: 58px;


    .main-item {
      margin-left: 20px;
      padding-top: 28px;

    }

    .main-article {
      padding: 10px;
      border-left: 1px solid #e6e6e6;
      border-right: 1px solid #e6e6e6;


      .article-card {
        padding: 16px;
        width: 800px;
        margin-bottom: 4px;
        border-bottom: 1px solid #e6e6e6;
      }
    }

    .main-function {
      width: 250px;
      bottom: 0;


      .illustration-area {
        display: flex;
        justify-content: flex-end;
      }

    }

  }
}

.empty-item {
  width: 880px;
  height: 100vh;
}
</style>