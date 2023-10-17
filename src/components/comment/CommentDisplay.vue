<script setup>
import {ref} from 'vue'
import {useUserStore} from '@/stores'
import CommentItem from '@/components/comment/CommentItem.vue'
import {commentCreateService, commentGet1stCommentService} from '@/api/comment'
import {ElNotification} from 'element-plus'

const commentList = ref([])
const userStore = useUserStore()
const userInfo = ref()
userInfo.value = userStore.userInfo

const commentContent =  ref('')

const props = defineProps({
  article: Object
})


const handleInsideClick = (event) => {
  event.stopPropagation(); // 阻止点击事件的传播
}

const getAllComments = async () => {
  const res = await commentGet1stCommentService(props.article.id)
  commentList.value = res.data
}

const submitComment = async () => {

  const articleId = props.article.id
  const authorAvatar = userInfo.value.user.avatar
  const userId = userInfo.value.user.id
  const nickName = userInfo.value.user.nickName === null ? userInfo.value.user.username : userInfo.value.user.nickName
  const content = commentContent.value

  await commentCreateService({userId, articleId, authorAvatar, nickName,  content})
  commentContent.value = ''
  ElNotification(
    {
      type: 'success',
      message: '评论发表成功'
    }

  )

}

getAllComments()

</script>

<template>
<div class="comment-container" @click="handleInsideClick">

  <div class="comment-function-section">
    <div class="avatar">
      <img :src="userInfo.user.avatar" alt="">
    </div>
    <div class="comment-input">
      <input v-model="commentContent" type="text" placeholder="快来发表你的见解吧 !">
      <el-button
          v-model="commentContent"
          class="submit-button"
          type="primary"
          @click="submitComment"
      >发布</el-button>
    </div>
  </div>
  <div class="comment-content-section">
    <div class="comment-profile">
      <h3>{{article.replyNum}} 条评论</h3>
    </div>
    <div class="comment-details">
      <comment-item
          class="comment-item"
          v-for="comment in commentList"
          :key="comment.id"
          :comment="comment"
      ></comment-item>
    </div>
  </div>
</div>
</template>

<style scoped>
.comment-container {

  margin-top: 15px;
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

      display: flex;
      align-items: center;
      margin-left: 10px;
      border-radius: 4px;
      width: 100%;
      border: 1px solid #e6e6e6;

      &>.submit-button {
        margin-right: 8px;
        height: 28px;
      }

      &>input {
        padding-left: 10px;
        height: 40px;
        width: 100%;


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