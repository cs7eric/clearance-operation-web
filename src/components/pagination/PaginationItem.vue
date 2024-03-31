<script setup>
import {defineProps, defineEmits} from 'vue'

// 定义接收的props
const props = defineProps({
  pageNum: {
    type: Number,
    required: true
  },
  pageSize: {
    type: Number,
    required: true
  },
  total: {
    type: Number,
    required: true
  }
})

// 定义可以触发的事件
const emit = defineEmits(['size-change', 'current-change'])

const onSizeChange = (size) => {
  emit('size-change', size)
}

const onCurrentChange = (current) => {
  emit('current-change', current)
}


</script>

<template>
  <div class="pagination-section">
    <el-pagination
        v-model:current-page="props.pageNum"
        v-model:page-size="props.pageSize"
        :page-sizes="[2, 3, 5, 10]"
        :background="true"
        layout="total, sizes, prev, pager, next, jumper"
        :total="props.total"
        @size-change="onSizeChange"
        @current-change="onCurrentChange"
        style="margin-top: 20px; justify-content: flex-end"
    />

  </div>

</template>

<style scoped>
.pagination-section{
  margin-top: 20px;
  margin-bottom: 60px;
}
</style>