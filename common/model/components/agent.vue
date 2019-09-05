<template>
	<view class="content">
		<view class="title">
			<view class="tip">团队业绩</view>
			<view class="link" @click="navTo('/pages/user/order')">查看详情></view>
		</view>
		<view class="line"></view>
		<view class="tj-sction">
			<view class="tj-item" @click="navTo('/pages/user/order')">
				<text class="num">{{itemData.money_total}}</text>
				<text>累计奖励奖励（元）</text>
			</view>
			<view class="tj-item" @click="navTo('/pages/user/order')">
				<text class="num">{{itemData.orders}}</text>
				<text>奖励订单(笔)</text>
			</view>
		</view>
		<view class="line"></view>
		<view class="tj-sction">
			<view class="tj-item" @click="navTo('/pages/user/order')">
				<text class="num">{{itemData.today_money}}</text>
				<text>今日奖励（元）</text>
			</view>
			<view class="tj-item" @click="navTo('/pages/user/order')">
				<text class="num">{{itemData.today_orders}}</text>
				<text>今日成交（笔）</text>
			</view>
			<view class="tj-item" @click="navTo('/pages/user/order')">
				<text class="num">{{itemData.today_money_available}}</text>
				<text>今日结算(元)</text>
			</view>
		</view>
	</view>
</template>

<script>
    import { mapState ,mapMutations } from 'vuex'; 
	export default {
		props:{
			itemData:{
				type:Object
			}
		},
		data() {
			return {
				
			}
		},
        computed: {
			...mapState(['hasLogin','userInfo'])
		},
		methods: {
			navTo(url) {
				if(!this.hasLogin){
					url = '/pages/public/login';
				}
				uni.navigateTo({
					url:url
				})
			},
			
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
	.tj-sction{
		display:flex;
		flex-direction: row;
		justify-content: space-between;
		font-size: $font-sm;
		.tj-item{
			display: flex;
			flex-direction: column;
			color: #75787d;
			padding:5px;
			.num{
				color: #FA436A;
				padding:5px;
			}
		}
	}
}
</style>
