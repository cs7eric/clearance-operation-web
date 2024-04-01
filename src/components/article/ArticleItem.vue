<script setup>

import {parseHTMLContent} from '@/util/format'
import {formatRelativeTime} from '@/util/time'
import {ref} from 'vue'
import CommentDisplay from '@/components/comment/CommentDisplay.vue'
import {userActionService} from '@/api/user'
import {useUserStore} from '@/stores'
import {ElMessage} from 'element-plus'

defineProps({
  article: Object
})

const isLiked = ref(false)

const userInfo = ref({})
const userStore = useUserStore()
userInfo.value = userStore.userInfo

const expandCommentKey = ref(false)
const selectedArticle = ref(null)
const expandContent = (articleId) => {
  selectedArticle.value = articleId
}
// 折叠时文本显示处理
const truncatedText = (text) => {

  const doc = parseHTMLContent(text)
  return doc.length > 140 ? doc.slice(0, 140) + '...' : doc
}

// 判断当前文章是否展开
const isExpand = (text) => {
  return text.length >= 140
}

// 展开评论
const expandComment = (() => {
  expandCommentKey.value = !expandCommentKey.value
})

// 点赞文章
const likeArticle = async (articleId) => {

  const userId = userInfo.value.user.id
  await userActionService('like', userId, articleId)
    .then(response => {
      if (response.code === 200) {
        isLiked.value = !isLiked.value
      } else {
        ElMessage({
          message: 'error',
          type: 'error'
        })
      }
    })
}

//举报文章
const reportArticle = () => {
  ElMessage({
    message: '举报已提交',
    type: 'success'
  })
}

//收藏文章
const collectArticle = async (articleId) => {
  const userId = userInfo.value.user.id
  await userActionService('collect', userId, articleId)
    .then(response => {
      if (response.code !== 200) {
        ElMessage({
          message: 'error',
          type: 'error'
        }) 
      }
    })
}


</script>

<template>

  <div class="card-main-container">
    <div class="article-status">
      <p> {{ article.author }} 回答了问题 · {{ formatRelativeTime(article.publishTime) }}</p>
    </div>
    <div class="article-title">
      <h3>{{ article.title }}</h3>
    </div>
    <div class="article-content" v-if="selectedArticle !== article.id">
      <div class="content-image">
        <img :src="article.cover" v-if="article.cover !== null" alt="">
      </div>
      <div class="content-text">
        <div class="content-text-container" v-html="parseHTMLContent(truncatedText(article.content))"></div>
        <button class="button-expand" @click="expandContent(article.id)" v-if="isExpand(article.content)">
          查看全文
        </button>

      </div>
    </div>
    <div class="article-content" v-if="isExpand(article.content)">
      <div class="expanded-context-section" v-if="selectedArticle === article.id">
        <div class="article-content-container" v-html="article.content"></div>
      </div>
    </div>


    <div class="article-function">
      <div class="function-agree">
        <agree-button :class="" @click="likeArticle(article.id)"></agree-button>
      </div>
      <div class="function-other">
        <div class="item">
          <img class="icon" src="@/assets/icon/article_comment.svg" alt="">
          <button class="comment-button" @click="expandComment()">
            {{ expandCommentKey === true ? '收起评论' : '评论' }}
          </button>
        </div>
        <div class="item">
          <img class="icon" src="@/assets/icon/article_share.svg" alt="">
          <span>分享</span>
        </div>
        <div class="item" @click="collectArticle(article.id)">
          <img class="icon" src="@/assets/icon/article_star.svg" alt="">
          <span>收藏</span>
        </div>
        <div class="item" @click="reportArticle()">
          <img class="icon" src="@/assets/icon/article_report.svg" alt="">
          <span>举报</span>
        </div>
        <div class="item">

        </div>
      </div>
    </div>
    <div class="article-comment"
         v-if="expandCommentKey"
         @click="expandComment"
         ref="commentRef"
    >
      <comment-display :article="article"></comment-display>
    </div>


  </div>
</template>

<style scoped>
.article-content-container {
  font-size: 16px;
  line-height: 1.5;
  border-radius: 5px;
}

.card-main-container {

  margin: 10px 10px 0 0;

  .article-function {
    display: flex;
    margin-top: 15px;

    .function-agree {


    }

    .function-other {

      display: flex;
      margin-left: 40px;

      .item {
        display: flex;
        justify-content: center; /* 水平居中 */
        align-items: center;
        margin-left: 20px;
        height: 100%;
        transition: transform 0.3s ease;
        cursor: pointer;

        &:hover {
          transform: scale(1.15);
        }

        & > .icon {
          max-width: 25px;
          height: auto;
          margin-right: 6px;
          fill: #8493a5;
        }
      }


    }
  }

  .article-status {
    & > p {
      color: #8590a6;
      font-size: 12px;
    }
  }

  .article-title {

    & > h3 {
      font-size: 18px;
      font-weight: 700;
      margin-top: 5px;
      color: #121212;
    }
  }

  .article-content {
    display: flex;
    margin-top: 10px;

    .content-text {
      display: inline-block;
      flex: 1;

      &:first-child {
        margin-right: 20px;
      }

      .content-text-container {
        display: inline-block;
        align-items: center;
      }

      .button-expand {
        display: inline-block;
        color: #175199;
      }

      .icon {
        max-width: 20px;
        height: auto;
      }


    }

    .content-image img {

      margin-right: 10px;
      height: 120px;
      width: 220px;
      border-radius: 7px;
      object-fit: cover;

    }
  }
}



.is-liked {

}


</style>