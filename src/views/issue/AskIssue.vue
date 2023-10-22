<script setup>
import {reactive, ref} from 'vue'
import Vue3Tinymce from '@jsdawn/vue3-tinymce'
import {juejin_setting} from '@/components/tinymce/tinymce.settings'
import {useUserStore} from '@/stores'
import {issuePostService} from '@/api/issue'

import('@/components/tinymce/tinymce.settings')

// tinymce 设置
juejin_setting.height = 280

const state = reactive({
  content: '',
  // article 配置项
  setting: juejin_setting
})
const options = [
  {
    value: '电信诈骗',
    label: '电信诈骗',
  },
  {
    value: '跨境诈骗',
    label: '跨境诈骗',
  },
  {
    value: '情景再现',
    label: '情景再现',
  },
]

const issueData = ref({
  title: '',
  authorId: '',
  detailContent: '',
  expectContent: '',
  tags: []
})

const userInfo = ref()
const userStore = useUserStore()
userInfo.value = userStore.userInfo

// 发布问题
const postIssue = () => {

  const postData = {
    title: issueData.value.title,
    authorId: issueData.value.authorId,
    detailContent: issueData.value.detailContent,
    expectContent: issueData.value.expectContent,
    tags: issueData.value.tags
  }
  console.log(issueData.value)
  issuePostService(postData)

}


</script>

<template>
  <div class="issues-container">
    <div class="profile-section">
      <h3>Ask a public question</h3>
      <img class="profile-bg" src="@/assets/illustration/background.svg" alt="">
    </div>
    <div class="info-section issues-item">
      <div class="info-detail">
        <h3>Writing a good question</h3>
        <p>您可以提问准备好的与诈骗相关的问题，此表格将帮助您完成整个过程</p>
        <p>想问一个非诈骗相关的问题？请参阅此处的主题以查看相关的站点</p>
      </div>
      <div class="step-list">
        <h5>步骤</h5>
        <ul class="step">
          <li>用一行标题描述您的问题</li>
          <li>更加详细地描述您的问题</li>
          <li>描述您尝试过的操作以及您期待发生的情况</li>
          <li>添加"标签"，有助于向社区成员展示您的问题</li>
          <li>查看您的问题并将其发布到网站上</li>
        </ul>
      </div>
    </div>
    <div class="issue-title-container ">
      <div class="title-section issues-item">
        <h3 class="title-item">标题</h3>
        <p class="title-item">具体一点，想象一下你正在向另一个人问问题。 </p>
        <div class="title">
          <input
              class="title-input" type="text"
              v-model="issueData.title"
              placeholder="例子: 当我遇到电信诈骗，我该怎么做才能使风险最小化">
        </div>
        <div class="next ">
          <button class="next-button">Next</button>
        </div>
      </div>
      <div class="prompt-section prompt">
        <div class="prompt-title">写一个好标题</div>
        <div class="prompt-detail">
          <p>
            Your title should summarize the problem.
          </p>
          <p>You might find that you have a better idea of your title after writing out the rest of the question.</p>
        </div>
      </div>
    </div>
    <div class="issue-detail-container">
      <div class="issue-detail-section issues-item">
        <div class="title-section">
          <h3>what are the detail of your problem?</h3>
          <p>Introduce the problem and expand on what you put in the Minimum 20 characters</p>
        </div>
        <div class="detail-section">
          <vue3-tinymce v-model="issueData.detailContent" :setting="state.setting"></vue3-tinymce>
        </div>
      </div>
      <div class="issue-prompt-section">
        <div class="prompt-section prompt">
          <div class="prompt-title">Introduce the problem</div>
          <div class="prompt-detail">
            <p>
              Explain how you encountered the problem you’re trying to solve, and any difficulties that have prevented
              you from solving it yourself.
            </p>
          </div>
        </div>

      </div>
    </div>
    <div class="issue-expect-container">
      <div class="issue-expect-section issues-item">
        <div class="title-section">
          <h3>What did you try and what were you expecting?</h3>
          <p>Describe what you tried, what you expected to happen, and what actually resulted. Minimum 20
            characters.</p>
        </div>
        <div class="expect-section">
          <vue3-tinymce v-model="issueData.expectContent" :setting="state.setting"></vue3-tinymce>
        </div>
      </div>
      <div class="issue-prompt-section">
        <div class="prompt-section prompt">
          <div class="prompt-title title">Expand on the problem</div>
          <div class="prompt-expect info">
            <p>
              Show what you’ve tried, tell us what happened, and why it didn’t meet your needs.

              Not all questions benefit from including code, but if your problem is better understood with code you’ve
              written, you should include a minimal, reproducible example.

              Please make sure to post code and errors as text directly to the question (and not as images), and format
              them appropriately.
            </p>
          </div>
        </div>

      </div>
    </div>
    <div class="issue-tags-container">
      <div class="tags-section issues-item">
        <h3 class="tags-item">标签</h3>
        <p class="tags-item">
          最多添加5个标签来描述您的问题。开始键入以查看建议。</p>
        <div class="tags">
          <el-select
              class="tag-section-item el-select-section tags-input"
              v-model="issueData.tags"
              autocomplete="true"
              multiple
              multiple-limit="3"
              filterable
              allow-create
              default-first-option
              :reserve-keyword="false"
              placeholder="例子: 电信诈骗、境外诈骗"
          >
            <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
            />
          </el-select>
        </div>
        <div class="next ">
          <button class="next-button">Next</button>
        </div>
      </div>
      <div class="prompt-section prompt">
        <div class="prompt-title">Adding tags</div>
        <div class="prompt-detail">
          <p>
            Tags help ensure that your question will get attention from the right people.

            Tag things in more than one way so people can find them more easily. Add tags for product lines, projects,
            teams, and the specific technologies or languages used.

            Learn more about tagging
          </p>
        </div>
      </div>
    </div>
    <div class="function-section">
      <button @click="postIssue" class="submit-button function-item">Post your question</button>
      <button class="discard-button function-item">Discard draft</button>
    </div>


  </div>
</template>

<style scoped>

.issues-container {


  .profile-section {
    display: flex;
    height: 120px;
    justify-content: space-between;

    & > h3 {
      font-weight: 700;
      font-size: 27px;
      color: #232629;
      line-height: 120px;
    }

    .profile-bg {

      max-width: 500px;
    }
  }

  .info-section {
    background: #ebf4fb;
    border: 1px solid #a6ceed;

    .info-detail {
      & > h3 {
        margin-bottom: 6px;
        font-size: 21px;
        color: #3b4045;
      }

      & > p {
        font-size: 15px;
        color: #3b4045;
      }
    }

    .step-list {
      margin-top: 8px;

      & > h5 {
        font-size: 13px;
      }

      .step {
        list-style-type: disc;
        padding-left: 35px;
        font-size: 13px;
        color: #3b4045;

        & > li {
          margin-bottom: 4px;
        }
      }
    }
  }


  .issue-title-container {
    display: flex;


    .title-section {

      & > p {
        font-size: 12px;
        color: #3b4045;
      }

      .title-item {
        margin-top: 6px;
      }

      .title {
        display: flex;
        align-items: center;
        margin-top: 8px;
        padding-left: 8px;
        height: 36px;
        line-height: 36px;
        border-radius: 6px;
        border: 1px solid #e6e6e6;

        .title-input {
          width: 100%;

          &::placeholder {
            font-size: 12px;
            color: #babfc4;
          }
        }


      }

      .next {
        margin-top: 8px;

        .next-button {
          height: 30px;
          width: 65px;
          font-weight: 700;
          border-radius: 7px;
          background: #0a95ff;
          color: #fff;
        }
      }
    }

  }

  .issue-detail-container {
    display: flex;

    .issue-detail-section {
      padding: 20px;

      .title-section {

        & > h3 {
          font-size: 16px;
        }

        & > p {
          font-size: 12px;
          color: #3b4045;
        }
      }

      .detail-section {
        margin-top: 10px;
      }
    }
  }

  .issue-expect-container {
    display: flex;

    .issue-expect-section {

      .title-section {
        & > h3 {
          font-size: 16px;
        }

        & > p {
          font-size: 12px;
          color: #3b4045;
        }
      }

      .expect-section {
        margin-top: 10px;
      }
    }
  }

  .issue-tags-container {
    display: flex;
    margin-bottom: 16px;


    .tags-section {

      & > p {
        font-size: 12px;
        color: #3b4045;
      }

      .tags-item {
        margin-top: 6px;
      }

      .tags {
        display: flex;
        align-items: center;
        margin-top: 8px;
        padding-left: 8px;
        height: 40px;
        line-height: 40px;
        border-radius: 6px;

        .tags-input {
          margin-left: -11px;
          width: 100%;

          &::placeholder {
            font-size: 12px;
            color: #babfc4;
          }
        }


      }

      .next {
        margin-top: 8px;

        .next-button {
          height: 30px;
          width: 65px;
          font-weight: 700;
          border-radius: 7px;
          background: #0a95ff;
          color: #fff;
        }
      }
    }

  }

  .function-section {
    margin-bottom: 20px;


    .submit-button {
      color: #fff;
      background: #81c7fc;
    }

    .discard-button {
      color: #c22e32;

      &:hover {
        background: #fdf2f2;
      }
    }

    .function-item {
      padding: 8px;
      margin-right: 10px;
      height: 38px;
      font-size: 12px;
      border-radius: 6px;
    }
  }
}

.issues-item {
  padding: 24px;
  margin-top: 16px;
  width: 850px;
  border-radius: 5px;
  border: 1px solid #dddddd;
}

.prompt {
  margin: 18px 0 0 16px;
  max-width: 384px;
  border-radius: 2px;
  box-shadow: 1px 1px 2px #d6d9dc,
  -1px -1px 2px #d6d9dc,
  1px -1px 2px #d6d9dc,
  -1px 1px 2px #d6d9dc;
}

.prompt-section {
  .prompt-title {
    padding: 12px;
    font-weight: 700;
    background: #f8f9f9;
    border-bottom: 1px solid #d6d9dc;
  }

  .prompt-detail {
    padding: 12px;
  }

  .info {
    padding: 12px;

  }

}

</style>