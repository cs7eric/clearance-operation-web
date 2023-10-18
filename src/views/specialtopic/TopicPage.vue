<script setup>

import Vue3Tinymce from '@jsdawn/vue3-tinymce'
</script>

<template>
  <div class="issue-expect-container">
    <div class="issue-expect-section issues-item">
      <div class="title-section">
        <h3>what are the expect of your problem?</h3>
        <p>Introduce the problem and expand on what you put in the Minimum 20 characters</p>
      </div>
      <div class="expect-section">
        <vue3-tinymce :setting="state.setting"></vue3-tinymce>
      </div>
    </div>
    <div class="issue-prompt-section">
      <div class="prompt-section prompt">
        <div class="prompt-title">Introduce the problem</div>
        <div class="prompt-expect">
          <p>
            Explain how you encountered the problem you’re trying to solve, and any difficulties that have prevented
            you from solving it yourself.
          </p>
        </div>
      </div>

    </div>
  </div>
  <div class="issue-tags-container">
    <div class="tags-section issues-item">
      <h3 class="tags-item">标题</h3>
      <p class="tags-item">具体一点，想象一下你正在向另一个人问问题。 </p>
      <div class="tags">
        <input class="tags-input" type="text"
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

</template>

<style scoped>
.issue-tags-container {
  display: flex;


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
      height: 36px;
      line-height: 36px;
      border-radius: 6px;
      border: 1px solid #e6e6e6;

      .tags-input {
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

</style>