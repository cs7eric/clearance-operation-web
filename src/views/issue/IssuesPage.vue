<script setup>

import {Promotion} from '@element-plus/icons-vue'
import {ref} from 'vue'
import {issueGetAllService} from '@/api/issue'
import IssueCase from '@/components/issue/IssueCase.vue'

const issuesList = ref([])

const getIssues = async () => {
  const res = await issueGetAllService()
  console.log(res)
  issuesList.value = res.data
}

getIssues()
</script>

<template>
  <div class="home-container">
    <div class="home-main">
      <div class="main-function main-item">
        <div class="content-card">
          <div class="write-button">
            <h3 class="content-title">在生活中遇到了关于诈骗的问题吗？</h3>
            <div class="button">
              <router-link to="/issues/ask" target="_blank">
                <button> 向大家提出疑问吧!</button>
              </router-link>
            </div>
          </div>
        </div>
      </div>

      <div class="main-issue main-item">

        <div class="content-card" >
          <div class="ask-section">
            <div class="title">
              <h3>可能感兴趣的问题</h3>
            </div>

          </div>
          <issue-case :issue="issue" v-for="issue in issuesList" :key="issue.id" class="issue-card"></issue-case>
        </div>
      </div>

    </div>
  </div>


</template>

<style scoped>

.content-card {
  margin: 12px 0 0 0;
  padding: 18px;
  border-radius: 8px;
  border: 2px solid #e6e6e6;

  .content-title {
    font-weight: 700;
    height: 60px;
    line-height: 60px;
  }



}



.ask-section{
  display: flex;
  justify-content: space-between;

  margin-bottom: 10px;

  .title {
    &>h3{
      font-size: 20px;
      font-weight: 700;
    }
  }

}

.home-container {

  .home-main {
    justify-content: center;

    .main-issue {

      .issue-card {
        padding: 10px 0;
        width: 800px;
        border-bottom: 1px solid #e6e6e6;

        &:last-child {
          border-bottom: none;
        }
      }
    }

    .main-function {
      bottom: 0;


      .content-card {

        .write-button {
          display: flex;


          .button {

            margin: 10px;
            width: 240px;
            height: 40px;
            border-radius: 4px;
            border: 1px solid #82b6f3;
            text-align: center;
            line-height: 40px;
            color: #056de8;

            &:hover {
              font-weight: 700;

            }
          }
        }



      }
    }

    .main-item {
      padding-right: 10px;
    }
  }
}
</style>