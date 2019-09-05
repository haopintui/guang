<template>
	<view class="container">
		<!-- 小程序头部兼容 -->
		<!-- #ifdef MP -->
		<view class="mp-search-box">
			<input class="ser-input" type="text" value="粘贴商品或宝贝标题,搜索隐藏优惠券" disabled />
		</view>
		<!-- #endif -->
		<component-item v-for="(item, index) in components" :item-data="item" :key="index" ></component-item>
		
		<view class="guess-section">
			<goods v-for="(item, index) in items" :key="index" :item-data="item" goods-type="column" ></goods>
		</view>
	</view>
</template>

<script>
	import componentItem from '@/common/model/components/index';
	import goods from '@/common/model/goods/index';
	
	export default {
		components: {
			componentItem,
			goods
		},
		data() {
			return {
				titleNViewBackground: '',
				swiperCurrent: 0,
				swiperLength: 0,
				carouselList: [],
				goodsList: [],
				components:[],
				items:[],
				query_goods_url:'',
				page:{
					ipage:0,
					hasGoods:1,
				}
			};
		},
		onLoad() {
			this.loadData();
			this.query();
			// this.query_items();
		},
		onReachBottom(){
			this.queryItems();
		},
		methods: {
			/**
			 * 请求静态数据只是为了代码不那么乱
			 * 分次请求未作整合
			 */
			async loadData() {
				let carouselList = await this.$api.json('carouselList');
				this.titleNViewBackground = carouselList[0].background;
				this.swiperLength = carouselList.length;
				this.carouselList = carouselList;
				
				let goodsList = await this.$api.json('goodsList');
				this.goodsList = goodsList || [];
			},
			//轮播图切换修改背景色
			swiperChange(e) {
				const index = e.detail.current;
				this.swiperCurrent = index;
				this.titleNViewBackground = this.carouselList[index].background;
			},
			//详情页
			navToDetailPage(item) {
				//测试数据没有写id，用title代替
				let id = item.title;
				uni.navigateTo({
					url: `/pages/product/product?id=${id}`
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
					console.log(res)
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
				}).catch(err => {});
			},
		},
		// #ifndef MP
		// 标题栏input搜索框点击
		onNavigationBarSearchInputClicked: async function(e) {
			uni.navigateTo({
				url: '/pages/search/search'
			})
		},
		//点击导航栏 buttons 时触发
		onNavigationBarButtonTap(e) {
			const index = e.index;
			if (index === 0) {
				this.$api.msg('点击了扫描');
			} else if (index === 1) {
				// #ifdef APP-PLUS
				const pages = getCurrentPages();
				const page = pages[pages.length - 1];
				const currentWebview = page.$getAppWebview();
				currentWebview.hideTitleNViewButtonRedDot({
					index
				});
				// #endif
				uni.navigateTo({
					url: '/pages/notice/notice'
				})
			}
		}
		// #endif
	}
</script>

<style lang="scss">
/* #ifdef MP */
.mp-search-box{
	position:absolute;
	left: 0;
	top: 30upx;
	z-index: 9999;
	width: 100%;
	padding: 0 80upx;
	.ser-input{
		flex:1;
		height: 56upx;
		line-height: 56upx;
		text-align: center;
		font-size: 28upx;
		color:$font-color-base;
		border-radius: 20px;
		background: rgba(255,255,255,.6);
	}
}

page {
	background: #F6F6F6;
}
.m-t{
	margin-top: 16upx;
}
/* 分类推荐楼层 */
.hot-floor{
	width: 100%;
	overflow: hidden;
	margin-bottom: 20upx;
	.floor-img-box{
		width: 100%;
		height:320upx;
		position:relative;
		&:after{
			content: '';
			position:absolute;
			left: 0;
			top: 0;
			width: 100%;
			height: 100%;
			background: linear-gradient(rgba(255,255,255,.06) 30%, #f8f8f8);
		}
	}
	.floor-img{
		width: 100%;
		height: 100%;
	}
	.floor-list{
		white-space: nowrap;
		padding: 20upx;
		padding-right: 50upx;
		border-radius: 6upx;
		margin-top:-140upx;
		margin-left: 30upx;
		background: #fff;
		box-shadow: 1px 1px 5px rgba(0,0,0,.2);
		position: relative;
		z-index: 1;
	}
	.scoll-wrapper{
		display:flex;
		align-items: flex-start;
	}
	.floor-item{
		width: 180upx;
		margin-right: 20upx;
		font-size: $font-sm+2upx;
		color: $font-color-dark;
		line-height: 1.8;
		image{
			width: 180upx;
			height: 180upx;
			border-radius: 6upx;
		}
		.price{
			color: $uni-color-primary;
		}
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
/* 猜你喜欢 */
.guess-section{
	display:flex;
	flex-wrap:wrap;
	// padding: 0 1vw;
	// background: #fff;
}
</style>
