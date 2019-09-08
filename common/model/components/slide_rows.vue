<template>
	<view class="container" v-if="itemData.type=='video'">
		<!-- 分类推荐楼层 -->
		<view class="f-header m-t">
			<image mode="aspectFit" src="https://img.youdanhui.cn/cms_img/2019-09-07/5d735fc2ea326.png"></image>
			<view class="tit-box">
				<text class="tit">抖券</text>
				<text class="tit2">视频购物专区</text>
			</view>
			<text class="yticon icon-you"></text>
		</view>
		<view class="hot-floor">
			<scroll-view class="floor-list" scroll-x>
				<view class="scoll-wrapper">
					<goods class="floor-item"
						v-for="(item,index) in items" :key="index" 
						:itemData="item" goodsType="video" />
					<view class="more" @tap="navTo('/pages/market/video')">
						<text>查看全部</text>
						<text>More+</text>
					</view>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	import goods from '@/common/model/goods/index';
	
	export default {
		components: {
			goods,
		},
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
		computed: {
			items() {
				return JSON.parse(this.itemData.items_json);
			},
		}
	}
</script>

<style lang="scss">
.container{
	background-color: #FFFFFF;
	margin: 10px 0px;
	padding: 0px 0px 5px 0px;
	.f-header{
		display:flex;
		align-items:center;
		height: 92upx;
		padding: 6upx 30upx 8upx;
		background: #fff;
		image{
			flex-shrink: 0;
			width: 80upx;
			height: 80upx;
			margin-right: 20upx;
		}
		.tit-box{
			flex: 1;
			display: flex;
			flex-direction: column;
		}
		.tit{
			font-size: $font-lg +2upx;
			color: #font-color-dark;
			line-height: 1.3;
		}
		.tit2{
			font-size: $font-sm;
			color: $font-color-light;
		}
		.icon-you{
			font-size: $font-lg +2upx;
			color: $font-color-light;
		}
	}
	
	/* 分类推荐楼层 */
	.hot-floor{
		width: 100%;
		overflow: hidden;
		margin-bottom: 20upx;
		.floor-img{
			width: 100%;
			height: 100%;
		}
		.floor-list{
			white-space: nowrap;
			padding: 20upx;
			padding-right: 50upx;
			border-radius: 6upx;
			margin-left: 30upx;
			background: #fff;
			// box-shadow: 1px 1px 5px rgba(0,0,0,.2);
			position: relative;
			z-index: 1;
			// height:180upx;
		}
		.scoll-wrapper{
			display:flex;
			align-items: flex-start;
		}
		.floor-item{
			width: 180upx;
			height:280upx;
			margin-right: 20upx;
			font-size: $font-sm+2upx;
			color: $font-color-dark;
			line-height: 1.8;
			// image{
			// 	width: 180upx;
			// 	height: 180upx;
			// 	border-radius: 6upx;
			// }
			// .price{
			// 	color: $uni-color-primary;
			// }
		}
		.more{
			display:flex;
			align-items: center;
			justify-content: center;
			flex-direction: column;
			flex-shrink: 0;
			width: 180upx;
			height: 180upx;
			border-radius: 6upx;
			background: #f3f3f3;
			font-size: $font-base;
			color: $font-color-light;
			text:first-child{
				margin-bottom: 4upx;
			}
		}
	}
}
	
</style>
