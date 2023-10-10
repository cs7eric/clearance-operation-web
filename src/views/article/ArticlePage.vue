<script setup>

defineProps({
  content: String
})

</script>

<template>
  <div class="article-content-container" >
    {{ content}}
  </div>
</template>

<style scoped>
.article-content-container {
  font-size: 16px;
  line-height: 1.5;
  border-radius: 5px;
}
</style>