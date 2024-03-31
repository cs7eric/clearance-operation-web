<script setup>
import {ref} from 'vue'
import {ElScrollbar} from 'element-plus'
import CaseTable from '@/components/table/CaseTable.vue'
import {getListUsingGet} from '@/api/api/labelController'

const isExpanded = ref(false)
const sectionList = ref()
const selectedItem = ref()


const categoryList = ref([])
const tagList = ref ([])

const getLabels = async (type) => {

  const res = await getListUsingGet({
    type: type
  })

  if (type === 'Category') {
    categoryList.value = res.data
  } else {
    tagList.value = res.data
  }
}



getLabels('Tag')
getLabels('Category')


// 展开和收起
const changeIsExpanded = () => {
  isExpanded.value = !isExpanded.value

  if (isExpanded.value) {
    sectionList.value.style.maxHeight = 'none'
  } else {
    sectionList.value.style.maxHeight = '30px' // 或其他适当的值
  }
}

const selectItem = (item) => {
  selectedItem.value = item
}


</script>

<template>
  <div class="find-container">
    <div class="carousel-section find-item">

      <h3 class="carousel-title">近期热点事件</h3>
      <el-carousel :interval="4000" type="card" height="200px">
        <el-carousel-item v-for="item in 6" :key="item">
          <h3 text="2xl" justify="center">{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
    </div>

    <div class="issue-section find-item">
      <div class="issue-card">
        <div class="card-header">
          <h3>问题广场</h3>
        </div>

        <div class="issue-list">
          <ul>
            <li v-for="o in 6" :key="o">{{ o }}</li>
          </ul>
          <p class="detail">查看全部热点问题></p>
        </div>
      </div>

      <div class="issue-card">
        <div class="card-header">
          <h3>事件广场</h3>
        </div>

        <div class="issue-list">
          <ul>
            <li v-for="o in 6" :key="o">{{ o }}</li>
          </ul>
          <p class="detail">查看全部最新事件></p>
        </div>
      </div>


    </div>
    <div class="category-section find-item">
      分类专区
      <div class="label-area">
        <div class="flex-relative" :style="{overflow: isExpanded ? 'visible' : 'hidden'}">
          <div ref="sectionList" class="section-list" >
            <div class="find-display" v-for="category in categoryList" :key="category.id">
              <a href="#">
                <span class="display-value">{{ category.categoryName }}</span>
                <span class="display-tags">1777</span>
              </a>
            </div>
          </div>

          <div class="close-display" v-if="isExpanded">
              <span @click="changeIsExpanded" class="close-content">
                <span class="close">收起</span>
                <img class="close-svg" src="../../assets/icon/close_content.svg" alt="">
              </span>
          </div>
          <div class="more-content" v-if="!isExpanded">
              <span @click="changeIsExpanded" class="open-content">
                <span class="content">展开</span>
                <img class="more-svg" src="../../assets/icon/more_content.svg" alt="">
              </span>
          </div>
        </div>
      </div>
      <div class="category-area">
        <el-scrollbar>
          <div class="scrollbar-flex-content">
            <p v-for="item in tagList" :key="item.id" class="scrollbar-demo-item">
              <a href="#" @click="selectItem(item)">
                <div :class="{ 'find-specific': true, 'selected': selectedItem === item }">
                  <img src="@/assets/icon/find-title.svg" alt="">
                  {{item.tagName}}
                </div>
              </a>
            </p>
          </div>
        </el-scrollbar>

      </div>

      <!--				题单查询分类-->
      <div class="category-section">
        <!--						查询结果-->
        <!-- 表格区域 -->
        <div class="cases-section">
          <case-table></case-table>

        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

.find-container {
  padding-top: 88px;
}

.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
  text-align: center;
}

.carousel-section {
  .carousel-title {
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 20px;
  }
}

.issue-card {
  margin-right: 12px;
  padding: 18px;
  border-radius: 8px;
  border: 2px solid #e6e6e6;

  .issue-list {
    width: 480px;
    margin-top: 20px;

    .detail {
      margin-top: 10px;
      color: #bababa;
      font-size: 12px;
      cursor: pointer;
    }
  }

  .card-header {
    h3 {
      font-weight: 700;
    }
  }
}

.find-item {
  width: 65vw;
  position: relative;
  margin-top: 20px;
}

.issue-section {
  display: flex;
  margin-top: 80px;
}

.category-section {
//width: 880px; margin: 30px 0 20px 0;
}

.flex-relative {
  display: flex;
  position: relative;
  flex-wrap: wrap; /* 允许子元素换行 */

}

.section-list {
  display: flex;
  flex-wrap: wrap;
  max-height: 30px;
  max-width: 65vw;
  position: relative;
  margin: 10px 0;


}


.find-display {
  display: inline-block;
  white-space: nowrap;
  text-align: center;
  line-height: 15px;
  margin: 12px;
}

.find-display a {
  font-size: 15px;
}

.find-display a:hover {
  color: #4289ff;
}

.find-display a:hover .display-tags {
  background-color: #ebf5ff;
}

.find-display .display-value {
  margin-right: 5px;
}

.find-display .display-tags {
  padding: 2px 5px;
  border: #f2f3f4 1px solid;
  border-radius: 12px;
  background-color: #f2f3f4;
  font-size: 13px;
}

.open-content, .close-content {
  display: flex;
  position: absolute;
  top: 19px;
  right: 0;
  width: 60px;
  background-color: #ffffff;
  font-size: 15px;
  color: #8a8a8e;
}

.more-content .open-content .content {
  margin-right: 5px;
}

.find-item .open-content img.more-svg, img.close-svg {
  position: relative;
  top: 5px;
  max-height: 11px;
}

.more-content:hover, .close-content:hover {
  cursor: pointer;
}

.section-list .find-display {
  display: flex;
}

.section-list .close-content {
  display: flex;
  position: absolute;
  right: 0;
  padding-top: 5px;
  font-size: 15px;
  color: #8a8a8e;
}

.close-display .close-content .close {
  margin-right: 4px;
}

.section-list .close-display .close-svg {
  position: relative;
  top: 3px;
  max-height: 14px;
}

.find-specific {
  display: flex;
  align-items: center;
  padding: 10px 15px;
  border: 1px solid #f2f3f4;
  background-color: #f2f3f4;
  border-radius: 21px;
  align-content: center;
  font-size: 18px;
}

.find-specific img {
  position: relative;
  max-height: 18px;
  margin-right: 6px;
  vertical-align: middle;
}

.find-specific:hover {
  background-color: #e5e6e8;
}

.selected {
  color: #ffffff; /* 选中时的字体颜色 */
  background-color: pink;
}

.scrollbar-flex-content {
  display: flex;
  max-width: 100px;
}

.scrollbar-demo-item {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  margin: 10px;
  text-align: center;
  border-radius: 4px;
}

</style>