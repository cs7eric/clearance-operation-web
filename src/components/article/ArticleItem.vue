<script setup>

import {parseHTMLContent} from '@/util/format'
import {formatRelativeTime} from '@/util/time'
import {ref} from 'vue'
import CommentDisplay from '@/components/comment/CommentDisplay.vue'

defineProps({
  article: Object
})

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
        <button class="button-agree">
          <svg t="1695715744270" class="icon" viewBox="0 0 1035 1024" version="1.1"
               xmlns="http://www.w3.org/2000/svg" p-id="1166" width="200" height="200">
            <path
                d="M420.229565 174.714435c46.280348-67.706435 146.16487-67.706435 192.445218 0l18.309565 26.790956a3218.67687 3218.67687 0 0 1 294.288695 532.457739l3.81774 8.793044c28.571826 65.680696-14.58087 140.265739-85.771131 148.212869a2942.820174 2942.820174 0 0 1-653.723826 0c-71.190261-7.94713-114.342957-82.532174-85.782261-148.212869l3.82887-8.793044a3218.777043 3218.777043 0 0 1 294.288695-532.457739l18.298435-26.790956z m138.607305 212.224a42.384696 42.384696 0 1 1-84.758261 0 42.384696 42.384696 0 0 1 84.758261 0zM516.452174 503.485217a31.788522 31.788522 0 0 1 31.788522 31.788522V747.186087a31.788522 31.788522 0 0 1-63.565913 0V535.262609a31.788522 31.788522 0 0 1 31.777391-31.788522z"
                fill="#056ce5" p-id="1167"></path>
          </svg>
          <span> 赞同  {{ article.likes }}</span>
        </button>
        <button class="button-disagree">
          <svg t="1695715744270" class="icon" viewBox="0 0 1035 1024" version="1.1"
               xmlns="http://www.w3.org/2000/svg" p-id="1166" width="200" height="200">
            <path
                d="M420.229565 174.714435c46.280348-67.706435 146.16487-67.706435 192.445218 0l18.309565 26.790956a3218.67687 3218.67687 0 0 1 294.288695 532.457739l3.81774 8.793044c28.571826 65.680696-14.58087 140.265739-85.771131 148.212869a2942.820174 2942.820174 0 0 1-653.723826 0c-71.190261-7.94713-114.342957-82.532174-85.782261-148.212869l3.82887-8.793044a3218.777043 3218.777043 0 0 1 294.288695-532.457739l18.298435-26.790956z m138.607305 212.224a42.384696 42.384696 0 1 1-84.758261 0 42.384696 42.384696 0 0 1 84.758261 0zM516.452174 503.485217a31.788522 31.788522 0 0 1 31.788522 31.788522V747.186087a31.788522 31.788522 0 0 1-63.565913 0V535.262609a31.788522 31.788522 0 0 1 31.777391-31.788522z"
                fill="#056ce5" p-id="1167"></path>
          </svg>

        </button>
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
        <div class="item">
          <img class="icon" src="@/assets/icon/article_star.svg" alt="">
          <span>收藏</span>
        </div>
        <div class="item">
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
  .article-function {
    display: flex;
    margin-top: 15px;

    .function-agree {

      .button-disagree {

        margin-left: 10px;
        width: 40px;
        height: 40px;
        border-radius: 4px;
        background: #dce6f2;
        color: #056ce5;

        .icon {
          max-width: 12px;
          height: auto;
          transform: rotate(180deg);
        }
      }

      .button-agree {

        width: 100px;
        height: 40px;
        border-radius: 4px;
        background: #dce6f2;
        color: #056ce5;

        .icon {
          max-width: 12px;
          height: auto;
        }
      }
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


</style>