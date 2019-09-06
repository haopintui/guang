<template>
	<view class="content">
		<bottom-menus menus-index="2" />
		<wuc-tab :tab-list="navList" @change="changeTab" :tabCur.sync="tabCurrentIndex" tab-class="text-center text-white bg-nav" select-class="text-white"></wuc-tab>
		<view class="list">
			<!-- 空白页 -->
			<empty v-if="loadingType === 'noMore' && items.length === 0"></empty>
			<goods 
				v-for="(item,index) in items" :key="index" 
				:top="index+1"
				:itemData="item" goodsType="list" />
			<uni-load-more :status="loadingType"></uni-load-more>
		</view>
	</view>
</template> 

<script>
	import WucTab from '@/components/wuc-tab/wuc-tab.vue';
	import uniLoadMore from '@/components/uni-load-more/uni-load-more.vue';
	import empty from "@/components/empty";
	import goods from '@/common/model/goods/index';
	import bottomMenus from '@/common/model/bottom-menus';
	import tuiScrollTop from "@/components/scroll-top/scroll-top"
	
	export default {
		components: {
			uniLoadMore,
			empty,
			WucTab,
			goods,
			bottomMenus,
			tuiScrollTop,
		},
		data() {
			return {
				tabCurrentIndex: 0,
				navList: [],
				items:[],
				loadingType:'',
				ipage:0,
			};
		},
		onLoad(options){
			this.loadNav();
			/**
			 * 修复app端点击除全部订单外的按钮进入时不加载数据的问题
			 * 替换onLoad下代码即可
			 */
			// console.log(options)
			// if(options.state){				
			// this.tabCurrentIndex = +options.state;
			// }
			// // #ifndef MP
			// this.loadData()
			// // #endif
			// // #ifdef MP
			// if(options.state == 0){
			// 	this.loadData()
			// }
			// // #endif
			
		},
		onReachBottom(){
			this.loadData();
		},
		methods: {
			loadNav(){
				this.$http.post('/app/page/nav', {nav_types:''}).then(res => {
					if(res.data.items&&res.data.items.items){
						this.navList.push(
							...res.data.items.items
						);
						this.loadData();
					}
					
				}).catch(err => {});
			},
			//获取订单列表
			loadData(source){
				//这里是将订单挂载到tab列表下
				let index = this.tabCurrentIndex;
				let navItem = this.navList[index];
				let cid = navItem.cid;
				
				if(source=='tabChange'){
					this.items = [];
					this.ipage  = 0;
				}
				
				this.loadingType = 'loading';
				
				this.$http.post('/cms/goods/list', {ipage:this.ipage,cid:cid,sort:'day_sales'}).then(res => {
					this.loadingType = 'noMore';
					if(res.data.items&&res.data.items){
						if(source=='tabChange'){
							this.items = res.data.items;
						}else{
							this.items.push(
								...res.data.items
							);
						}
						if(res.data.pager&&res.data.pager.ipage){
							this.ipage = parseInt(res.data.pager.ipage)+1;
						}
						if(res.data.items.length>=20){							
							this.loadingType = 'more';
						}
					}
					// this.loaded = true;
				}).catch(err => {});
			}, 
			//swiper 切换
			changeTab(current){
				this.tabCurrentIndex = current;
				this.loadData('tabChange');
			},
			//顶部tab点击
			tabClick(index){
				this.tabCurrentIndex = index;
			}
		},
	}
</script>

<style lang="scss">
	page, .content{
		background: $page-color-base;
		height: 100%;
	}
	
	.swiper-box{
		height: calc(100% - 40px);
	}
	.list-scroll-content{
		height: 100%;
	}
	.floor-list{
		white-space: nowrap;
		padding: 20upx;
		padding-right: 50upx;
		border-radius: 6upx;
		// margin-top:-140upx;
		// margin-left: 30upx;
		background: #fff;
		box-shadow: 1px 1px 5px rgba(0,0,0,.2);
		// position: relative;
		z-index: 1;
	}
	.scoll-wrapper{
		display:flex;
		align-items: flex-start;
	}
	.bg-nav{
	    // background-color: #ffffff;
		background: linear-gradient(to left,#FA4DBE 0,#FBAA58 100%);
		border-bottom-color: transparent;
		font-size: 15px;
	}
	.navbar{
		display: flex;
		height: 40px;
		padding: 0 5px;
		background: #fff;
		box-shadow: 0 1px 5px rgba(0,0,0,.06);
		position: relative;
		z-index: 10;
		background: linear-gradient(to left,#FA4DBE 0,#FBAA58 100%);
		border-bottom-color: transparent;
		.nav-item{
			// width: 100upx;
			// flex: 1;
			display: flex;
			justify-content: center;
			align-items: center;
			height: 100%;
			font-size: 15px;
			// color: $font-color-dark;
			color: #fff;
			position: relative;
			&.current{
				// color: $base-color;
				color: #fff;
				&:after{
					content: '';
					position: absolute;
					left: 50%;
					bottom: 0;
					transform: translateX(-50%);
					width: 44px;
					height: 0;
					border-bottom: 2px solid #fff;
				}
			}
		}
	}

	.uni-swiper-item{
		height: auto;
	}
	.order-item{
		display: flex;
		flex-direction: column;
		padding-left: 30upx;
		background: #fff;
		margin-top: 16upx;
		.i-top{
			display: flex;
			align-items: center;
			// height: 80upx;
			padding-right:30upx;
			font-size: $font-base;
			color: $font-color-dark;
			position: relative;
			.time{
				flex: 1;
			}
			.state{
				color: $base-color;
			}
			.del-btn{
				padding: 10upx 0 10upx 36upx;
				font-size: $font-lg;
				color: $font-color-light;
				position: relative;
				&:after{
					content: '';
					width: 0;
					height: 30upx;
					border-left: 1px solid $border-color-dark;
					position: absolute;
					left: 20upx;
					top: 50%;
					transform: translateY(-50%);
				}
			}
		}
		/* 多条商品 */
		.goods-box{
			height: 160upx;
			padding: 20upx 0;
			white-space: nowrap;
			.goods-item{
				width: 120upx;
				height: 120upx;
				display: inline-block;
				margin-right: 24upx;
			}
			.goods-img{
				display: block;
				width: 100%;
				height: 100%;
			}
		}
		/* 单条商品 */
		.goods-box-single{
			display: flex;
			padding: 20upx 0;
			.goods-img{
				display: block;
				width: 120upx;
				height: 120upx;
			}
			.right{
				flex: 1;
				display: flex;
				flex-direction: column;
				padding: 0 30upx 0 24upx;
				overflow: hidden;
				.title{
					font-size: $font-base + 2upx;
					color: $font-color-dark;
					line-height: 1;
				}
				.attr-box{
					font-size: $font-sm + 2upx;
					color: $font-color-light;
					padding: 10upx 12upx;
				}
				.price{
					font-size: $font-base + 2upx;
					color: $font-color-dark;
					// &:before{
					// 	content: '￥';
					// 	font-size: $font-sm;
					// 	margin: 0 2upx 0 8upx;
					// }
				}
				.memo{
					font-size: $font-sm;
					display: flex;
					justify-content: space-between;
					flex-direction: row;
					.num{
						color: $base-color;
					}
				}
			}
		}
		
		.price-box{
			display: flex;
			justify-content: flex-end;
			align-items: baseline;
			padding: 20upx 30upx;
			font-size: $font-sm + 2upx;
			color: $font-color-light;
			.num{
				margin: 0 8upx;
				color: $font-color-dark;
			}
			.price{
				font-size: $font-lg;
				color: $font-color-dark;
				// &:before{
				// 	content: '￥';
				// 	font-size: $font-sm;
				// 	margin: 0 2upx 0 8upx;
				// }
			}
		}
		.action-box{
			display: flex;
			justify-content: space-between;
			align-items: center;
			// height: 100upx;
			position: relative;
			padding-right: 30upx;
			font-size: 24upx;
			color: #666;
			padding: 10px 0px;
		}
		.action-btn{
			width: 160upx;
			height: 60upx;
			margin: 0;
			margin-left: 24upx;
			padding: 0;
			text-align: center;
			line-height: 60upx;
			font-size: $font-sm + 2upx;
			color: $font-color-dark;
			background: #fff;
			border-radius: 100px;
			&:after{
				border-radius: 100px;
			}
			&.recom{
				background: #fff9f9;
				color: $base-color;
				&:after{
					border-color: #f7bcc8;
				}
			}
		}
	}
</style>
