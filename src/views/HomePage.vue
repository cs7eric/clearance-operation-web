<script setup>
import {onMounted, ref} from 'vue'

import ArticleItem from '@/components/article/ArticleItem.vue'
import {getArticlesByPageUsingPost, getCountByUsernameUsingGet} from '@/openapi/api/articleController'
import router from '@/router'
import {followUsingPost, getRandomUserUsingGet} from '@/openapi/api/userController'
import {getCaseListUsingGet} from '@/openapi/api/fraudCaseController'
import {ElMessage} from 'element-plus'
import {useUserStore} from '@/stores'


const articleList = ref([])

const pageRequestDTO = ref ({
  pageNum: 1,
  pageSize: 7
})
const total = ref()

const userList = ref([])

const eventList = ref([])


const getArticles = async () => {

  const res = await getArticlesByPageUsingPost(pageRequestDTO.value)
  articleList.value = res.data.records
  total.value = res.data.total
}
// 文章分页
const onSizeChange = (size) => {
  pageRequestDTO.value.pageNum = 1
  pageRequestDTO.value.pageSize = size
  getArticles()
}
const onCurrentChange = (current) => {
  pageRequestDTO.value.pagenum = current
  getArticles()
}
getArticles()


const toEditor = () => {
  const routePath = router.resolve({ path: '/editor' }).href;
  window.open(routePath, '_blank');
}

const toUserDetail = (userId) => {
  router.push(`/user/profile/${userId}`)
}


const userParam = {
  count: 6
}

const eventParam = {
  count: 6
}
const getUserList = async () => {

  const res = await getRandomUserUsingGet(userParam)
  userList.value = res.data
}

const getEventList = async () => {
  const res = await getCaseListUsingGet(eventParam)
  eventList.value = res.data
}


const userInfo = ref({})
const userStore = useUserStore()
userInfo.value = userStore.userInfo


const followParam = ref({
  userId: '',
  followId: ''
})
const follow = async (followId) => {
  followParam.value.followId = followId
  followParam.value.userId = userInfo.value.user.id
  await followUsingPost(followParam.value)
  ElMessage({
    type: 'success',
    message: '关注成功'
  })
}

onMounted (async () => {
  await getArticles()
  await getEventList()
  await getUserList()
})

</script>

<template>
  <div class="home-container">
    <div class="home-main">

      <div class="main-article main-item">
        <div class="main-top text-shadow border-left-right">
          For <br/>Yours Security
        </div>
        <div v-for="article in articleList" :key="article.id" class="border-left-right article-card">
          <article-item :article="article"></article-item>
        </div>
        <div class="pagination-section">
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

        <div class="empty-content" v-if="articleList.length===0">
          <empty-item class="empty-item"></empty-item>
        </div>
      </div>
      <div class="main-function main-item">
        <div class="illustration-area">
          <img class="illustration" src="@/assets/illustration/index.svg" alt="">
        </div>
        <div class="function-item editor-section">
          <div class="function-title item">
            Post Something
          </div>
          <span class="description item">Post to the community, helping ourselves</span>
          <div class="item post-button">
              <post-button @click="toEditor"></post-button>

          </div>
        </div>
        <div class="function-item event-section">
          <div class="function-title item">
            What is Happening
          </div>
          <div class="case-list">
            <div class="case-item item" v-for="event in eventList" :key="event.id">
              <div class="case-left">
                <div class="case-region section">
                  <span>{{ event.region }} in Chinese</span>
                </div>
                <div class="case-title section">
                  <h3>{{ event.title }}</h3>
                </div>
                <div class="view-data section">
                  11k viewed
                </div>
              </div>
              <div class="case-right">

              </div>


            </div>
          </div>
        </div>
        <div class="function-item recommend-section">
          <div class="function-title item">
            Follow Them
          </div>
          <div class="user-list">
            <div class="user-item item" v-for="user in userList" :key="user.id" @click="toUserDetail(user.id)">
              <div class="user-left">
                <div class="avatar-area">
                  <img :src="user.avatar === null ? 'https://cs7eric-image.oss-cn-hangzhou.aliyuncs.com/images/image-20240403002622229.png' : user.avatar"  alt="" class="avatar">
                </div>
                <div class="user-info">
                  <span class="info username">{{ user.nickName }}</span>
                  <span class="info email">@{{user.nickName}}</span>
                </div>
              </div>
              <div class="user-right">
                <div class="follow-button ">
                  <shake-button @click="follow(user.id)"></shake-button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="website-base-section">
          <span class="website-item">term</span>
          <span class="website-item">contact us</span>
          <span class="website-item">privacy policy</span>
          <span class="website-item">豫ICP备2023014864号</span>
          <span class="website-item">Copyright &copy cccs7/cs7eric</span>
          <span class="website-item">联系邮箱：csq020611@gmail.com</span>


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
      margin-left: 40px;
    }

    .main-article {



      .article-card {
        padding: 20px;
        width: 800px;
        border-bottom: 1px solid rgba(230, 230, 230, 0.5);

        &:hover {
          background: #f7f7f7;
          cursor: pointer;
        }
      }
    }

    .main-function {
      width: 300px;
      margin-left: 40px;
      bottom: 0;

      .item {
        padding: 5px 16px 5px 16px;

        &:first-child {
          padding: 10px 16px 5px 16px;

        }

        &:last-child {
          padding: 10px 16px 15px 16px;

        }
      }

      .function-item {
        margin-top: 16px;
        border-radius: 15px;
        background: #f7f9f9;
        font-family: "Source Code Pro";

        .function-title {

          font-weight: 700;
          font-size: 20px;
        }

        .description {
          display: block;
          font-size: 15px;
          color: #0f1419;
        }
      }

      .illustration-area {
        display: flex;
        justify-content: flex-end;
        padding-top: 44px;
      }

    }

  }
}

.empty-item {
  width: 880px;
  height: 50vh;
}

.main-top {
  display: block;
  padding: 20px;
  font-size: 3em;
  color: #e6e6e6;
  text-shadow: 1px -1px #fff, -1px 1px #999, -5px 5px 2px #80808080;
  font-family: "Luckiest Guy"
}

.text-shadow {
  color: #e6e6e6;
  text-shadow: 1px -1px #fff, -1px 1px #999, -5px 5px 2px #80808080;
  font-family: "Luckiest Guy"
}

.case-list {

  margin-top: 20px;

  .case-item {


    &:hover {
      cursor: pointer;
      background: #eff1f1;
    }

    .section {
      margin-top: 2px;
    }

    .case-region {
      font-size: 13px;
      color: #536471;
    }

    .case-title {
      & > h3 {
        font-weight: 700;
        font-size: 15px;
        color: #0f1419;
      }
    }

    .view-data {
      font-size: 13px;
      color: #536471;
    }

  }
}

.recommend-section {

  .user-list {

    .user-item {
      display: flex;
      justify-content:space-between;
      align-items: center;
      margin-bottom: 10px;
      
      &:hover {
        cursor: pointer;
        background: #eff1f1;
      }
      .user-left {

        display: flex;
        align-items: center;
        justify-content: center;
        .avatar-area {
          .avatar {
            max-width: 36px;
            border-radius: 4px;
          }
        }

        .user-info {
          padding-left: 6px;
          display: flex;
          flex-direction: column;
          font-size: 15px;

          .username {
            font-weight: 700;
            color: #0f1419;
          }

          .email {
            color: #536471;
          }

          .info {
            justify-content: left;
          }
        }
      }

    }
  }
}

.website-base-section {
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
  margin-top: 10px;
  color: #536471;
  font-size: 13px;


  .website-item{
    display: block;
    margin-left: 5px;
    padding: 7px;
    cursor: pointer;

    &:hover {
      border-radius: 4px;
      background: #eff1f1;
      transition: all 0.3s;
      transform: scale(1.05);
    }
    
  }
}

.pagination-section {
  padding: 20px;

}

.border-left-right {
  border-left: 1px solid rgba(230, 230, 230, 0.4);
  border-right: 1px solid rgba(230, 230, 230, 0.4);
}
</style>