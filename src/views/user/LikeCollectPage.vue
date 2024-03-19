<script setup>
import {ref} from 'vue'
import {useUserStore} from '@/stores'

const userInfo = ref({})
const userStore = useUserStore()
userInfo.value = userStore.userInfo
</script>

<template>
  <div class="like-container">
    <div class="like-top-section">
      <div class="avatar-area">
        <img :src="userInfo.user.avatar" alt="" class="avatar">
      </div>
      <div class="nickname-area">
        <h3>{{ userInfo.user.username }}</h3>
      </div>
      <div class="info-area"></div>
    </div>
    <div class="like-main-section">
      <div class="tags-section">
        <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
          <el-tab-pane label="User" name="first">User</el-tab-pane>
          <el-tab-pane label="Config" name="second">Config</el-tab-pane>
          <el-tab-pane label="Role" name="third">Role</el-tab-pane>
          <el-tab-pane label="Task" name="fourth">Task</el-tab-pane>
        </el-tabs>
      </div>
    </div>
  </div>
</template>

<style scoped>
.like-top-section {

  display: flex;

  & > .avatar-area img {
    height: 130px;
    border-radius: 6px;
  }

  & > .nickname-area {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    margin-left: 3%;
    font-weight: 700;
    font-size: 28px;

  }
}
</style>