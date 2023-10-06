<script setup>

</script>

<template>
  <div class="fixed">
    <div class="left-menu">
      <div class="menu-item">
        <div class="item-container">
          <div class="icon"><img src="@/assets/icon/user_user.svg"></div>
          <div class="title">首页</div>
        </div>

      </div>
      <div class="menu-item">
        <div class="item-container">
          <div class="icon"><img src="@/assets/icon/user_info.svg"></div>
          <div class="title">个人信息</div>
        </div>

      </div>
      <div class="menu-item">
        <div class="item-container">
          <div class="icon"><img src="@/assets/icon/user_star.svg"></div>
          <div class="title">点赞和收藏</div>
        </div>

      </div>
      <div class="menu-item">
        <div class="item-container">
          <div class="icon"><img src="@/assets/icon/user_focus.svg"></div>
          <div class="title">关注和订阅</div>
        </div>

      </div>
      <div class="menu-item last-item">
        <div class="item-container">
          <div class="icon"><img src="@/assets/icon/user_about.svg"></div>
          <div class="title">关于</div>
        </div>

      </div>
    </div>
    <div class="bottom-menu">
      <div class="menu-item">隐私权</div>
      <div class="menu-item">条款</div>
      <div class="menu-item">帮助</div>
      <div class="menu-item">关于</div>
    </div>
  </div>
  <div class="scrollable">
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<style scoped>
.fixed {
  position: fixed;
  left: 0;
  float: left;
  width: 250px;
  height: 100%;

  .bottom-menu {
    position: fixed;
    bottom: 18px;
    display: flex;
    justify-content: center;
    padding-left: 24px;

    .menu-item {
      font-size: 12px;
      margin-right: 18px;
      cursor: pointer;
    }
  }

  .left-menu {

    .menu-item {

      .item-container {
        display: flex;
        justify-content: left;
        align-items: center;
        margin-top: 5px;
        padding-left: 24px;
        height: 36px;
        line-height: 36px;
        font-size: 12px;
        color:  #000;

        &:hover {
          border-radius: 0 25px 25px 0;
          background: #c2e7ff;
        }
      }

      .icon {
        max-width: 18px;
        height: auto;
        margin-right: 16px;
      }

    }

    .last-item {
      margin-top: 10px;
      border-top: 1px solid #e1e3e1;
    }

  }
}

.scrollable {
  margin-left: 250px; /* 留出左侧固定部分的宽度 */
  width: calc(100% - 250px); /* 计算剩余宽度 */
  min-width: calc(100% - 300px); /* 右侧内容最小宽度，保持50px的间距 */
  height: 100%;
  display: flex;
  justify-content: center; /* 水平居中对齐 */
  align-items: center; /* 垂直居中对齐 */
}

/* 内容区域，可以放置你的内容 */
.content {
  margin-right: 200px;
  width: 1000px; /* 或者适应你的内容宽度 */
}

</style>