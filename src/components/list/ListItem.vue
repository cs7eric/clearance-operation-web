<script setup>
import {defineProps} from 'vue';

defineProps({
  list: {
    required: true,
    type: Object
  },
  data: {
    required: true,
    type: Array
  }
})

</script>

<template>
  <div class="listTable">

    <el-table :data="data" style="width: 100%">
      <el-table-column :label="list.title" prop="title"/>
      <el-table-column :label="list.category" prop="category"/>
      <el-table-column :label="list.time" prop="time"/>
      <el-table-column :label="list.state" prop="state"/>
    </el-table>

  </div>
</template>

<style scoped>
.listTable {

}
</style>