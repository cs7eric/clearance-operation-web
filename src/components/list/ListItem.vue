<script setup>
import {defineProps} from 'vue';

defineProps({
	// 标题
	columns: {
		required: true,
		type: Array
	},
	// 数据源
	data: {
		required: true,
		type: Array
	}
})

</script>

<template>
	
	<div class="custom-table">
		<table>
			<thead>
			<tr>
				<th v-for="column in columns" :key="column.prop">{{ column.label }}</th>
			</tr>
			</thead>
			<tbody>
			<tr v-for="(item, index) in data" :key="index">
				<td v-for="column in columns" :key="column.prop">{{ item[column.prop] }}</td>
			</tr>
			</tbody>
		</table>
	</div>
</template>

<style scoped>
.custom-table {
	width: 100%;
	text-align: center;
	table {
		width: 100%;
		border-collapse: collapse;
		th, td {
			border: 1px solid #ccc;
			padding: 8px;
		}
	}
}
</style>