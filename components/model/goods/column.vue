<template>
	<view class="guess-item"
		@click="navToDetailPage(itemData)"
	>
		<view class="image-wrapper">
			<image :src="itemData.goods.pic_url" mode="aspectFill"></image>
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
					url: `/pages/product/product?id=${id}`
				})
			},
		}
	}
</script>

<style lang="scss">
.guess-item{
	display:flex;
	flex-direction: column;
	width: 48%;
	padding-bottom: 40upx;
	&:nth-child(2n+1){
		margin-right: 4%;
	}
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
	font-size: $font-lg;
	color: $font-color-dark;
	line-height: 80upx;
}
.price{
	font-size: $font-lg;
	color: $uni-color-primary;
	line-height: 1;
}
</style>
