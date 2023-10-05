<script setup>
import SevenButton from '@/components/common/SevenButton.vue'
import {ElNotification} from 'element-plus'

const open = () => {
  ElNotification({
    title: 'Success',
    message: 'This is a success message',
    type: 'success',
  })
}

</script>

<template>
<seven-button @click="open"></seven-button>
</template>

<style scoped>

</style>