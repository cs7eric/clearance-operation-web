<script setup>

import MainLayout from "@/layout/MainLayout.vue";
import {CloseBold, Search} from "@element-plus/icons-vue";
import {ref} from "vue";
import ListItem from "@/components/list/ListItem.vue";
import UserResult from "@/views/search/UserResult.vue";
import DiscussItem from "@/views/search/DiscussItem.vue";
// import UserResult from "@/views/search/UserResult.vue";

const activeName = ref('first'); //默认选中第一个标签

//TODO : 查找数据，需要接口
const searchData = ref([
	{
		title: 'sss',
		category: '111',
		time: '2023.12.23',
		state: 'open'
	},
	{
		title: 'ss2323s',
		category: '11123213412342',
		time: '2023.12.23',
		state: 'open'
	},
])

// 分类标题，自己写或者接口
const list = ref({
	title: '题目',
	category: '类别',
	time: '时间',
	state: '状态',
	name: '名字'
})

</script>

<template>
	<div class="search-container">
		<main-layout></main-layout>
		<div class="search-main">
			<div class="menu">
				<div class="menu-top">
					<el-input
							style="width: 500px"
							size="large"
							placeholder="Search"
							:prefix-icon="Search"
							:suffix-icon="CloseBold"
					/>
				</div>
				<div class="menu-middle">
					<el-tabs v-model="activeName" class="demo-tabs">
						<el-tab-pane label="全站" name="first">
							<div class="search-result">
								<list-item :list="list" :data="searchData"></list-item>
							</div>
						</el-tab-pane>
						<el-tab-pane label="AI问答" name="second">Config</el-tab-pane>
						<el-tab-pane label="用户" name="third">
							<div class="user-result">
								<user-result></user-result>
							</div>
						</el-tab-pane>
						<el-tab-pane label="讨论" name="fourth">
							<div class="discuss-result">
								<discuss-item></discuss-item>
							</div>
						</el-tab-pane>
					</el-tabs>
				</div>
			</div>
		</div>
	</div>

</template>

<style scoped>
.search-container {
	.search-main {
		display: flex;
		justify-content: center;
		
		.menu {
			.menu-top {
				width: 880px;
			}
			
			.menu-middle {
				.demo-tabs {
					font-size: 20px;
				}
				
				.search-result {
				}
			}
		}
	}
	
}

</style>