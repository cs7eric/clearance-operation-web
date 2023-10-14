<script setup>
import {ref} from 'vue'
import SevenSearch from '@/components/common/SevenSearch.vue'
import SevenButton from '@/components/common/SevenButton.vue'
import {watch} from 'vue'
import {useRoute} from 'vue-router'
import {useUserStore} from '@/stores'
import router from '@/router'

const selected = ref('首页')

const userInfo = ref({})
const userStore = useUserStore()
userInfo.value = userStore.userInfo
const isUserExist = ref(false)
isUserExist.value = userStore.userExist()



const avatar = ref('')
if (isUserExist.value) {
  console.log("------")
  console.log(isUserExist.value)
  console.log(userInfo.value.user.avatar)
  avatar.value = userInfo.value.user.avatar
  console.log(userInfo.value.user.avatar)
}


const route = useRoute()
watch(() => route.path, newPath => {
  switch (newPath) {
    case '/home':
      selected.value = '/home'
      break
    case '/find':
      selected.value = '/find'
      break
    case '/ask':
      selected.value = '/ask'
      break
    default:
      selected.value = '/home'
  }
}, {
  immediate: true
})
const selectItem = (item) => {
  router.push(item)
  console.log('点击成功')
  selected.value = item
}

const logout = () => {
  userStore.removeUser()
  userStore.removeJWT()
  location.reload()
  router.push('/login')
}


</script>

<template>
  <div class="co-index-container">
    <div class="co-header">
      <div class="co-header-logo header-item">
        <img src="@/assets/logo.svg" class="logo" alt="logo">
      </div>
      <div class="header-item index selected"
           :class="{ selected: selected.value === '/home' }"
           @click="selectItem('/home')">首页
      </div>
      <div class="header-item index"
           :class="{ selected: selected.value === '/find' }"
           @click="selectItem('/find')">
        发现
      </div>
      <div class="header-item index"
           :class="{ selected: selected.value === '/ask' }"
           @click="selectItem('/ask')">
        问问
      </div>
      <div class="header-search header-item">
        <seven-search></seven-search>
      </div>
      <div class="header-item">
        <seven-button></seven-button>
      </div>
      <div class="header-function-login" v-if="isUserExist">
        <div class="header-item">
          <p>创作</p>
        </div>
        <div class="header-item">
          <p>私信</p>
        </div>
        <div class="header-item">
          <p>消息</p>
        </div>
        <div class="header-item">
          <el-dropdown>
            <span class="el-dropdown-link">
              <img class="avatar" :src="avatar" v-if="avatar"  alt="">
              <img src="" alt="" v-else>
            </span>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item>
                  <router-link to="/user">我的主页</router-link>
                </el-dropdown-item>
                <el-dropdown-item>
                  <router-link to="/user/info">个人信息</router-link>
                </el-dropdown-item>
                <el-dropdown-item disabled>Action 4</el-dropdown-item>
                <el-dropdown-item divided @click="logout">退出</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
      </div>
      <div class="header-function-nologin" v-if="!isUserExist">
        <div class="header-item">
          <router-link to="/login">登录</router-link>
        </div>
        <div class="header-item">
          <router-link to="/login">注册</router-link>
        </div>
      </div>


    </div>
    <div class="co-main">
      <router-view/>
    </div>
    <div class="footer"></div>
  </div>
</template>

<style scoped>
body {
  background: #f6f6f6;
}

.co-index-container {

  .co-header {
    position: fixed;
    top: 0;
    display: flex;
    flex-wrap: nowrap;
    justify-content: center; /* 水平居中 */
    align-items: center;
    padding: 0 3%;
    width: 100%;
    height: 60px;
    background: #fff;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    z-index: 999;

    .avatar {
      width: auto;
      height: 34px;
      border-radius: 5px;
    }

    .header-function-login, .header-function-nologin {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .header-item {
      display: flex;
      justify-content: center;
      text-align: center;
      width: auto;
      line-height: 40px;
      color: #8590a6;
      margin-left: 15px; /* 减少了padding */
      margin-right: 5px; /* 新增，确保两侧padding一致 */


      &:hover {
        color: #121212;
        font-weight: 700;
        cursor: pointer;
      }

      &.selected {
        font-weight: bold;
        border-bottom: 2px solid blue;
        color: blue;
      }

    }


    .co-header-logo {
      max-width: 100px;
      height: auto;

      .logo {
        width: 36px;
      }
    }
  }

  .co-main {
    display: flex;
    justify-content: center; /* 水平居中 */
    margin-top: 88px;
  }
}

.icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 20px;
  width: 40px;
  justify-content: center;


}

.icon-with-text > span {
  font-size: 1px;
}


.selected {
  font-weight: bold;
  border-bottom: 2px solid blue;
  color: blue;
}

</style>