<script setup>
import {reactive} from 'vue'
import Vue3Tinymce from '@jsdawn/vue3-tinymce'
import {default_setting} from '@/components/tinymce/tinymce.settings'

// 引入tinymce 设置
import('@/components/tinymce/tinymce.settings')
const state = reactive({
  content: '',
  // editor 配置项
  setting: default_setting
})


</script>

<template>
  <vue3-tinymce v-model="state.content" :setting="state.setting" />
</template>

<style scoped>

</style>