<script setup>
import {ref} from 'vue'

const replyKey = ref(false)

const toReply = () => {
  replyKey.value =  !replyKey.value
}
</script>

<template>
  <div class="comment-item-container">
    <div class="user-profile-section">
      <div class="user-avatar">
        <img class="avatar" src="@/assets/default_avatar.jpg" alt="">
      </div>
      <div class="user-nickname">
        <h5>cccs7</h5>
      </div>
    </div>
    <div class="comment-detail-section">
      <div class="detail">
        <p>
          this is a test text for comment
        </p>
      </div>
      <div class="other">
        <div class="date">06-11</div>
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
      <div class="comment-input" v-if="replyKey">
        <input type="text" placeholder="表达你的观点吧 ！">
        <el-button type="primary" class="submit-button">发表</el-button>
      </div>
    </div>
  </div>
  <div class="comment-child-container">
<!--    <comment-item></comment-item>-->
  </div>
</template>

<style scoped>
.comment-item-container {
  .user-profile-section {
    display: flex;

    .user-avatar {
      & > .avatar {
        width: 24px;
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
            width:14px;

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

      &>input {
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