<script setup>
import {ref} from 'vue'
import {watch} from 'vue'
import {useRoute} from 'vue-router'
import {useUserStore} from '@/stores'
import router from '@/router'
import {Search} from '@element-plus/icons-vue'

const selected = ref('首页')

const userInfo = ref({})
const userStore = useUserStore()
userInfo.value = userStore.userInfo
const isUserExist = ref(false)
isUserExist.value = userStore.userExist()

const avatar = ref('')
if (isUserExist.value) {
  avatar.value = userInfo.value.user.avatar
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

const selectValue = ref('')
const searchValue = ref('')
const searchFunc = () => {
  console.log(searchValue.value)
}


</script>

<template>
  <div class="co-index-container">
    <div class="co-header">
      <div class="header-left">
        <div class="co-header-logo header-item">
          <img src="@/assets/logo.svg" class="logo" alt="logo">
        </div>
        <div class="header-item index selected text-shadow"
             :class="{ selected: selected.value === '/home' }"
             @click="selectItem('/home')">
          <h3 class="header-title">cookies</h3>
        </div>
        <div class="header-item">
          <el-input
              v-model="searchValue"
              style="width: 600px"
              placeholder="等你来搜"
              class="input-with-select el-input"
          >
            <template #prepend>
              <el-select v-model="selectValue" placeholder="全站" style="width: 85px;">
                <el-option label="文章" value="article"/>
                <el-option label="用户" value="user"/>
                <el-option label="诈骗案例" value="fraud"/>
                <el-option label="问题" value="issue"></el-option>
              </el-select>
            </template>
            <template #append>
              <el-button @click="searchFunc" :icon="Search"/>
            </template>
          </el-input>
        </div>
        <div class="header-item index"
             :class="{ selected: selected.value === '/find' }"
             @click="selectItem('/find')">
          <h3 class="header-title">Find</h3>

        </div>
        <div class="header-item index"
             :class="{ selected: selected.value === '/ask' }"
             @click="selectItem('/issues')">
          <h3 class="header-title">ask</h3>

        </div>
        <div class="header-item index"
             :class="{ selected: selected.value === '/ai' }"
             @click="selectItem('/ai')">
          <h3 class="header-title">AI</h3>
        </div>
        <div class="header-item index"
             :class="{ selected: selected.value === '/search' }"
             @click="selectItem('/search')">
          <h3 class="header-title">search</h3>

        </div>
      </div>
      <div class="header-center">
      </div>
      <div class="header-right">

        <div class="header-function-login" v-if="isUserExist">

          <div class="header-item">
            <el-dropdown>
            <span class="el-dropdown-link">
              <img class="avatar" :src="avatar" v-if="avatar" alt="">
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

    </div>
    <div class="co-main">
      <router-view/>
    </div>
    <div class="footer"></div>
  </div>
</template>

<style scoped>


/deep/ .el-input {
  --el-border-radius-base: 24px;
}

/deep/ .el-input-group__append {
  width: 50px;
}

/deep/ .el-input__wrapper {
  background: #fff;
}


.co-index-container {

  .co-header {
    position: fixed;
    top: 0;
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between; /* 水平居中 */
    align-items: center;
    padding: 0 10%;
    width: 100%;
    height: 60px;
    background: #fff;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    z-index: 999;

    .header-left {
      display: flex;

      &>.selected {
        font-weight: 700;
        color: #000;
        font-size: 28px;
      }
    }
    
    .header-center  {
      display: flex;
    }

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
      align-items: center;
      width: auto;
      color: #8590a6;
      margin-left: 15px; /* 减少了padding */
      margin-right: 5px; /* 新增，确保两侧padding一致 */




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
  font-size: 28px !important;
  color: #b8b8b8;
}

.header-title {
  font-weight: 700;
  font-family: "Luckiest Guy";
}

.header-right {
  display: flex;
}

.index {
  line-height: 40px !important;
  font-size: 20px;

  &:hover {
    transition: all 0.3s;
    transform: scale(1.1);
    cursor: pointer;
  }
}

.text-shadow {
  text-align: center;
  color: #bfbfbf !important;
  font-size: 2em !important;
  text-shadow: 1px -1px #fff, -1px 1px #999,-5px  5px 2px #80808080;
  font-family: "Luckiest Guy"
}
</style>