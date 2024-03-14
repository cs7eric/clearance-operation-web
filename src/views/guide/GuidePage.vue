<script setup>
import * as THREE from 'three'
import CLOUDS from 'vanta/dist/vanta.clouds.min'
import {onMounted, onBeforeUnmount, ref} from 'vue'

const Area = ref(null)
let vantaEffect = null

const useTypewriter = (text, interval) => {
  const typedText = ref('')
  const isIncreasing = ref(true)
  let charIndex = 0

  function typeWriter() {
    if (isIncreasing.value) {
      if (charIndex < text.length) {
        typedText.value += text.charAt(charIndex)
        charIndex++
      } else {
        isIncreasing.value = false
        charIndex = text.length - 2
      }
    } else {
      if (charIndex >= 0) {
        typedText.value = text.substring(0, charIndex + 1)
        charIndex--
      } else {
        isIncreasing.value = true
        charIndex = 1
        typedText.value = text.substring(0, charIndex)
      }
    }

    setTimeout(typeWriter, interval)
  }

  onMounted(typeWriter)

  return {typedText}
}

onMounted(() => {
  vantaEffect = CLOUDS({
    el: Area.value,
    THREE: THREE,
    backgroundColor: 0xffffff,
    skyColor: 0x68b8d7,
    cloudColor: 0xadc1de,
    cloudShadowColor: 0x183550,
    sunColor: 0xff9919,
    sunGlareColor: 0xe64612,
    sunlightColor: 0xff9933,
    speed: 2.1
  })
})
onBeforeUnmount(() => {

  if (vantaEffect) {
    vantaEffect.destroy()
  }
})

const {typedText} = useTypewriter('Are you sure you are not the target of fraudsters?', 90)

</script>
<template>

  <div ref='Area' class="vanta_area">
    <div class="home-main">
      <div class="typewriter">
        <p>{{ typedText }}</p>
      </div>
    </div>
  </div>
  <div class="main-container">
    <div class="tip">
      <h3 class="tip-text">小心！诈骗就在你身边</h3>
    </div>
    <div class="guide-section"></div>

  </div>


</template>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Luckiest+Guy&display=swap');
@import url('https://fonts.googleapis.com/css2?family=ZCOOL+QingKe+HuangYou&display=swap');

:root {
    --el-bg-color-overlay: transparent !important;
}

.main-container {

    .guide-section{
        height: 900px;
    }

    .tip-text {
        margin-top: 20px;
        text-align: center;
        font-family: 'ZCOOL Xiao Wei';
        font-size: 34px;
    }
}

.vanta_area, {
    width: 100%;
    height: 90vh;
}

.flex-grow {
    flex-grow: 1;
}

//打字机
.typewriter {
    color: #feeedf;
    padding-top: 20px;
    display: flex;
    justify-content: center;
    overflow: hidden;
    white-space: nowrap;
    font-size: 50px;
    text-decoration: none;
    border: none;
    font-family: 'Luckiest Guy';

}

.typewriter p {
    display: inline-block;
    padding-top: 240px;
    animation: typing 5s steps(40, end);
}

@keyframes typing {
    from {
        width: 0;
    }
    to {
        width: 100%;
    }
}
</style>