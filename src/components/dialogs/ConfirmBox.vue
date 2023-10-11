<script setup>
import {toRefs} from 'vue'

const props = defineProps(
  {
    article: Object,
    visible: Boolean
  }
)

import {ref} from 'vue'
import {ElMessage} from 'element-plus'
import {Plus} from '@element-plus/icons-vue'
import {fileUploadService} from '@/api/upload'

const imageUrl = ref('')

const handleAvatarSuccess = function (response, uploadFile) {
  imageUrl.value = URL.createObjectURL(uploadFile.raw)
}

const beforeAvatarUpload = function (rawFile) {
  this.fileToUpload = rawFile
  if (rawFile.type !== 'image/jpeg') {
    ElMessage.error('Avatar picture must be JPG format!')
    return false
  } else if (rawFile.size / 1024 / 1024 > 2) {
    ElMessage.error('Avatar picture size cannot exceed 2MB!')
    return false
  }
  return true
}

const {article, visible} = toRefs(props)
console.log(article)
article.value.title = '这是一个测试title'


const value = ref([])
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
</script>

<template>
  <el-dialog v-model:visible="visible" class="el-dialog-confirm">
    <template #header>
      <div class="confirm-dialog-header">
        <h4>发布文章：{{ article.title }}</h4>
      </div>
    </template>
    <div class="confirm-dialog-container">
      <div class="confirm-article-section">
        <div class="cover-upload-section">
          <h4>上传封面</h4>
          <el-upload
              class="cover-uploader"
              action="http://localhost:8089/common/upload"
              :show-file-list="false"
              :on-success="handleAvatarSuccess"
              :before-upload="beforeAvatarUpload"
          >
            <img v-if="imageUrl" :src="imageUrl" class="cover"/>
            <el-icon v-else class="cover-uploader-icon">
              <Plus/>
            </el-icon>
          </el-upload>
        </div>
        <div class="function-section">
          <div class="tags-section">
            <h4 class="tag-section-item">选择标签</h4>
            <el-select
                class="tag-section-item el-select-section"
                v-model="value"
                autocomplete="true"
                multiple
                multiple-limit="3"
                filterable
                allow-create
                default-first-option
                :reserve-keyword="false"
                placeholder="添加标签"

            >
              <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
              />
            </el-select>
          </div>
          <div class="relative-section">
            <h4>可能相关的问题</h4>
            <ul class="relative-list">
              <li class="relative-item" v-for="o in 4" :key="o">
                Question
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <template #footer>
      <span class="dialog-footer">
        <el-button>取消</el-button>
        <el-button type="primary">
          发布
        </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<style scoped>
.cover-uploader .cover {
  width: 178px;
  height: 178px;
  display: block;
}

.confirm-dialog-container {
  .confirm-article-section {
    display: flex;

    .cover-upload-section {
      & > h4 {
        height: 32px;
        line-height: 32px;
        font-size: 14px;
        font-weight: 700;
        margin-bottom: 10px;
      }
    }

    .function-section {
      margin-left: 30px;

      .tags-section {

        display: flex;
        margin-bottom: 10px;
        .tag-section-item {
          margin-right: 10px;
        }

        .el-select-section {
          width: 350px;
        }

        & > h4 {
          height: 32px;
          line-height: 32px;
          font-size: 14px;
          font-weight: 700;
        }
      }

      .relative-section {
        &>h4 {
          height: 32px;
          line-height: 32px;
          font-size: 14px;
          font-weight: 700;
        }

        .relative-list {
          .relative-item {
            padding-left: 20px;
            width: 360px;
            height: 40px;
            line-height: 40px;
          }
        }
      }
    }
  }
}


</style>

<style>

.el-dialog-confirm {
  border-radius: 8px;

  .confirm-dialog-header {
    & > h4 {
      font-weight: 700;
      font-size: 18px;
    }
  }
}

.cover-uploader .el-upload {
  border: 1px dashed var(--el-border-color);
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: var(--el-transition-duration-fast);
}

.cover-uploader .el-upload:hover {
  border-color: var(--el-color-primary);
}

.el-icon.cover-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  text-align: center;
}

</style>