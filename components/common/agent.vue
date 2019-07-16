<template>
	<view class="content">
		<view class="title">
			<view class="tip">团队业绩</view>
			<view class="link">查看详情></view>
		</view>
		<view class="line"></view>
		<view class="tj-sction">
			<view class="tj-item">
				<text class="num">0</text>
				<text>积分奖励（g个）</text>
			</view>
			<view class="tj-item">
				<text class="num">20</text>
				<text>奖励订单(笔)</text>
			</view>
		</view>
		<view class="line"></view>
		<view class="tj-sction">
			<view class="tj-item">
				<text class="num">128.8</text>
				<text>累计奖励（元）</text>
			</view>
			<view class="tj-item">
				<text class="num">0</text>
				<text>积分奖励（g个）</text>
			</view>
			<view class="tj-item">
				<text class="num">20</text>
				<text>奖励订单(笔)</text>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data(){
		return {
			
		}
	},
	props(){
		// icon: {
		// 	type: String,
		// 	default: ''
		// }
	},
	methods:{
		
	}
}
</script>

<style lang="scss">
	.content{
		display: flex;
		flex-direction: column;
		padding: 30upx 10px 10upx;
		margin-top: 20upx;
		background: #fff;
		border-radius:10upx;
		.title{
			display:flex;
			flex-direction: row;
			justify-content: space-between;
			.tip{
				font-size: $font-base;
			}
			.link{
				font-size: $font-base;
			}
		}
		.line{
			margin-top: 10upx;
			border-bottom-width: 0.3upx;
			border-bottom-style: solid;
			border-bottom-color: #000;
			opacity: 0.1;
		}
	}
</style>
