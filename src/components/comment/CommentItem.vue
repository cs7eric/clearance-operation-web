<script setup>
import {ref} from 'vue'
import {formatRelativeTime} from '@/util/time'
import {commentGetRepliesListService} from '@/api/comment'

const replyKey = ref(false)

const props = defineProps({
  comment: Object
})

const getChildList = async (articleId, parentId) => {
  return await commentGetRepliesListService(articleId, parentId)
}

const expandChildComments = async (articleId, parentId) => {
  const res = await getChildList(articleId, parentId)
  return res.data
}

const toReply = () => {
  replyKey.value = !replyKey.value
}
</script>

<template>
  <div class="comment-item-container">
    <div class="user-profile-section">
      <div class="user-avatar">
        <img class="avatar" :src="comment.authorAvatar === null ? '/src/assets/avatar.jpg' : comment.authorAvatar"
             alt="">
      </div>
      <div class="user-nickname">
        <h5>{{ comment.nickname }}</h5>
      </div>
    </div>
    <div class="comment-detail-section">
      <div class="detail">
        <p>
          {{ comment.content }}
        </p>
      </div>
      <div class="other">
        <div class="date">{{ formatRelativeTime(comment.createTime) }}</div>
        <div class="function">
          <div class="reply function-item" @click="toReply">
            <img class="icon" src="@/assets/icon/article_comment.svg" alt="">
            回复
          </div>
          <div class="like function-item">
            <img class="icon" src="@/assets/icon/article_comment.svg" alt="">
            喜欢
          </div>
        </div>
      </div>
      <div class="expand-comments" @click="expandChildComments(comment.articleId, comment.parentId)"
           v-if="comment.replyNum !== 0">
        展开评论
      </div>
      <div class="comment-input" v-if="replyKey">
        <input type="text" placeholder="表达你的观点吧 ！">
        <el-button type="primary" class="submit-button">发表</el-button>
      </div>
    </div>
    <div class="comment-child-container">
      <comment-item v-if="getChildList !== null"></comment-item>
    </div>
  </div>

</template>

<style scoped>
.comment-item-container {
  .user-profile-section {
    display: flex;

    .user-avatar {
      & > .avatar {
        width: 24px;
        border-radius: 3px;
      }
    }

    .user-nickname {

      margin-left: 10px;

      & > h5 {
        height: 24px;
        line-height: 24px;
        font-size: 15px;
        font-weight: 700;
        color: #454545;
      }
    }
  }

  .comment-detail-section {
    padding-left: 34px;
    font-size: 15px;
    color: #454545;

    .other {
      display: flex;
      justify-content: space-between;
      font-size: 13px;
      color: #999999;

      .function {
        display: flex;

        .function-item {
          display: flex;
          align-items: center;
          cursor: pointer;

          .icon {
            margin-right: 5px;
            width: 14px;

          }
        }

        .like {
          margin-left: 15px;
        }
      }
    }

    .comment-input {
      display: flex;
      align-items: center;
      margin-top: 10px;
      padding: 5px;
      border-radius: 5px;
      border: 1px solid #e6e6e6;

      & > input {
        padding-left: 10px;
        height: 34px;
        width: 100%;
        border-radius: 4px;

        &::placeholder {
          color: #999999;
        }
      }

      .submit-button {
        margin-right: 5px;
        height: 28px;
        font-weight: 700;
      }
    }

  }
}

.comment-child-container {
  margin: 10px 0;
  padding-left: 34px;
}
</style>