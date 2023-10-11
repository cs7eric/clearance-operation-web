<script setup>
import {ref} from 'vue'
import ConfirmBox from '@/components/dialogs/ConfirmBox.vue'
import SevenButton from '@/components/common/SevenButton.vue'

const confirmVisible = ref(false)
const article = ref({
  title: '',
})
const confirmInfo = () => {
  confirmVisible.value = true
}
</script>

<template>
  <seven-button @click="confirmInfo"></seven-button>
  <confirm-box :article="article" v-model="confirmVisible"/>
</template>

<style scoped>

</style>