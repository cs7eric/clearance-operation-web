<script setup>
import {ref} from "vue";

const searchData = ref([
	{
		id: '01',
		avatar: 'https://typora8112.oss-cn-beijing.aliyuncs.com/byxl8112-pictures/01-question.png',
		userName: '陈总',
		siteRanking: 1,
		fans: 1000,
		focusOn: 1000,
		nickname: 'cccs7'
	},
	{
		id: '02',
		avatar: 'http://co-main.oss-cn-beijing.aliyuncs.com/2024/03/27/9e558bb7-5f4c-4132-8e18-0ea33c26b968.jpg',
		userName: '陈总',
		siteRanking: 1,
		fans: 1000,
		focusOn: 1000,
		nickname: 'cccs7'
	}
])
</script>

<template>
	<div class="user-search-container">
		<div class="userResult-main">
			<div v-for="items in searchData"  :key="items.id" class="user-card item-flex">
				<div class="user-avatar">
					<img :src="items.avatar" alt="">
				</div>
				<div class="user-middle">
					<div class="item-flex item-center">
						<h3 class="user-name"  style="font-size: 15px">{{ items.userName }}</h3>
						<h3 class="nickname">{{items.nickname}}</h3>
					</div>
					<div class="user-info">
						<div class="info-item">zhengzhou, Henan</div>
						<div class="info-item">·</div>
						<div class="info-item">
							<img class="icon" src="@/assets/icon/bookmark.svg" alt="">
						</div>
						<div class="info-item">{{ items.fans }}</div>
						<div class="info-item">·</div>
						<div class="info-item">
							<img class="icon" src="@/assets/icon/focuson.svg" alt="">
						</div>
						<div class="info-item">{{ items.focusOn }}</div>
					</div>
				</div>
				<div class="user-right">
					<el-button class="follow-button" plain>follow</el-button>
				</div>
			</div>
		</div>

	</div>
</template>

<style scoped>
.user-search-container {
	width: 880px;

}

	.userResult-main{
		.user-card{
			justify-content: space-between;
			height: 100px;
			padding: 16px;
			border-radius: 9px;
			border: 1px solid #d0d7de;
			margin-bottom: 16px;
			background-color: #ffffff;
			&:hover{
				cursor: pointer;
			}
			.user-avatar{
				& > img{
					height: 60px;
					width: 60px;
					border-radius: 50%;
				}
			}
			.user-middle{
				width: 695px;
				height: 69px;
				margin: 0 16px;
				.user-info{
					margin: 19px 0 0;
					font-size: 14px;
					& > span:nth-child(even){
						margin: 0 8px 0 8px;
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


	.user-name {
		font-size: 22px;
		font-weight: 700;
		color: #2069da;
	}

	.nickname {
		margin-left: 6px;
		font-size: 16px;
		font-weight: 300;
		color: #636c76;
	}

	.user-info {
		display: flex;
	}

	.info-item {
		padding-right: 6px;
		color: #636c76;
		font-size: 12px;

		&>.icon {
			max-width: 16px;
		}
	}

	.follow-button {

		background: #f6f8fa;
		&:hover {
			background: transparent !important;
		}
	}
</style>