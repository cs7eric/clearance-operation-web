<script setup>
import {reactive, ref} from 'vue'
import Vue3Tinymce from '@jsdawn/vue3-tinymce'
import {default_setting, juejin_setting} from '@/components/tinymce/tinymce.settings'

// 引入tinymce 设置
import('@/components/tinymce/tinymce.settings')

// tinymce 设置
default_setting.height = 800
juejin_setting.height = 800

const state = reactive({
  content: '',
  // editor 配置项
  setting: juejin_setting
})

const articleData = ref({
  title: '',
  content: '',
  publication_date: '',
  last_modified_date: '',
  author: '',

})



// 发布文章
const publishArticle = () => {

}

</script>

<template>
  <div class="write-container">
    <div class="write-header-section">
      <div class="header-container">
        <div class="header-logo">
          <img class="logo" src="../../assets/logo.svg" alt="">
        </div>
        <div class="header-function">
          <div class="function-item">
            <p>文章将会自动保存到草稿箱</p>
          </div>
          <div class="function-item">
            <el-button class="drafts button" plain>草稿箱</el-button>
          </div>
          <div class="function-item">
            <el-button class="publish button" @click="publishArticle" type="primary">发布</el-button>
          </div>
          <div class="function-item">
            <div class="avatar">
              <img src="../../assets/avatar.jpg" alt="头像">
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="write-main-section">
      <div class="main-container">
        <div class="title-section main-item">
          <input class="title" v-model="articleData.title" type="text" placeholder="请输入标题 . . .">
        </div>
        <div class="editor-section main-item">
          <vue3-tinymce v-model="articleData.content" :setting="state.setting"/>

        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.write-container {
  .write-header-section {
    display: flex;
    align-items: center;
    height: 50px;

    .header-container {
      display: flex;
      justify-content: space-between;
      padding: 0 160px;
      width: 100%;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);


      .header-logo {

        display: flex;
        align-items: center;

        & > .logo {
          width: 36px;
        }
      }

      .header-function {

        display: flex;
        align-items: center;

        .function-item {
          padding-right: 15px;
          line-height: 50px;
          font-size: 12px;
          color: #c9cdd4;

          .button {
            font-size: 12px;
          }

          .drafts {
            color: #1d7dfa;
          }

          .publish {
            color: #fff;
          }

          .avatar {

            & > img {
              width: 36px;
              border-radius: 18px;
            }
          }
        }
      }
    }
  }

  .write-main-section {
    .main-container {
      padding: 0 240px;

      .main-item {
        margin-top: 30px;
      }

      .title-section {
        .title {
          height: 80px;
          width: 300px;
          font-size: 36px;
          font-weight: 700;
          caret-color: #86909c;
          &::placeholder {
            color: #86909c;
          }
        }
      }

      .editor-section {
      }
    }
  }
}

</style>