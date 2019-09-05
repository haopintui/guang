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
			<view class="item-box">
				<view v-if="itemData.goods.weight>0" class="weight">
					热销指数
					<text class="em">{{itemData.goods.weight}}</text>
				</view>
			</view>
			<view class="item-box">
				<view class="price">{{itemData.goods.user_type_name}} ¥{{itemData.price.price}}</view>
			</view>
			<view class="item-box" v-if="itemData.goods.coupon_money>0">
				<view class="coupon-money">￥{{itemData.coupon.coupon_money}}元券</view>
			</view>
			<view class="item-box">
				<view class="coupon-price">券后价 ¥<text class="em">{{itemData.price.buy_price}}</text></view>
				<!-- <text>已售 {{itemData.goods.volume_str}}</text> -->
				<view class="qiang-btn">立即抢</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			itemData:{
				type:Object
			},
			top:{
				type:Number
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
		position: relative;
		image{
			height: 300upx;
			width: 300upx;
		}
		.top{
			position: absolute;
			top: 0;
			left: 0;
			color: #fff;
			font-size: 14px;
			width: 42px;
			padding-right: 11px;
			height: 20px;
			background: url(https://img.youdanhui.cn/cms_img/2019-08-30/5d68824803a51.png) no-repeat;
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
			margin: 5upx 0px 10upx;
			color: #999;
			font-size: 14px;
			color: #333;
			.sales2h{
				font-size: 14px;
				color: #888;
				.em{
					color: #FF7800;
				}
			}
			.price{
				font-size: 11px;
				color: #aaa;
			}
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
				font-style: normal;
				font-size: 12px;
				.em{
					color: #FF2B22;
					font-size: 20px;
				}
			}
			.qiang-btn{
				background: rgba(252,63,120,1);
				background: linear-gradient(-90deg,rgba(252,77,81,1),rgba(252,63,120,1));
				border-radius: 100px;
				color: #fff;
				font-size: 14px;
				padding: 3px 15px;
				float: right;
				line-height: 23px;
				height: 25px;
			}
			.weight{
				color: $uni-color-primary;
				font-style: normal;
				font-size: 16px;
				.em{
					color: #FF2B22;
					font-size: 16px;
					padding: 0px 5px;
				}
			}
		}
	}
}
</style>
