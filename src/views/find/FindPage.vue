<script setup>
import {ref} from 'vue'
import {ElScrollbar} from 'element-plus'
import {ArrowDown} from '@element-plus/icons-vue'
import {Search, Tools, RefreshLeft} from '@element-plus/icons-vue'
import ListItem from "@/components/list/ListItem.vue";

const input2 = ref('')

const isExpanded = ref(false)
const sectionList = ref()
const selectedItem = ref()

const articleList = ref([
  {
    title: 'sss',
    category: '111',
    time: '2023.12.23',
    state: 'open'
  },
  {
    title: 'ss2323s',
    category: '111232',
    time: '2023.12.23',
    state: 'open'
  },
])

const list = ref({
  title: '案例',
  category: '分类',
  time: '时间',
  state: '状态'
})

// 文章列表
const total = ref(0)  // 文章总数
const loading = ref(false) // loading效果

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

// 分页
const params = ref({
  pagenum: 1, // 现在在第几页
  pagesize: 5, // 每页显示几条数据
  cate_id: '',
  state: ''
})

// 调用接口：获取基本信息
const getArticleList = async () => {
  loading.value = true
  // const res = await articleGetList(params.value); // 调用接口，获取列表信息
  // articleList.value = res.data.data;
  // total.value = res.data.total;
  loading.value = false //加载完页面关闭loading
}

getArticleList() // 渲染页面

// 文章分页
const onSizeChange = (size) => {
  params.value.pagenum = 1
  params.value.pagesize = size
  getArticleList()
}
const onCurrentChange = (current) => {
  params.value.pagenum = current
  getArticleList()
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
    <div>

    </div>
    <div>
      <div class="category-section float-left">
        <div class="category-section find-item">
          分类专区
          <!--			分类名词-->
          <div class="flex-relative" :style="{overflow: isExpanded ? 'visible' : 'hidden'}">
            <div ref="sectionList" class="section-list">
              <div class="find-display">
                <a href="#">
                  <span class="display-value">肃清行动</span>
                  <span class="display-tags">1777</span>
                </a>
              </div>

              <div class="find-display">
                <a href="#">
                  <span class="display-value">肃清行动</span>
                  <span class="display-tags">1777</span>
                </a>
              </div>
              <div class="find-display">
                <a href="#">
                  <span class="display-value">深度优先搜索策略</span>
                  <span class="display-tags">1777</span>
                </a>
              </div>
              <div class="find-display">
                <a href="#">
                  <span class="display-value">肃清行动</span>
                  <span class="display-tags">1777</span>
                </a>
              </div>
              <div class="find-display">
                <a href="#">
                  <span class="display-value">肃清行动</span>
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

          <el-scrollbar>
            <div class="scrollbar-flex-content">
              <p v-for="item in 1" :key="item" class="scrollbar-demo-item">
                <a href="#" @click="selectItem(item)">
                  <div :class="{ 'find-specific': true, 'selected': selectedItem === item }">
                    <img src="@/assets/icon/find-title.svg" alt="">
                    电信诈骗
                  </div>
                </a>
              </p>
            </div>
          </el-scrollbar>
        </div>

        <!--				题单查询分类-->
        <div class="category-section">
          <div class="mb-3 selection-formItem">
            <el-dropdown trigger="click" style="margin-right: 15px">
              <el-button type="info" plain>
                题单
                <el-icon class="el-icon--right">
                  <Arrow-down/>
                </el-icon>
              </el-button>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item>Action 1</el-dropdown-item>
                  <el-dropdown-item>Action 2</el-dropdown-item>
                  <el-dropdown-item>Action 3</el-dropdown-item>
                  <el-dropdown-item>Action 4</el-dropdown-item>
                  <el-dropdown-item>Action 5</el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>

            <el-dropdown trigger="click" style="margin-right: 20px">
              <el-button type="info" plain>
                题单
                <el-icon class="el-icon--right">
                  <Arrow-down/>
                </el-icon>
              </el-button>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item>Action 1</el-dropdown-item>
                  <el-dropdown-item>Action 2</el-dropdown-item>
                  <el-dropdown-item>Action 3</el-dropdown-item>
                  <el-dropdown-item>Action 4</el-dropdown-item>
                  <el-dropdown-item>Action 5</el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
            <el-dropdown trigger="click" style="margin-right: 20px">
              <el-button type="info" plain>
                题单
                <el-icon class="el-icon--right">
                  <Arrow-down/>
                </el-icon>
              </el-button>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item>Action 1</el-dropdown-item>
                  <el-dropdown-item>Action 2</el-dropdown-item>
                  <el-dropdown-item>Action 3</el-dropdown-item>
                  <el-dropdown-item>Action 4</el-dropdown-item>
                  <el-dropdown-item>Action 5</el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
            <el-dropdown trigger="click" style="margin-right: 20px">
              <el-button type="info" plain>
                题单
                <el-icon class="el-icon--right">
                  <Arrow-down/>
                </el-icon>
              </el-button>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item>Action 1</el-dropdown-item>
                  <el-dropdown-item>Action 2</el-dropdown-item>
                  <el-dropdown-item>Action 3</el-dropdown-item>
                  <el-dropdown-item>Action 4</el-dropdown-item>
                  <el-dropdown-item>Action 5</el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>

            <div class="find-formInput">
              <el-input
                  v-model="input2"
                  style="width: 240px"
                  placeholder="搜索题目、编号或内容"
                  :prefix-icon="Search"
              />
            </div>

            <el-dropdown trigger="click" style="margin-left: 20px">
              <el-button type="info" plain>
                <el-icon size="15">
                  <Tools/>
                </el-icon>
              </el-button>
            </el-dropdown>

            <button class="selected-random">
					<span>
						<el-icon class="random-icon" size="18px"><RefreshLeft/></el-icon>
					</span>
              <span>随机一案</span>
            </button>

          </div>
          <!--						查询结果-->
          <!-- 表格区域 -->
          <List-Item :data="articleList" :list="list"></List-Item>

          <!-- 文章分页 -->
          <el-pagination
              v-model:current-page="params.pagenum"
              v-model:page-size="params.pagesize"
              :page-sizes="[2, 3, 5, 10]"
              :background="true"
              layout="total, sizes, prev, pager, next, jumper"
              :total="total"
              @size-change="onSizeChange"
              @current-change="onCurrentChange"
              style="margin-top: 20px; justify-content: flex-end"
          />
        </div>


      </div>
      <div class="float-left float-select">
        <div class="common-bank question-bank">热点诈骗分类</div>
        <div class="common-bank">
          <div class="find-formInput">
            <el-input
                v-model="input2"
                style="width: 240px"
                placeholder="搜索题目、编号或内容"
                :prefix-icon="Search"
            />
          </div>
        </div>
        <div class="sidebar-tags">
          <a href="#" class="sidebar-mrb">
						<span class="sidebar-sp">
							<span class="sidebar-sp1">阿里云</span>
							<span class="sidebar-sp2">188</span>
						</span>
          </a>
          <a href="#" class="sidebar-mrb">
						<span class="sidebar-sp">
							<span class="sidebar-sp1">阿里fdas云</span>
							<span class="sidebar-sp2">1588</span>
						</span>
          </a>
          <a href="#" class="sidebar-mrb">
						<span class="sidebar-sp">
							<span class="sidebar-sp1">阿rew里云</span>
							<span class="sidebar-sp2">188</span>
						</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
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
  position: relative;
  margin-top: 20px;
}

.issue-section {
  display: flex;
  margin-top: 80px;
}

.category-section {
  width: 880px;
  margin: 30px 0 20px 0;
}

.flex-relative {
  display: flex;
  position: relative;
}

.section-list {
  display: flex;
  flex-wrap: wrap;
  max-height: 30px;
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

.find-item .open-content img.more-svg , img.close-svg{
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

.mb-3 .el-icon--right {
  padding-left: 3px;
}

.selection-formItem {
  display: flex;
  flex-wrap: wrap;
}

.find-formInput {
  display: flex;
}

.selected-random {
  margin-left: 30px;
  align-items: center;
  color: #4cd17b;
}

.random-icon {
  margin-right: 7px;
  vertical-align: middle;
}

.float-left {
  float: left;
}

.common-bank {
  margin: 10px 0 10px 10px
}

.float-select {
  border: 1px solid #e6e6e6;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  width: 270px;
  height: 415px;
  margin: 32px 0 0 20px;
  color: #7b7d7b;
  overflow: hidden;
}

.float-select .sidebar-tags {
  display: flex;
  flex-wrap: wrap;
  margin: 15px;
  vertical-align: middle;
}

.sidebar-tags .sidebar-mrb {
  margin-bottom: 14px;
  margin-right: 15px;
  border: 1px solid #f2f3f4;
  background-color: #f2f3f4;
  border-radius: 8px;
  font-size: 13px;
  color: #595959;
}

.sidebar-tags .sidebar-sp {
  margin: 5px;
}

.sidebar-tags .sidebar-sp1 {
  margin-right: 5px;
}

.sidebar-tags .sidebar-sp2 {
  align-items: center;
  border: 1px solid #ffa116;
  background-color: #ffa116;
  font-size: 11px;
  color: #ffffff;
  padding: 0 3px;
  border-radius: 13px;
}

.selected-result-title {
  display: flex;
  position: relative;
  flex-wrap: wrap;
  margin-top: 20px;
}

</style>