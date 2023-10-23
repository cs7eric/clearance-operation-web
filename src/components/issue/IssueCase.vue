<script setup>
import {formatRelativeTime} from '@/util/time'

const props = defineProps({
  issue: Object
})


</script>

<template>
  <div class="issue-case-container">
    <div class="case-left">
      <p class="focus left-item">最近 {{ props.issue.focusNum }} 关注</p>

      <router-link :to="{name: 'IssueProfile', params :{id: props.issue.id}}">
        <h3 class="title left-item">{{ props.issue.title }}</h3>
      </router-link>
      <p class="data left-item">999 浏览 · {{ props.issue.replyNum }} 回答 · {{ props.issue.focusNum }}关注 ·
        {{ formatRelativeTime(props.issue.createTime) }}的提问</p>
    </div>
    <div class="case-right">
      <el-button type="primary">
        写回答
      </el-button>
    </div>

  </div>
</template>

<style scoped>
.issue-case-container {
  display: flex;
  justify-content: space-between;
  align-items: center;

  .case-left {

    .left-item {
      margin-top: 5px;
    }

    .focus {
      font-size: 14px;
      color: #8493a5;
    }

    .title {
      font-weight: 700;
      font-size: 15px;
    }

    .data {
      font-size: 14px;
      color: #999999;
    }
  }
}
</style>