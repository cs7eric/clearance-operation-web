<script setup>
import {ref} from 'vue'
import {casesGetPageCases} from '@/api/api/fraudCaseController'
import {ArrowDown, RefreshLeft, Search, Tools} from '@element-plus/icons-vue'

const pageRequestDTO = ref ({
  pageNum: 1,
  pageSize: 2
})
const total = ref()
const caseList  = ref ([])

const getCases = async () => {

  const res = await casesGetPageCases(pageRequestDTO.value)
  caseList.value = res.data.records
  total.value = res.data.total
}

// 文章分页
const onSizeChange = (size) => {
  pageRequestDTO.value.pageNum = 1
  pageRequestDTO.value.pageSize = size
  getCases()
}
const onCurrentChange = (current) => {
  pageRequestDTO.value.pagenum = current
  getCases()
}


getCases()



</script>

<template>

  <div class="case-table-container">

    <div class="top-section">
      <div class="mb-3 selection-formItem">
        <el-dropdown trigger="click" style="margin-right: 15px">
          <el-button type="info" plain>
            日期
            <el-icon class="el-icon--right">
              <Arrow-down/>
            </el-icon>
          </el-button>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>近一周</el-dropdown-item>
              <el-dropdown-item>近一月</el-dropdown-item>
              <el-dropdown-item>近三月</el-dropdown-item>
              <el-dropdown-item>近半年</el-dropdown-item>
              <el-dropdown-item>近一年</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>

        <el-dropdown trigger="click" style="margin-right: 20px">
          <el-button type="info" plain>
            标签
            <el-icon class="el-icon--right">
              <Arrow-down/>
            </el-icon>
          </el-button>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>Action 1</el-dropdown-item>
              <el-dropdown-item>Action 2</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
        <el-dropdown trigger="click" style="margin-right: 20px">
          <el-button type="info" plain>
            地区
            <el-icon class="el-icon--right">
              <Arrow-down/>
            </el-icon>
          </el-button>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>北京</el-dropdown-item>
              <el-dropdown-item>上海</el-dropdown-item>
              <el-dropdown-item>天津</el-dropdown-item>
              <el-dropdown-item>南京</el-dropdown-item>
              <el-dropdown-item>深圳</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
        <el-dropdown trigger="click" style="margin-right: 20px">
          <el-button type="info" plain>
            年龄
            <el-icon class="el-icon--right">
              <Arrow-down/>
            </el-icon>
          </el-button>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>未成年</el-dropdown-item>
              <el-dropdown-item>18-30</el-dropdown-item>
              <el-dropdown-item>31-45</el-dropdown-item>
              <el-dropdown-item>46-65</el-dropdown-item>
              <el-dropdown-item>65以上</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>

        <div class="find-formInput">
          <el-input
              v-model="input2"
              style="width: 240px"
              placeholder="搜索案例标题、标签或内容"
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

    </div>
    <div class="table-section">

      <el-table :data="caseList" style="width: 100%">
        <el-table-column fixed prop="title" label="标题" />
        <el-table-column show-overflow-tooltip prop="description" label="描述" />
        <el-table-column prop="type" label="标签" />
        <el-table-column prop="date" label="日期" />
        <el-table-column prop="amount" label="涉案金额" />
        <el-table-column prop="victimAgeRange" label="受害人年龄" />
        <el-table-column prop="region" label="地区" />

        <el-table-column fixed="right" label="Operations" width="120">
          <template #default>
            <el-button link type="primary" size="small" @click="handleClick"
            >Detail</el-button
            >
            <el-button link type="primary" size="small">Edit</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>

  <!-- 文章分页 -->
  <div class="pagination-section">
    <el-pagination
        v-model:current-page="pageRequestDTO.pageNum"
        v-model:page-size="pageRequestDTO.pageSize"
        :page-sizes="[2, 3, 5, 10]"
        :background="true"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
        @size-change="onSizeChange"
        @current-change="onCurrentChange"
        style="margin-top: 20px; justify-content: flex-end"
    />

  </div>
</template>

<style scoped>
.case-table-container {
  width: 65vw;
}


.mb-3 .el-icon--right {
  padding-left: 3px;
}

.selection-formItem {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 10px;
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

</style>