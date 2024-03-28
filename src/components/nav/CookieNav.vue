<script setup>
import {ref, onMounted} from 'vue'

const nav = ref(null)
const slide1 = ref(null)
const slide2 = ref(null)

onMounted(() => {
  const navLinks = nav.value.querySelectorAll('a')
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => updateSlidePosition(e, slide1.value))
    link.addEventListener('mouseover', (e) => updateSlidePosition(e, slide2.value, true))
    link.addEventListener('mouseout', () => {
      slide2.value.style.opacity = '0'
      slide2.value.classList.remove('squeeze')
    })
  })
  const initialLink = nav.value.querySelector('li:nth-of-type(3) a')
  updateSlidePosition({target: initialLink}, slide1.value)
})

function updateSlidePosition(e, slide, isHover = false) {
  const position = e.target.getBoundingClientRect()
  const parentPosition = nav.value.getBoundingClientRect()
  const left = position.left - parentPosition.left
  const width = position.width

  slide.style.opacity = '1'
  slide.style.left = `${left}px`
  slide.style.width = `${width}px`

  if (isHover) {
    slide.classList.add('squeeze')
  } else {
    slide.classList.remove('squeeze')
  }
}
</script>

<template>
  <ul id="nav" ref="nav">
    <li class="slide1" ref="slide1"></li>
    <li class="slide2" ref="slide2"></li>
    <li>
      <router-link class="item" to="/search/all">全站</router-link>
    </li>
    <li>
      <router-link class="item" to="/search/ai">AI 问答</router-link>
    </li>
    <li>
      <router-link class="item" to="/search/user">用户</router-link>
    </li>
    <li>
      <router-link class="item" to="/search/discuss">讨论</router-link>
    </li>
    <li>
      <router-link class="item" to="/search/fraud">诈骗信息库</router-link>
    </li>
  </ul>
</template>

<style scoped>
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}


#nav {
  position: relative;
  width: 420px;
  border: none;
  border-radius: 7em;
  display: flex;
  list-style: none;
  background: #f5f5f5;
  box-shadow: 10px 20px 20px #00000033;
  padding: 5px;
  margin: 40px 0;

  & > li a,item {
    position: relative;
    padding: 6px 20px;
    font: 500 16px 'ZCOOL QingKe HuangYou';
    border: none;
    outline: none;
    color: rgb(70, 100, 180);
    display: inline-block;
    text-decoration: none;
    z-index: 3;

    &:first-child {
      margin-left: 5px;
    }
  }
}

.slide1, .slide2 {
  position: absolute;
  display: inline-block;
  height: 28px;
  border-radius: 3em;
  transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1.05);
}

.slide1 {
  background: rgb(170, 190, 255);
  z-index: 2;
}

.slide2 {
  opacity: 0;
  background-color: rgb(170, 190, 255, .5);
  z-index: 1;
  box-shadow: 0 0 10px #ffffffaa inset;
}

.squeeze {
  transform: scale(0.9);
}

</style>