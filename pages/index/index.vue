<template>
	<view class="container">
		<bottom-menus menus-index="0" />
		<!--header-->
		<view class="tui-header">
			<view class="tui-category" hover-class="opcity" :hover-stay-time="150" @tap="classify">
				<!-- <tui-icon name="manage-fill" color="#fff" :size="22"></tui-icon> -->
				<image class="icon" src="https://img.youdanhui.cn/cms_img/2019-09-06/5d71bf8337cd3.png"></image>
				<view class="tui-category-scale">分类</view>
			</view>
			<view class="tui-rolling-search">
				<!-- #ifdef APP-PLUS || MP -->
				<icon type="search" :size='13' color='#999'></icon>
				<!-- #endif -->
				<!-- #ifdef H5 -->
				<view>
					<tui-icon name="search" :size='16' color='#999'></tui-icon>
				</view>
				<!-- #endif -->
				<swiper vertical autoplay circular interval="8000" class="tui-swiper">
					<swiper-item v-for="(item,index) in hotSearch" :key="index" class="tui-swiper-item" @tap="search">
						<view class="tui-hot-item">{{item}}</view>
					</swiper-item>
				</swiper>
			</view>
		</view>
		<!--header-->
		
		<component-item v-for="(item, index) in components" :item-data="item" :key="index" ></component-item>

		<!-- <view class="tui-product-box tui-pb-20 ">
			<view class="tui-group-name" @tap="more">
				<text>新人专享</text>
				<tui-icon name="arrowright" :size="20" color="#555"></tui-icon>
			</view>
			<view class="tui-activity-box" @tap="detail">
				<image src="https://img.youdanhui.cn/cms_img/2019-09-06/5d71cd57c3c0e.jpg" class="tui-activity-img" mode="widthFix"></image>
				<image src="https://img.youdanhui.cn/cms_img/2019-09-06/5d71cd2b3fc47.jpg" class="tui-activity-img" mode="widthFix"></image>
			</view>
		</view> -->

		<!-- <view class="tui-product-box tui-pb-20 tui-bg-white">
			<view class="tui-group-name" @tap="more">
				<text>新品推荐</text>
				<tui-icon name="arrowright" :size="20" color="#555"></tui-icon>
			</view>
			<view class="tui-new-box">
				<view class="tui-new-item" :class="[index!=0 && index!=1 ?'tui-new-mtop':'']" v-for="(item,index) in newProduct"
				 :key="index" @tap="detail">
					<image :src="'../../../static/images/mall/new/'+(item.type==1?'new':'discount')+'.png'" class="tui-new-label" v-if="item.isLabel"></image>
					<view class="tui-title-box">
						<view class="tui-new-title">{{item.name}}</view>
						<view class="tui-new-price">
							<text class="tui-new-present">￥{{item.present}}</text>
							<text class="tui-new-original">￥{{item.original}}</text>
						</view>
					</view>
					<image :src="'https://img.youdanhui.cn/cms_img/2019-09-06/5d71cd6f2de42.jpg'" class="tui-new-img"></image>
				</view>
			</view>
		</view> -->

		<view class="tui-product-box">
			<view class="tui-group-name">
				<text>热门推荐</text>
			</view>
			<view class="tui-product-list">
				<view class="tui-product-container guess-section">
					<goods v-for="(item, index) in items" :key="index" :item-data="item" goods-type="column" ></goods>
				</view>
			</view>
		</view>

		<!--加载loadding-->
		<tui-loadmore :visible="loadding" :index="3" type="red"></tui-loadmore>
		<!-- <tui-nomore visible="{{!pullUpOn}}"></tui-nomore> -->
		<!--加载loadding-->
		<view class="tui-safearea-bottom"></view>
		<tui-scroll-top :scrollTop="scrollTop"></tui-scroll-top>
	</view>
</template>

<script>
	import tuiIcon from "@/components/icon/icon"
	import tuiTag from "@/components/tag/tag"
	import tuiLoadmore from "@/components/loadmore/loadmore"
	import tuiNomore from "@/components/nomore/nomore"
	import componentItem from '@/common/model/components/index';
	import goods from '@/common/model/goods/index';
	import bottomMenus from '@/common/model/bottom-menus';
	import tuiScrollTop from "@/components/scroll-top/scroll-top"
	
	export default {
		components: {
			tuiIcon,
			tuiTag,
			tuiLoadmore,
			tuiNomore,
			componentItem,
			goods,
			bottomMenus,
			tuiScrollTop,
		},
		data() {
			return {
				ipage:1,
				current: 0,
				scrollTop: 0,
				hotSearch: [
					"休闲零食",
					"自热火锅",
					"小冰箱迷你"
				],
				components:[],
				items:[],
				query_goods_url:'',
				page:{
					ipage:0,
					hasGoods:1,
				},
				loadding: false,
				pullUpOn: true
			}
		},
		onLoad() {
			this.query();
		},
		onReachBottom(){
			this.queryItems();
		},
		methods: {
			tabbarSwitch: function(e) {
				let index = e.currentTarget.dataset.index;
				this.current = index;
				if (index != 0) {
					if (index == 1) {
						this.classify();
					} else {
						this.tui.toast("功能开发中~")
					}
				}
			},
			detail: function() {
				uni.navigateTo({
					url: '../productDetail/productDetail'
				})
			},
			classify: function() {
				uni.navigateTo({
					url: '/pages/category/category'
				})

			},
			more: function(e) {
				let key = e.currentTarget.dataset.key || "";
				uni.navigateTo({
					url: '/pages/search/search?q=' + key
				})

			},
			search: function() {
				uni.navigateTo({
					url: '/pages/search/search'
				})
			},
			queryItems() {
				console.log('url:'+this.query_goods_url);
				if(!this.query_goods_url||this.page.hasGoods==0){
					return;
				}
				this.page.ipage = this.page.ipage+1;
				this.$http.post(this.query_goods_url, {ipage:this.page.ipage}).then(res => {
					if(res.data.items&&res.data.items){
						this.items.push(
						...res.data.items
						);
					}else{
						this.page.hasGoods = 0;
					}
					this.loadding = false
				}).catch(err => {});
			},
			query() {
				this.$http.post('/app/page/home', {page_id:'youdanhui'}).then(res => {
					if(res.data.components&&res.data.components){
						this.components.push(
						...res.data.components
						);
					}
					if(res.data.items&&res.data.items.url){
						this.query_goods_url = res.data.items.url;
						this.queryItems();
					}
					uni.stopPullDownRefresh()
				}).catch(err => {});
			},
		},
		onPullDownRefresh: function() {
			this.ipage = 1;
			this.pullUpOn = true;
			this.loadding = false
		},
		onReachBottom: function() {
			if (!this.pullUpOn) return;
			this.loadding = true;
			this.queryItems();
		},
		onPageScroll(e) {
			this.scrollTop = e.scrollTop
		}
	}
</script>

<style lang="scss">
	page {
		background: #f7f7f7;
	}

	.container {
		padding-bottom: 100rpx;
		color: #333;
	}

	/*tabbar*/
	.tui-safearea-bottom {
		width: 100%;
		height: env(safe-area-inset-bottom);
	}
	/*tabbar*/

	.tui-header {
		width: 100%;
		height: 100rpx;
		padding: 0 30rpx 0 20rpx;
		box-sizing: border-box;
		background: #e41f19;
		display: flex;
		align-items: center;
		justify-content: space-between;
		position: fixed;
		left: 0;
		top: 0;
		/* #ifdef H5 */
		top: 44px;
		/* #endif */
		z-index: 999;
		.icon{
			width: 22rpx;
			height: 22rpx;
		}
	}

	.tui-rolling-search {
		width: 100%;
		height: 60rpx;
		border-radius: 35rpx;
		padding: 0 40rpx 0 30rpx;
		box-sizing: border-box;
		background: #fff;
		display: flex;
		align-items: center;
		flex-wrap: nowrap;
		color: #999;
	}

	.tui-category {
		font-size: 24rpx;
		color: #fff;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		margin: 0;
		margin-right: 22rpx;
		flex-shrink: 0;
	}

	.tui-category-scale {
		transform: scale(0.7);
		line-height: 24rpx;
	}

	.tui-icon-category {
		line-height: 20px !important;
		margin-bottom: 0 !important;
	}

	.tui-swiper {
		font-size: 26rpx;
		height: 60rpx;
		flex: 1;
		padding-left: 12rpx;
	}
	
	

	.tui-swiper-item {
		display: flex;
		align-items: center;
	}

	.tui-hot-item {
		line-height: 26rpx;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.tui-product-box {
		margin-top: 20rpx;
		box-sizing: border-box;
	}

	.tui-pb-20 {
		padding-bottom: 20rpx;
	}

	.tui-bg-white {
		background: #fff;
	}

	.tui-group-name {
		font-size: 32rpx;
		font-weight: bold;
		text-align: center;
		padding: 24rpx 0;
	}

	.tui-activity-box {
		display: flex;
		border-radius: 12rpx;
		overflow: hidden;
	}

	.tui-activity-img {
		width: 50%;
		display: block;
	}

	.tui-new-box {
		display: flex;
		align-items: center;
		justify-content: space-between;
		flex-wrap: wrap;
	}

	.tui-new-item {
		width: 49%;
		height: 200rpx;
		padding: 0 20rpx;
		box-sizing: border-box;
		display: flex;
		align-items: center;
		background: #f5f2f9;
		position: relative;
		border-radius: 12rpx;
	}

	.tui-new-mtop {
		margin-top: 2%;
	}

	.tui-title-box {
		font-size: 24rpx;
	}

	.tui-new-title {
		line-height: 32rpx;
		word-break: break-all;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
	}

	.tui-new-price {
		padding-top: 18rpx;
	}

	.tui-new-present {
		color: #ff201f;
		font-weight: bold;
	}

	.tui-new-original {
		display: inline-block;
		color: #a0a0a0;
		text-decoration: line-through;
		padding-left: 12rpx;
		transform: scale(0.8);
		transform-origin: center center;
	}

	.tui-new-img {
		width: 160rpx;
		height: 160rpx;
		display: block;
		flex-shrink: 0;
	}

	.tui-new-label {
		width: 56rpx;
		height: 56rpx;
		border-top-left-radius: 12rpx;
		position: absolute;
		left: 0;
		top: 0;
	}

	.tui-product-list {
		display: flex;
		justify-content: space-between;
		flex-direction: row;
		flex-wrap: wrap;
		box-sizing: border-box;
	}

	.tui-product-container {
		flex: 1;
		// margin-right:10upx;
	}

	.tui-product-container:last-child {
		margin-right: 0;
	}
	
	.guess-section{
		display:flex;
		flex-wrap:wrap;
	}
</style>
