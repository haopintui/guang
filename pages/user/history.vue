<template>
	<view class="content">
		<view class="goods-list">
			<goods 
			v-for="(item, index) in items" :key="index"
			:itemData="item.obj" goodsType="history" ></goods>
		</view>
		<uni-load-more :status="loadingType"></uni-load-more>
	</view>
</template>

<script>
	import uniLoadMore from '@/components/uni-load-more/uni-load-more.vue';
	import goods from '@/components/model/goods/index';
	export default {
		components: {
			uniLoadMore,
			goods,
		},
		data() {
			return {
				items: []
			};
		},
		
		onLoad(options){
			// #ifdef H5
			this.headerTop = document.getElementsByTagName('uni-page-head')[0].offsetHeight+'px';
			// #endif
			this.loadData();
		},
		onPageScroll(e){
			//兼容iOS端下拉时顶部漂移
			if(e.scrollTop>=0){
				this.headerPosition = "fixed";
			}else{
				this.headerPosition = "absolute";
			}
		},
		//下拉刷新
		onPullDownRefresh(){
			this.loadData('refresh');
		},
		//加载更多
		onReachBottom(){
			this.loadData();
		},
		methods: {
			//加载商品 ，带下拉刷新和上滑加载
			async loadData(type='add', loading) {
				//没有更多直接返回
				if(type === 'add'){
					if(this.loadingType === 'nomore'){
						return;
					}
					this.loadingType = 'loading';
				}else{
					this.loadingType = 'more'
				}
				if(type === 'refresh'){
					this.items = [];
				}
				
				this.$http.post('/cms/member/history/list', {ipage:0}).then(res => {
					if(res.data.items){
						this.items.push(
						...res.data.items
						);
					}
					//判断是否还有下一页，有是more  没有是nomore(测试数据判断大于20就没有了)
					this.loadingType  = res.data.items.length > 20 ? 'nomore' : 'more';
					if(type === 'refresh'){
						if(loading == 1){
							uni.hideLoading()
						}else{
							uni.stopPullDownRefresh();
						}
					}
				}).catch(err => {});
				
			},
			//详情
			navToDetailPage(item){
				//测试数据没有写id，用title代替
				let id = item.title;
				uni.navigateTo({
					url: `/pages/product/product?id=${id}`
				})
			},
			stopPrevent(){}
		},
	}
</script>

<style lang="scss">
page, .content{
	background: $page-color-base;
}
.content{
	padding-top: 6upx;
}
/* 商品列表 */
.goods-list{
	display:flex;
	flex-direction: column;
	// padding: 0 30upx;
	// background: #fff;
}
</style>
