<template>
	<view class="tui-header-banner">
		<view class="tui-hot-search">
			<view>热搜</view>
			<view class="tui-hot-tag" @tap="navTo('/pages/search/list?q=面膜')">面膜</view>
			<view class="tui-hot-tag" @tap="navTo('/pages/search/list?q=沐浴露')">沐浴露</view>
			<view class="tui-hot-tag" @tap="navTo('/pages/search/list?q=零食')">零食</view>
			<view class="tui-hot-tag" @tap="navTo('/pages/search/list?q=抽纸')">抽纸</view>
		</view>
		<view class="tui-banner-bg">
			<view class="tui-primary-bg tui-route-left"></view>
			<view class="tui-primary-bg tui-route-right"></view>
			<!--banner-->
			<view class="tui-banner-box">
				<swiper :indicator-dots="true" :autoplay="true" :interval="5000" :duration="150" class="tui-banner-swiper"
				 :circular="true" indicator-color="rgba(255, 255, 255, 0.8)" indicator-active-color="#fff">
					<swiper-item v-for="(item, index) in itemData.items" :key="index" @tap.stop="navAction(item)">
						<image :src="item.pic_url" class="tui-slide-image" mode="scaleToFill" />
					</swiper-item>
				</swiper>
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
				swiperCurrent: 0,
				swiperLength: 0,
			}
		},
		methods: {
			//轮播图切换修改背景色
			swiperChange(e) {
				const index = e.detail.current;
				this.swiperCurrent = index;
			},
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
		}
	}
</script>

<style lang="scss">
.tui-header-banner {
	padding-top: 100rpx;
	box-sizing: border-box;
	background: #e41f19;
}

.tui-hot-search {
	color: #fff;
	font-size: 24rpx;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 20rpx;
	box-sizing: border-box;
	position: relative;
	z-index: 2;
}

.tui-hot-tag {
	background: rgba(255, 255, 255, 0.15);
	padding: 10rpx 24rpx;
	border-radius: 30rpx;
	display: flex;
	align-items: center;
	justify-content: center;
	line-height: 24rpx;
	/* margin-left: 20rpx; */
}

.tui-banner-bg {
	display: flex;
	height: 180rpx;
	background: #e41f19;
	position: relative;
}

.tui-primary-bg {
	width: 50%;
	display: inline-block;
	height: 224rpx;
	border: 1px solid transparent;
	position: relative;
	z-index: 1;
	background: #e41f19;
}

.tui-route-left {
	transform: skewY(8deg);
}

.tui-route-right {
	transform: skewY(-8deg);
}

.tui-banner-box {
	width: 100%;
	padding: 0 20rpx;
	box-sizing: border-box;
	position: absolute;
	/* overflow: hidden; */
	z-index: 99;
	bottom: -80rpx;
	left: 0;
}

.tui-banner-swiper {
	width: 100%;
	height: 240rpx;
	border-radius: 12rpx;
	overflow: hidden;
	transform: translateY(0);
}

.tui-slide-image {
	width: 100%;
	height: 240rpx;
	display: block;
}

/* #ifdef APP-PLUS || MP */
.tui-banner-swiper .wx-swiper-dot {
	width: 8rpx;
	height: 8rpx;
	display: inline-flex;
	background: none;
	justify-content: space-between;
}

.tui-banner-swiper .wx-swiper-dot::before {
	content: '';
	flex-grow: 1;
	background: rgba(255, 255, 255, 0.8);
	border-radius: 16rpx;
	overflow: hidden;
}

.tui-banner-swiper .wx-swiper-dot-active::before {
	background: #fff;
}

.tui-banner-swiper .wx-swiper-dot.wx-swiper-dot-active {
	width: 16rpx;
}

/* #endif */

/* #ifdef H5 */
>>>.tui-banner-swiper .uni-swiper-dot {
	width: 8rpx;
	height: 8rpx;
	display: inline-flex;
	background: none;
	justify-content: space-between;
}

>>>.tui-banner-swiper .uni-swiper-dot::before {
	content: '';
	flex-grow: 1;
	background: rgba(255, 255, 255, 0.8);
	border-radius: 16rpx;
	overflow: hidden;
}

>>>.tui-banner-swiper .uni-swiper-dot-active::before {
	background: #fff;
}

>>>.tui-banner-swiper .uni-swiper-dot.uni-swiper-dot-active {
	width: 16rpx;
}

/* #endif */
	
</style>
