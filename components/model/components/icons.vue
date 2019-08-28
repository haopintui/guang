<template>
	<!-- 分类 -->
	<view class="cate-section">
		<view v-for="(item, index) in itemData.items" :item-data="item" :key="index" 
			class="cate-item" :style="iconWidth">
			<image :src="item.pic_url"></image>
			<text>{{item.title}}</text>
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
			
		},
		computed:{
			iconWidth(){
				return 'width:'+100/this.itemData.count+'%';
			},
			iconSize(){
				return 'width:'+this.itemData.icon_width+'px;height:'+this.itemData.icon_width+'px';
			}
		}
	}
</script>

<style lang="scss">

/* 分类 */
.cate-section {
	display: flex;
	// justify-content: space-around;
	justify-content: flex-start;
	align-items: center;
	flex-wrap:wrap;
	padding: 30upx 22upx; 
	background: #fff;
	.cate-item {
		display: flex;
		flex-direction: column;
		align-items: center;
		font-size: $font-sm + 2upx;
		color: $font-color-dark;
		margin: 20px 0px;
	}
	/* 原图标颜色太深,不想改图了,所以加了透明度 */
	image {
		width: 60upx;
		height: 60upx;
		margin-bottom: 14upx;
		// border-radius: 50%;
		// opacity: .7;
		// box-shadow: 4upx 4upx 20upx rgba(250, 67, 106, 0.3);
	}
}
</style>
