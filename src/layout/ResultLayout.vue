<script setup>

import CookieNav from '@/components/nav/CookieNav.vue'
</script>

<template>

  <div class="result-container">

    <div class="search-section"></div>
    <div class="nav-section">
      <cookie-nav></cookie-nav>
    </div>

    <div class="content-section">

      <div class="content-top-section">
        <div class="top-select-section">
          <ul class="select-list">
            <li class="select-item">综合</li>
            <li class="select-item">最新</li>
            <li class="select-item">最热</li>
          </ul>
        </div>
      </div>

      <div class="content-main-section">
        <router-view></router-view>
      </div>
    </div>
  </div>

</template>

<style scoped>
.content-section {
  //border: 1px solid #3b4045;
}

.select-list {
  display: flex;
  padding: 6px 6px 6px 0;

  &>li {
    padding: 5px;
    color: #8590a6;
    font-size: 12px;
    cursor: pointer;
    
    &:hover {
      transition: all 0.3s;
      transform: scale(1.05);
    }
    
    &:first-child{
      cursor: pointer;
      border-radius: 6px;
      color: #000000;
      background: #e6e6e6;

      &:hover {
        transition: all 0.3s;
        transform: scale(1.2);
      }
    }
  }
}

.content-main-section {
  margin-top: 20px;
}
</style>