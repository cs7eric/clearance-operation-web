<script setup>
import { ref } from 'vue'
import DiscussItem from '@/views/search/DiscussItem.vue'
import EmptyItem from '@/components/EmptyItem.vue'

const activeName = ref('first')


</script>

<template>
  <el-tabs v-model="activeName" class="nav-tabs" @tab-click="handleClick">
    <el-tab-pane label="Article" name="first">
      <discuss-item></discuss-item>
    </el-tab-pane>
    <el-tab-pane label="Likes" name="second">
      <discuss-item></discuss-item>

    </el-tab-pane>
    <el-tab-pane label="Collects" name="third">
      <discuss-item></discuss-item>

    </el-tab-pane>
    <el-tab-pane label="Fraud Cases" name="fourth">
      <discuss-item></discuss-item>

    </el-tab-pane>
    <el-tab-pane label="Issues" name="fifth">
      <empty-item></empty-item>
    </el-tab-pane>

  </el-tabs>
</template>

<style scoped>
.nav-tabs > .el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}

/deep/ .el-tabs__item {
  font-size: 16px;
  font-weight: 300;
}

.nav-tabs {
  width: 100%;
}

:deep(.el-tabs__item.is-top) {
  font-family: "Luckiest Guy";
}

</style>