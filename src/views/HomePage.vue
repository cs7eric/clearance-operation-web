<script setup>
import {ref} from 'vue'
import {Promotion} from '@element-plus/icons-vue'
const currentDate = ref(new Date())

</script>

<template>
  <div class="home-container">
    <div class="home-main">
      <div class="main-article main-item">
        <el-card v-for="o in 5" :key="o" class="article-card">
          <template #header>
            <div class="card-header">
              <span>文章标题</span>
              <el-button class="button" type="primary" plain >查看</el-button>
            </div>
          </template>
          <div class="card-main">
            <div class="image card-item">
              <img src="@/assets/logo-co.png" alt=""/>
            </div>

            <div class="card-item" style="padding: 14px">
              <span>Yummy hamburger</span>
              <div class="bottom">
                <time class="time">{{ currentDate }}</time>
                <el-button text class="button">Operating</el-button>
              </div>
            </div>
          </div>

        </el-card>
      </div>
      <div class="main-function main-item">
        <el-card class="box-card">
          <template #header>
            <div class="function-header">
              <div>
                <span> <el-icon><Promotion /></el-icon> 创作中心</span>
              </div>
              <div>
                <el-button class="button" text>button</el-button>
              </div>
            </div>
          </template>
          <div v-for="o in 4" :key="o" class="text item">{{ 'List item ' + o }}</div>
        </el-card>
        <el-card class="box-card">
          <template #header>
            <div class="function-header">
              <div>
                <span> <el-icon><Promotion /></el-icon> 推荐关注</span>
              </div>
              
            </div>
          </template>
          <div v-for="o in 4" :key="o" class="text item">{{ 'List item ' + o }}</div>
        </el-card>
      </div>
    </div>
  </div>
</template>

<style scoped>

.home-container {

  .home-main {
    display: flex;
    justify-content: center;

    .main-article {

      .article-card {
        width: 800px;
        margin-bottom: 10px;


        .card-header {
          display: flex;
          height: 14px;
          justify-content: space-between;
          align-items: center;

          &>span {
            font-weight: 700;
          }
        }
        .image {
          width: 100px;
          height: 100px;
        }
      }
    }


    .main-function {

      .box-card {
        margin-bottom: 10px;

        .function-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 250px;
          height: 10px;
        }

        .button {
          float: right;
        }
      }
    }

    .main-item {
      padding-right: 10px;
    }
  }

}
</style>