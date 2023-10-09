<script setup>
import {ref} from 'vue'

const isVisible = ref(false)
const show = () => {
  isVisible.value = true
}

const hide = () => {
  isVisible.value = false
}
defineExpose({show, hide})
</script>

<template>
  <div class="loader-wrapper" v-if="isVisible">
    <div class="loader">
      <svg role="img" class="logo" viewBox="-1 0 26 25" fill="currentColor"
           xmlns="http://www.w3.org/2000/svg">
        <path
            d="M0 12a11.95 11.95 0 012.713-7.6h18.574L8.037 23.33C3.358 21.694 0 17.24 0 12zm22.271-6.208A11.944 11.944 0 0124 12c0 6.627-5.373 12-12 12-.794 0-1.57-.077-2.32-.224zM4.295 2.8A11.952 11.952 0 0112 0c2.933 0 5.62 1.052 7.705 2.8z"/>
      </svg>
    </div>
  </div>
</template>

<style scoped>
.loader-wrapper {
  position: fixed;
  top: 50%;
  left: 50%;
  width: calc(80px + 80px); /* logo的s150px宽度 + 50px左右 */
  height: calc(80px + 80px); /* logo的150px高度 + 50px上下 */
  background-color: rgba(0, 0, 0, 0.7);
  transform: translate(-50%, -50%); /* 使其居中 */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  border-radius: 10px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.5); /* 添加阴影 */
}


.loader {
  overflow: visible;
  height: fit-content;
  width: fit-content;
  display: flex;
}

.logo {
  width: 100px; /* 调整为120px宽度 */
  height: 100px; /* 调整为120px高度 */
  fill: none;
  stroke-dasharray: 20px;
  stroke: #fff;
  animation: load 15s infinite linear;
}

@keyframes load {
  0% {
    stroke-dashoffset: 0px;
  }
  100% {
    stroke-dashoffset: 200px;
  }
}
</style>
