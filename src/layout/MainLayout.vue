<script setup>
import {ref} from 'vue'
import SevenSearch from '@/components/common/SevenSearch.vue'
import SevenButton from '@/components/common/SevenButton.vue'
import {watch} from 'vue'
import {useRoute} from 'vue-router'
import {useUserStore} from '@/stores'

const selected = ref('首页')

const userStore = useUserStore()
const {user} = userStore.user
const {avatar} = user


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
  console.log('点击成功')
  selected.value = item
}
</script>

<template>
  <div class="co-index-container">
    <div class="co-header">
      <div class="co-header-logo header-item">
        <img src="@/assets/logo.svg" class="logo" alt="logo">
      </div>
      <div class="header-item index selected" :class="{ selected: selected.value === '/home' }"
           @click="selectItem('/home')">首页
      </div>
      <div class="header-item index" :class="{ selected: selected.value === '/find' }" @click="selectItem('/find')">
        发现
      </div>
      <div class="header-item index" :class="{ selected: selected.value === '/ask' }" @click="selectItem('/ask')">问问
      </div>
      <div class="header-search header-item">
        <seven-search></seven-search>
      </div>
      <div class="header-item">
        <seven-button></seven-button>
      </div>
      <div class="header-function-login" v-if="user !== null">
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
          <img class="avatar" :src="avatar" alt="">
        </div>
      </div>
      <div class="header-function-nologin" v-else>
        <div class="header-item">登录</div>
        <div class="header-item">注册</div>
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
    display: flex;
    flex-wrap: nowrap;
    justify-content: center; /* 水平居中 */
    align-items: center;
    padding: 0 2%;
    width: 100%;
    height: 60px;
    background: #fff;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);

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
    margin-top: 10px;
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