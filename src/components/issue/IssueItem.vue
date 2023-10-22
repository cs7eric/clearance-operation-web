<script setup>

</script>

<template>
  <div class="issue-container">
    <div class="issue-top-section issue-div">
      <div class="issue-tags">
        <el-tag class="tag-item" size="large" round>Tag 1</el-tag>
        <el-tag class="tag-item" size="large" round>Tag 1</el-tag>
      </div>
      <div class="issue-data">
        <div class="focus-data-section top-item">
          <h5>关注者</h5>
          <p>777</p>
        </div>
        <div class="reply-data-section top-item">
          <h5>回复数</h5>
          <p>111</p>
        </div>
      </div>
    </div>
    <div class="issue-info-section issue-div">
      <div class="issue-title">
        <h3>遇到电信诈骗应该怎么办</h3>
      </div>
      <div class="issue-content">
        <p>这是一段测试文本</p>
      </div>
    </div>
    <div class="issue-function-section issue-div">
      <el-button type="primary">关注问题</el-button>
      <el-button type="primary" plain color="#056de8">写回答</el-button>
      <el-button plain>邀请回答</el-button>
      <button class="function-item">
        <img class="icon" src="@/assets/icon/article_likes.svg" alt="">
        好问题
      </button>
      <button class="function-item">
        <img class=icon src="@/assets/icon/article_comment.svg" alt="">
        评论
      </button>
      <button class="function-item">
        <img class="icon" src="@/assets/icon/article_share.svg" alt="">
        分享
      </button>
    </div>
  </div>
  <div class="reply-main-container reply-container-bg">
    <div class="reply-content-section reply-item-common">
      <div class="reply-top-section">
        <h3>1111 个回答</h3>
      </div>
    </div>
    <div class="reply-other-section ">
      <div class="relative-issues-section reply-item-common">
        <div class="relative-title">
          <h3>相关问题</h3>
          <ul class="relative-list">
            <li class="relative-item">this is a title for relative</li>
            <li class="relative-item">this is a title for relative</li>
            <li class="relative-item">this is a title for relative</li>
            <li class="relative-item">this is a title for relative</li>
            <li class="relative-item">this is a title for relative</li>
            <li class="relative-item">this is a title for relative</li>
            <li class="relative-item">this is a title for relative</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.issue-div {
  padding-bottom: 12px;
}

.top-item {
  align-items: center;

  & > p {
    font-weight: 700;
  }

}
.reply-container-bg{
  background: #f5f5f5;
}

.reply-item-common {
  padding: 10px;
  border-radius: 3px;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.15);
  background: #fff;
}

.issue-container {
  padding: 0 15vw;
  width: 100vw;
  border-bottom: 2px solid #d8d8d8;
  box-shadow: 0 2px 5px -2px rgba(0, 0, 0, 0.1);
  z-index: 999;

  .issue-top-section {

    display: flex;
    justify-content: space-between;
    width: 100%;

    .issue-tags {

      .tag-item {

        margin-right: 10px;
      }
    }

    .issue-data {
      display: flex;

      .reply-data-section {
        margin-left: 10px;
      }

      .focus-data-section {
      }
    }
  }

  .issue-function-section {
    display: flex;
    align-items: center;

    .function-item {
      display: flex;
      align-items: center;
      margin-left: 15px;
      font-size: 14px;
      color: #606266;

      & > .icon {
        margin-right: 5px;
        height: 16px;
      }
    }
  }
}

.reply-main-container {
  display: flex;
  padding: 20px 15vw;

  .reply-content-section {

    width: 55vw;
    .reply-top-section {

      &> h3 {
        font-size: 16px;
        font-weight: 700;
      }
    }

  }

  .reply-other-section {
    width: 15vw;
    .relative-issues-section {
      margin-left: 10px;

      .relative-title{
        &>h3{
          font-size: 15px;
          font-weight: 700;
        }
      }
    }
  }

}

</style >