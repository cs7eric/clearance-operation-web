<script setup>
const emit = defineEmits(['customEvent']);



const emitEvent = (action) =>  {
  emit('customEvent', action);
}

const emitCollect = () => {
  emit('collect')
}

</script>

<template>
  <div class="button-container">
    <button class="button"  @click="emitEvent('comment')">
      <img class="icon" src="@/assets/icon/article_comment.svg " alt="">
    </button>
    <button class="button" @click="emitEvent('share')">
      <img class="icon" src="@/assets/icon/article_share.svg" alt="">
    </button>
    <button class="button" @click="emitCollect">
      <img class="icon" src="@/assets/icon/article_collect.svg" alt="">
    </button>

    <button class="button" @click="emitEvent('report')">
      <img class="icon" src="@/assets/icon/article_report.svg" alt="">
    </button>
  </div>
</template>

<style scoped>
.button-container {
  display: flex;
  background-color: rgba(255, 255, 255);
  width: 250px;
  height: 26px;
  align-items: center;
  justify-content: space-around;
  border-radius: 6px;

}

.button {
  outline: 0 !important;
  border: 0 !important;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #000;
  transition: all ease-in-out 0.3s;
  cursor: pointer;
}

.button:hover {
  transform: translateY(-3px);
}

.icon {
  max-width: 18px;
}
</style>