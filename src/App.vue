<script setup>
import zhCn from 'element-plus/es/locale/lang/zh-cn.mjs'
</script>

<template>
	<!-- 国际化处理：中文显示 -->
	<el-config-provider :locale="zhCn">
		<router-view/>
	</el-config-provider>
</template>
<style scoped>
</style>
