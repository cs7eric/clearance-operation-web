<script setup>

</script>

<template>
  <div class="fixed">
    <div class="left-item">1.个人信息</div>
    <div class="left-item">1.个人信息</div>
    <div class="left-item">1.个人信息</div>
    <div class="left-item">1.个人信息</div>
    <div class="left-item">1.个人信息</div>
    <div class="left-item">1.个人信息</div>
    <div class="left-item">1.个人信息</div>
    <div class="left-item">1.个人信息</div>
    <div class="left-item">1.个人信息</div>
    <div class="left-item">1.个人信息</div>
  </div>
  <div class="scrollable">
    <div class="content">
      <h1>hi! cccs7</h1>
      <h1>test</h1>
      <h1>test</h1>
      <h1>test</h1>
      <h1>test</h1>
      <h1>test</h1>
      <h1>test</h1>
      <h1>test</h1>
      <h1>test</h1>
      <h1>test</h1>
      <h1>test</h1>
      <h1>test</h1>
      <h1>test</h1>
      <h1>test</h1>
      <h1>test</h1>
      <h1>test</h1>
      <h1>test</h1>
      <h1>test</h1>
      <h1>test</h1>
      <h1>test</h1>
      <h1>test</h1>
      <h1>test</h1>
      <h1>test</h1>
      <h1>test</h1>
      <h1>test</h1>
      <h1>test</h1>
      <h1>test</h1>
      <h1>test</h1>
      <h1>test</h1>
      <h1>test</h1>
      <h1>test</h1>
      <h1>test</h1>
      <h1>test</h1>
    </div>
  </div>
<router-view></router-view>
</template>

<style scoped>
.fixed {
  position: fixed;
  left: 0;
  width: 200px;
  height: 100%;
  background-color: #ccc;
  float: left;
}

.scrollable {
  margin-left: 200px; /* 留出左侧固定部分的宽度 */
  width: calc(100% - 200px); /* 计算剩余宽度 */
  min-width: calc(100% - 250px); /* 右侧内容最小宽度，保持50px的间距 */
  height: 100%;
  overflow-x: scroll; /* 横向滚动条 */
  display: flex;
  justify-content: center; /* 水平居中对齐 */
  align-items: center; /* 垂直居中对齐 */
}

/* 内容区域，可以放置你的内容 */
.content {
  margin-right: 200px;
  width: 1000px; /* 或者适应你的内容宽度 */
  background-color: #f0f0f0;
}
</style>