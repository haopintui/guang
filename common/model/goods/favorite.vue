<template>
	<view class="item" 
		@click="navToDetailPage(itemData)">
		<view class="pic">
			<image :src="itemData.goods.pic_url"></image>
		</view>
		<view class="content">
			<view class="item-box">
				<text class="title">{{itemData.goods.title}}</text>
			</view>
			<view class="item-box" v-if="itemData.coupon.coupon_money>0">
				<view class="coupon-money">￥{{itemData.coupon.coupon_money}}元券</view>
			</view>
			<view class="item-box">
				<text>{{itemData.goods.user_type_name}} ¥{{itemData.price.buy_price}}</text>
				<text>已售 {{itemData.goods.volume_str}}</text>
			</view>
		</view>
	</view>
</template>

<script>
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
		methods: {
			//详情页
			navToDetailPage(item) {
				//测试数据没有写id，用title代替
				let id = item.goods.num_iid;
				uni.navigateTo({
					url: `/pages/goods/goods?id=${id}`
				})
			},
			
		}
	}
</script>

<style lang="scss">
.item{
	display:flex;
	flex-direction: row;
	margin: 5upx 0px;
	padding: 10upx 10upx;
	background: #fff;
	.pic{
		height: 300upx;
		width: 300upx;
		image{
			height: 300upx;
			width: 300upx;
		}
	}
	.content{
		padding: 10upx 10upx;
		display:flex;
		flex-direction: column;
		font-size: $font-sm;
		.item-box{
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			margin: 5upx 0px;
			color: #999;
			.coupon-money{
				font-size: $font-sm;
				color: $uni-color-primary;
				line-height: 1;
				padding: 5px 10px;
				background: linear-gradient(90deg,#ff8873 0,#ff4f4f 100%);
				color: #FFF;
				border-radius: 3px;
			}
			.coupon-price{
				color: $uni-color-primary;
				.em{
					font-weight: 500;
					font-size: 32upx;
				}
			}
		}
	}
}
</style>
