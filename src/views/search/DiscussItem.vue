<script setup>
import {ref} from "vue";

const discussData = ref([
	{
		id: '01',
		avatar: 'https://typora8112.oss-cn-beijing.aliyuncs.com/byxl8112-pictures/01-question.png',
		title: '反诈骗注意事项',
		labels: ['诈骗', '诈骗信息案', '注意防范'],
		content: '2024年即将来临，诈骗事件越来越多...2024年即将来临，诈骗事件越来越多...2024年即将来临，诈骗事件越来越多...2024年即将来临，诈骗事件越来越多...',
		likeNum: '235',
		viewNum: '1.5k',
		commentNum: '24',
		collectNum: '7'
	},
	{
		id: '021',
		avatar: 'https://typora8112.oss-cn-beijing.aliyuncs.com/byxl8112-pictures/01-question.png',
		title: '如何更加防范诈骗 ?',
		labels: ['诈骗', '诈骗信息案', '注意防范'],
		content: '2024年即将来临，诈骗事件越来越多...2024年即将来临，诈骗事件越来越多...2024年即将来临，诈骗事件越来越多...2024年即将来临，诈骗事件越来越多...2024年即将来临，诈骗事件越来越多...',
		likeNum: '5',
		viewNum: '1.4k',
		commentNum: '224',
		collectNum: '27'
	}
])

</script>

<template>
	<div class="discuss-container">
		<div v-for="items in discussData" :key="items.id" class="discuss-card">
			<div class="discuss-top">
				<a class="top-avatar">
					<img :src="items.avatar" alt="">
				</a>
				<a class="top-title" href="">
					{{ items.title }}
				</a>
				<span style="background-color: #d9e9ff; color: #0a95ff">置顶</span>
				<span style="background-color: #ffecd1; color: #ffa119">官方</span>
				<span style="background-color: #def1d4; color: #5ab726">推荐</span>
			</div>
			<div class="discuss-middle">
				<div class="middle-label">
					<span v-for="(item, index) in items.labels" :key="index">{{ item }}</span>
				</div>
				<div class="middle-content">
					<a href="#">
						<div class="detailed-content">
							{{ items.content }}
						</div>
					</a>
				</div>
			</div>
			<div class="discuss-bottom">
				<div class="bottom-label">
					<div class="label-like label-bottom">
						<img src="@/assets/icon/search_like.svg" alt="" class="label-icon">
						<span class="label-span">{{ items.likeNum }}</span>
					</div>
					<a class="label-bottom" href="#">
						<img src="@/assets/icon/search_eyes.svg" alt="" class="label-icon">
						<span class="label-span">{{ items.viewNum }}</span>
					</a>
					<button class="label-bottom">
						<img src="@/assets/icon/search_talk.svg" alt="" class="label-icon">
						<span class="label-span">{{ items.commentNum }}</span>
					</button>
					<button class="label-bottom">
						<img src="@/assets/icon/search_collect.svg" alt="" class="label-icon">
						<span class="label-span">{{ items.collectNum }}</span>
					</button>
					<button class="label-bottom">
						<img src="@/assets/icon/search_share.svg" alt="" class="label-icon">
						<span class="label-span">分享</span>
					</button>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
.discuss-container {

	//border: 1px solid #d0d7de;
	border-radius: 8px;


	.discuss-card {
		height: 184px;
		margin: 10px 10px 0 10px;
		padding: 16px 16px 0 16px ;
		border-bottom : 1px solid #d0d7de;

		&:last-child {
			border-bottom : none;

		}

		.discuss-top {
			display: flex;
			height: 24px;
			
			.top-avatar {
				display: block;
				width: 32px;
				height: 23px;
				cursor: pointer;
				
				& > img {
					width: 22px;
					height: 22px;
					margin: 0 10px 0 0;
				}
			}
			
			.top-title {
				font-size: 16px;
			}
			
			& > span {
				line-height: 23px;
				font-size: 12px;
				margin: 0 0 0 10px;
				padding: 0 8px;
				border-radius: 15%;
			}
		}
		
		.discuss-middle {
			height: 80px;
			
			.middle-label {
				display: flex;
				height: 24px;
				margin: 4px 0 0;
				
				& > span {
					line-height: 23px;
					font-size: 12px;
					margin: 0 0 0 10px;
					padding: 0 8px;
					border-radius: 30px;
					background-color: #f2f3f4;
					color: #85858a;
				}
			}
			
			.middle-content {
				height: 48px;
				margin: 4px 0 0;
				
				.detailed-content {
					display: flex;
					flex-wrap: wrap;
					font-size: 14px;
					line-height: 24px;
					margin-top: 12px;
					color: #595959;
					word-break: break-word;
					align-self: stretch;
					-webkit-line-clamp: 2;
					overflow: hidden;
					display: -webkit-box;
					-webkit-box-orient: vertical
				}
			}
		}
		
		.discuss-bottom {
			height: 24px;
			margin: 12px 0 0 -9px;
			
			.bottom-label {
				display: flex;
				font-size: 14px;
				margin-top: 15px;
				color: #595959;
				
				.label-like {
					cursor: pointer;
					
					& > img {
						width: 24px;
						height: 24px;
					}
				}
				
				& > a {
					& > img {
						width: 26px;
						height: 26px;
					}
				}
				
				&:nth-child(4) {
					& > img {
						width: 26px;
						height: 26px;
					}
				}
			}
		}
	}
}

.label-icon {
	width: 26px;
	height: 26px;
	filter: drop-shadow(1000px 0 0);
	transform: translate(-1000px);
}

.label-span {
	height: 20px;
	margin: 0 0 0 7px;
	vertical-align: middle;
	line-height: 20px;
}

.label-bottom {
	display: flex;
	margin: 0 12px;
	overflow: hidden;
	align-items: center;
}
</style>