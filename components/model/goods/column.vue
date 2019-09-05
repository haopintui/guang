<template>
	<view class="guess-item"
		@click="navToDetailPage(itemData)"
	>
		<view class="image-wrapper">
			<image :src="itemData.goods.pic_url" mode="aspectFill"></image>
		</view>
		<text class="title clamp">{{itemData.goods.title}}</text>
		<view class="item-box" v-if="itemData.coupon.coupon_money>0">
			<view class="coupon-money">￥{{itemData.coupon.coupon_money}}元券</view>
		</view>
		<view class="item-box">
			<text class="coupon-price">券后 ¥<text class="em">{{itemData.price.buy_price}}</text></text>
		</view>
		<view class="item-box">
			<text>{{itemData.goods.user_type_name}} ¥{{itemData.price.buy_price}}</text>
			<text>已售 {{itemData.goods.volume_str}}</text>
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
.guess-item{
	background: #fff;
	display:flex;
	flex-direction: column;
	// width: 48%;
	width: 48vw;
	padding-bottom: 10upx;
	border-radius:5px;
	margin:10px 1vw;
	// &:nth-child(2n+1){
	// 	margin-right: 1vw;
	// }
}
.image-wrapper{
	width: 100%;
	height: 330upx;
	border-radius: 3px;
	overflow: hidden;
	image{
		width: 100%;
		height: 100%;
		opacity: 1;
	}
}
.title{
	font-size: $font-sm;
	color: $font-color-dark;
	line-height: 80upx;
	// font-weight: 500;
	padding: 0px 5px;
}
.item-box{
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	font-size: 24upx;
	color: #999;
	padding: 5px 5px;
	background-color: #fff;
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
</style>
