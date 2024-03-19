<script setup>
import {ref} from 'vue'
import CookieInput from '@/components/input/CookieInput.vue'


const  placeholderText = ref('开始提问吧！')
const modelValue = ref('')

const askQuestion = () => {
  console.log(modelValue.value)
}

</script>

<template>


  <div class="ai-page ai-page-container">
    <h3 class="title">
      What knowledge begins
    </h3>
    <cookie-input v-model="modelValue"
                  :placeholderText="placeholderText"
                  @keyup.enter="askQuestion"
                  class="ai-input"
    ></cookie-input>
    <span class="tips">请一次性将您的问题描述清楚，按回车键进行提问</span>
  </div>
</template>

<style scoped>
.ai-page {
  margin-top: 160px;
}

.ai-page-container {
  display: flex;
  flex-direction: column;
}

.title {
  font-size: 36px;
  text-align: center;
  font-family: "Source Code Pro";
}

.tips {
  font-size: 12px;
  color: #333333;
  margin-left: 10px;
}

.ai-input {
  flex: 1;
  margin-top: 40px;
}
</style>