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
				<view class="coupon-price">
					{{itemData.goods.user_type_name}}<text class="em"> 券后¥{{itemData.price.buy_price}}</text>
				</view>
				<text class="volume">已售 {{itemData.goods.volume_str}}</text>
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
		flex: 1;
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
			font-size: 16px;
			color: #333;
			.coupon-money{
				// font-size: $font-sm;
				// color: $uni-color-primary;
				// line-height: 1;
				// padding: 5px 10px;
				// background: linear-gradient(90deg,#ff8873 0,#ff4f4f 100%);
				// color: #FFF;
				// border-radius: 3px;
				background: #FFECEB;
				display: inline-block;
				border-radius: 2px;
				border: 1px solid #ffa5a1;
				color: #FF2B22;
				padding: 0 5px;
				font-size: 12px;
				margin-right: 10px;
			}
			.coupon-price{
				font-size: 11px;
				color: #888;
				.em{
					color: $uni-color-primary;
					font-size: 20px;
					margin: 0px 10px;
				}
			}
			.volume{
				font-size: 12px;
				color: #888;
			}
			.tqg{
				font-size: 12px;
				color: $uni-color-primary;
				padding: 0px 5px;
				background: linear-gradient(to right,#FF008C,#FF6A00);
				color: #FFF;
			}
		}
	}
}
</style>
