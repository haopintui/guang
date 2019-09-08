<template>
	<view class="tui-product-category">
		<view class="tui-category-item" v-for="(item, index) in itemData.items" 
		:key="index" @tap="navAction(item)" :style="iconWidth">
			<image :src="item.pic_url" 
				class="tui-category-img" 
				mode="widthFix"></image>
			<view class="tui-category-name">{{item.title}}</view>
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
			navAction(item){
				if(item.pages){
					this.navTo(item.pages);
				}
				else if(item.action.action=='load_action'){
					this.load_action(item.action);
				}
				else if(item.action.action=='open_web'){
					this.open_web(item.action);
				}
			},
			navTo(url) {
				uni.navigateTo({
					url:url
				})
			},
			load_action(action){
				let options = {};
				// options.putAll(action.params);
				console.log(action);
				options = Object.assign(options,action.params);
				this.$http.post('/cms/load/view', options).then(res => {
					if(res.data.item.click
						&&res.data.item.click.we_app_web_view_url){
						window.location.href = res.data.item.click.we_app_web_view_url;
					}
					// this.$api.msg(res.info.status_err);
				}).catch(err => {});
			},
			open_web(action){
				window.location.href = action.params.url;
			}
		},
		computed:{
			iconWidth(){
				return 'width:'+100/this.itemData.count+'%';
			},
			iconSize(){
				return 'width:'+this.itemData.icon_width+'px;height:'+this.itemData.icon_width+'px';
			},
			imageWidth(){
				return 'width:'+80/this.itemData.count+'%';
			},
		}
	}
</script>

<style lang="scss">

/* 分类 */
// .cate-section {
// 	display: flex;
// 	// justify-content: space-around;
// 	justify-content: flex-start;
// 	align-items: center;
// 	flex-wrap:wrap;
// 	padding: 30upx 22upx; 
// 	background: #fff;
// 	.cate-item {
// 		display: flex;
// 		flex-direction: column;
// 		align-items: center;
// 		font-size: $font-sm + 2upx;
// 		color: $font-color-dark;
// 		margin: 20px 0px;
// 		justify-content: center;
// 	}
// 	/* 原图标颜色太深,不想改图了,所以加了透明度 */
// 	image {
// 		width: 88upx;
// 		height: 88upx;
// 		margin-bottom: 14upx;
// 		// border-radius: 50%;
// 		// opacity: .7;
// 		// box-shadow: 4upx 4upx 20upx rgba(250, 67, 106, 0.3);
// 	}
// }

.tui-product-category {
	background: #fff;
	padding: 80rpx 20rpx 30rpx 20rpx;
	box-sizing: border-box;
	display: flex;
	align-items: center;
	justify-content: flex-start;
	// justify-content: space-between;
	flex-wrap: wrap;
	font-size: 24rpx;
	color: #555;
	margin: 10px 0px 20px;
}

.tui-category-item {
	width: 20%;
	// height: 118rpx;
	display: flex;
	align-items: center;
	justify-content: space-between;
	flex-direction: column;
	padding-top: 30rpx;
	margin: 5px 0px;
}

.tui-category-img {
	// height: 80rpx;
	width: 50%;
	display: block;
	margin: 0px 0px;
	margin-bottom: 20rpx;
}

.tui-category-name {
	line-height: 24rpx;
}
</style>
