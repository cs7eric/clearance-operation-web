<script setup>
import {toRefs} from 'vue'

const props = defineProps(
  {
    article: Object,
    visible: Boolean
  }
)

const {article, visible} = toRefs(props)
console.log(article)
article.value.title = '这是一个测试title'
</script>

<template>
  <el-dialog v-model:visible="visible"  class="el-dialog-confirm">
    <template #header>
      <div class="confirm-dialog-header">
        <h4>发布文章：{{article.title}}</h4>
      </div>
    </template>
    <div class="confirm-dialog-container">
      <div class="confirm-article-section">
        
      </div>
    </div>
    <template #footer>
      <span class="dialog-footer">
        <el-button >取消</el-button>
        <el-button type="primary" >
          发布
        </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<style>
.el-dialog-confirm {
  --el-dialog-padding-primary: 0;
  border-radius: 8px;

  .confirm-dialog-header {
    &>h4 {
      font-weight: 700;
      font-size: 18px;
    }
  }

}

.confirm-dialog-container {
  .confirm-article-section{
    .confirm-article-section{

      &>h3{
        font-size: 18px;
        font-weight: 700;
      }
    }
  }
}
</style>