<script setup>
import {ref} from 'vue'
import {formatRelativeTime} from '@/util/time'
import {commentCreateService, commentGetRepliesListService} from '@/api/comment'
import {ElNotification} from 'element-plus'
import {useUserStore} from '@/stores'

const replyKey = ref(false)
const expandRepliesKey = ref(false)
const props = defineProps({
  comment: Object
})

const repliesList = ref([])
const repliesContent = ref('')

const userStore = useUserStore()
const userInfo = ref()
userInfo.value = userStore.userInfo

const getChildList = async (articleId, commentId) => {
  return await commentGetRepliesListService(articleId, commentId)
}

const expandChildComments = async (articleId, parentId) => {
  const res = await getChildList(articleId, parentId)
  repliesList.value = res.data
  expandRepliesKey.value = !expandRepliesKey.value
}

const submitReplies = async (commentId) => {
  const articleId = props.comment.articleId
  const authorAvatar = userInfo.value.user.avatar
  const userId = userInfo.value.user.id
  const nickName = userInfo.value.user.nickName === null ? userInfo.value.user.username : userInfo.value.user.nickName
  const content = repliesContent.value
  const parentId =  commentId

  await commentCreateService({userId, articleId, parentId,authorAvatar, nickName,  content})
  repliesContent.value = ''
  ElNotification(
    {
      type: 'success',
      message: '回复成功'
    }
  )
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
        <h5>{{ comment.nickName === null ? '测试用户' : comment.nickName}}</h5>
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
      <div class="expand-comments"
           @click="expandChildComments(comment.id, comment.articleId)"
           v-if="comment.replyNum > 0">
        <p>{{expandRepliesKey === false ? '展开评论' : '收起评论'}}</p>
      </div>
      <div class="comment-input" v-if="replyKey">
        <input type="text" v-model="repliesContent" placeholder="表达你的观点吧 ！">
        <el-button type="primary" @click="submitReplies(comment.id)" class="submit-button">发表</el-button>
      </div>
    </div>
    <div class="comment-child-container" v-if="expandRepliesKey">
      <comment-item
          v-for="replies in repliesList"
          :key="replies.id"
          :comment="replies"></comment-item>
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
    .expand-comments {

      cursor: pointer;
      
      &>p {
        font-size: 12px;
        color: #0066ff;
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