<script setup>
import {ref} from "vue";

const searchData = ref([
	{
		id: '01',
		avatar: 'https://typora8112.oss-cn-beijing.aliyuncs.com/byxl8112-pictures/01-question.png',
		userName: '陈总',
		siteRanking: 1,
		fans: 1000,
		focusOn: 1000
	},
	{
		id: '02',
		avatar: 'https://typora8112.oss-cn-beijing.aliyuncs.com/byxl8112-pictures/01-question.png',
		userName: '陈总',
		siteRanking: 1,
		fans: 1000,
		focusOn: 1000
	}
])
</script>

<template>
		<div class="userResult-main">
			<div v-for="items in searchData"  :key="items.id" class="user-card item-flex">
					<div class="user-avatar">
						<img :src="items.avatar" alt="">
					</div>
				<div class="user-middle">
					<div class="item-flex item-center">
						<span style="font-size: 15px">{{ items.userName }}</span>
					</div>
					<div class="user-bottom">
							<span>全站排名</span>
						<span>{{ items.siteRanking }}</span>
						<span>粉丝数</span>
						<span>{{ items.fans }}</span>
						<span>关注数</span>
						<span>{{ items.focusOn }}</span>
					</div>
				</div>
				<div class="user-right">
					<el-button type="success" size="large">+ 关注</el-button>
				</div>
			</div>
		</div>
</template>

<style scoped>
	.userResult-main{
		width: 880px;
		background-color: #f7f8fa;
		.user-card{
			justify-content: space-between;
			height: 100px;
			padding: 16px;
			margin-bottom: 16px;
			box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
			background-color: #ffffff;
			&:hover{
				cursor: pointer;
			}
			.user-avatar{
				& > img{
					width: 48px;
					height: 48px;
					border-radius: 25%;
				}
			}
			.user-middle{
				width: 695px;
				height: 69px;
				margin: 0 16px;
				.user-bottom{
					margin: 19px 0 0;
					font-size: 14px;
					& > span:nth-child(even){
						margin: 0 32px 0 8px;
					}
				}
			}
			.user-right{
				width: 74px;
				height: 69px;
				& > button:hover{
					background-color: #269a4f;
				}
			}
		}
	}

	.item-flex{
		display: flex;
	}
	.item-center{
		align-items: center;
	}
</style>