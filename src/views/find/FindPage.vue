<script setup>
import {reactive} from 'vue'
import Vue3Tinymce from '@jsdawn/vue3-tinymce'
import {default_setting} from '@/components/tinymce/tinymce.settings'

// 引入tinymce 设置
import('@/components/tinymce/tinymce.settings')
const state = reactive({
  content: '',
  // article 配置项
  setting: default_setting
})

const avatar_test = "/src/assets/default_avatar.jpg"

</script>

<template>
  <vue3-tinymce v-model="state.content" :setting="state.setting" />
  <img :src="avatar_test" alt="">
  <img src="@/assets/default_avatar.jpg" alt="">
</template>

<style scoped>

</style>