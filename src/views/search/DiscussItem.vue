<script setup>
import {defineProps} from 'vue'
import {parseHTMLContent} from '@/util/format'

const props = defineProps({
	list: {
		required: true,
		type: Array
	}
})




</script>

<template>
	<div class="discuss-container" v-if="props.list !== null">
		<div v-for="article in props.list" :key="article.id" class="discuss-card">
			<div class="discuss-top">
				<a class="top-title" href="">
					{{ article.title }}
				</a>
				<span style="background-color: #d9e9ff; color: #0a95ff">置顶</span>
				<span style="background-color: #ffecd1; color: #ffa119">官方</span>
				<span style="background-color: #def1d4; color: #5ab726">推荐</span>
			</div>
			<div class="discuss-middle">
				<div class="middle-label">
					<span v-for="(item, index) in article.labels" :key="index">{{ item }}</span>
				</div>
				<div class="middle-content">
					<a href="#">
						<div class="detailed-content">
							<a class="top-avatar">
								<img :src="article.avatar" alt="">
							</a>
							{{ parseHTMLContent(article.content) }}
						</div>
					</a>
				</div>
			</div>
			<div class="discuss-bottom">
				<div class="bottom-label">
					<div class="label-like label-bottom">
						<img src="@/assets/icon/search_like.svg" alt="" class="label-icon">
						<span class="label-span">{{ article.likeNum }}</span>
					</div>
					<a class="label-bottom" href="#">
						<img src="@/assets/icon/search_eyes.svg" alt="" class="label-icon">
						<span class="label-span">{{ article.viewNum }}</span>
					</a>
					<button class="label-bottom">
						<img src="@/assets/icon/search_talk.svg" alt="" class="label-icon">
						<span class="label-span">{{ article.commentNum }}</span>
					</button>
					<button class="label-bottom">
						<img src="@/assets/icon/search_collect.svg" alt="" class="label-icon">
						<span class="label-span">{{ article.collectNum }}</span>
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

	width: 100%;
	border-radius: 8px;


	.discuss-card {
		height: 184px;
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