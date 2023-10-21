<script setup>

</script>

<template>
<div class="issue-container">
  <div class="issue-top-section">
    <div class="issue-tags">
      <el-tag class="tag-item" size="large" round>Tag 1</el-tag>
      <el-tag class="tag-item" size="large" round>Tag 1</el-tag>
    </div>
    <div class="issue-data">
      <div class="focus-data-section">
        <h5>关注者</h5>
        <p>777</p>
      </div>
      <div class="reply-data-section">
        <h5>回复数</h5>
        <p>111</p>
      </div>
    </div>
  </div>
</div>
</template>

<style scoped>
.issue-container{
  display: flex;
  margin: 0 22vw;
  width: 100vw;
  box-shadow: 0 4px 5px -2px rgba(0, 0, 0, 0.2);



  .issue-top-section {

    display: flex;
    justify-content: space-between;
    width: 100%;

    .issue-tags {

      .tag-item {
        margin-left: 10px;
      }
    }

    .issue-data {
      display: flex;

    }
  }
}
</style>