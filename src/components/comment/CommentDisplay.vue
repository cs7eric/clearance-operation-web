<script setup>
import {ref} from 'vue'
import {useUserStore} from '@/stores'
import CommentItem from '@/components/comment/CommentItem.vue'

const userStore = useUserStore()
const userInfo = ref()
userInfo.value = userStore.userInfo


const handleInsideClick = (event) => {
  event.stopPropagation(); // 阻止点击事件的传播
  // 你可以在这里添加其他的处理逻辑，如果需要的话
}

</script>

<template>
<div class="comment-container" @click="handleInsideClick">

  <div class="comment-function-section">
    <div class="avatar">
      <img :src="userInfo.user.avatar" alt="">
    </div>
    <div class="comment-input">
      <input type="text" placeholder="快来发表你的见解吧 !">
    </div>
  </div>
  <div class="comment-content-section">
    <div class="comment-profile">
      <h3>77 条评论</h3>
    </div>
    <div class="comment-details">
      <comment-item
          v-for="o in 5" :key="o"
          class="comment-item"
      ></comment-item>
    </div>
  </div>
</div>
</template>

<style scoped>
.comment-container {

  margin-top: 15px;
  //border: 1px solid #000;
  .comment-function-section{

    display: flex;
    align-items: center;

    .avatar {
      width: 40px;
      height: 40px;

      &>img {
          border-radius: 4px;
      }
    }

    .comment-input {

      flex: 1;
      margin-left: 10px;
      &>input {
        padding-left: 10px;
        height: 40px;
        width: 100%;
        border-radius: 4px;
        border: 1px solid #e6e6e6;

        &::placeholder {
          color: #999999;
        }
      }
    }
  }

  .comment-content-section{
    margin-top: 15px;
    border-radius: 4px;
    border: 1px solid #e6e6e6;

    .comment-profile {
      padding: 15px;
      border-bottom: 1px solid #e6e6e6;

      &>h3 {
        font-size: 15px;
        font-weight: 700;
        color: #454545;
      }
    }

    .comment-details{
      padding: 15px;

      .comment-item {
        margin-bottom: 15px;
      }
    }
  }
}
</style>