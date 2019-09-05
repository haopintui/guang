<template>
	<view class="content">
		<wuc-tab :tab-list="navList" @change="changeTab" :tabCur.sync="tabCurrentIndex" tab-class="text-center text-white bg-nav" select-class="text-white"></wuc-tab>
		<view class="list">
			<goods 
				v-for="(item,index) in items" :key="index" 
				:top="index+1"
				:itemData="item" goodsType="zhishu" />
			<uni-load-more :status="loadingType"></uni-load-more>
		</view>
	</view>
</template> 

<script>
	import WucTab from '@/components/wuc-tab/wuc-tab.vue';
	import uniLoadMore from '@/components/uni-load-more/uni-load-more.vue';
	import empty from "@/components/empty";
	import goods from '@/common/model/goods/index';
	
	export default {
		components: {
			uniLoadMore,
			empty,
			WucTab,
			goods
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
				
				this.$http.post('/cms/goods/list', {ipage:this.ipage,cid:cid,sort:'weight'}).then(res => {
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
</style>
