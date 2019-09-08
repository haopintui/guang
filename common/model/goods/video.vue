<template>
	<view class="floor-item"
		@click="navToDetailPage(itemData)"
	>
		<view class="img">
			<image class="pic" :src="itemData.goods.pic_url" mode="aspectFill"></image>
			<image class="play" src="https://img.youdanhui.cn/cms_img/2019-09-08/5d7464f96d569.png" mode="aspectFill"></image>
		</view>
		<text class="title clamp">{{itemData.goods.title}}</text>
		<text class="price">￥{{itemData.price.price}}</text>
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
					url: `/pages/goods/goods?video=1&id=${id}`
				})
			},
			
		}
	}
</script>

<style lang="scss">
.floor-item{
	width: 180upx;
	margin-right: 20upx;
	font-size: $font-sm+2upx;
	color: $font-color-dark;
	line-height: 1.8;
	.img{
		width: 180upx;
		height: 180upx;
		border-radius: 6upx;
		position: relative;
		.pic{
			width: 180upx;
			height: 180upx;
			border-radius: 6upx;
			top: 0upx;
			left: 0upx;
			position:absolute;
		}
		.play{
			width: 36upx;
			height: 36upx;
			position:absolute;
			top: 90upx;
			left: 90upx;
		}
	}
	.price{
		color: $uni-color-primary;
	}
}
</style>
