<template>
	<view class="content">
		<view class="user_signin_header">
			<view class="sign_box">
				<view class="sign_in_btn text-center" @click="checkin">
					<view class="btn_tip">
						<view class="sign_in">签到</view>
					</view>
				</view>
			</view>
		</view>
		<view class="recommend">
			<span><img src="https://cmsstatic.dataoke.com//wap_new/user/images/icon/change-money-icon-left.svg?v=201908281814" alt=""></span>
			<span class="recommend_info text-center">为您推荐</span>
			<span><img src="https://cmsstatic.dataoke.com//wap_new/user/images/icon/change-money-icon-right.svg?v=201908281814" alt=""></span>
		</view>
		<view class="guess-section">
			<goods 
			v-for="(item, index) in items" :key="index"
			:itemData="item" goodsType="colume" ></goods>
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
				
				this.$http.post('/cms/goods/list', {ipage:0}).then(res => {
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
			checkin(){
				this.$http.post('/cms/member/member/check_in', {}).then(res => {
					this.$api.msg(res.info.status_err);
				}).catch(err => {});
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
.user_signin_header {
	box-sizing: border-box;
	width: 100%;
	// max-width: 750px;
	margin: auto;
	background: url(https://img.youdanhui.cn/cms_img/2019-08-29/5d6786109d287.png) center no-repeat;
	background-size: 100% 100%;
	padding: 100upx 10px 50px;
	.sign_box{
		.sign_in_btn {
			width: 116px;
			height: 116px;
			background: rgba(255,255,255,.3);
			border-radius: 50%;
			margin: 0 auto 10px;
			position: relative;
			z-index: 1;
			zoom: 1;
			.btn_tip {
				position: absolute;
				z-index: 1;
				zoom: 1;
				left: 0;
				top: 0;
				right: 0;
				bottom: 0;
				width: 100px;
				height: 100px;
				background: linear-gradient(180deg,#fff0d2 0,#f9dba0 100%);
				border-radius: 50%;
				margin: auto;
				display: flex;
				justify-content: center;
				flex-direction: column;
				.sign_in {
					font-size: 22px;
					font-family: PingFangSC-Medium;
					font-weight: 500;
					color: #35292b;
					line-height: 30px;
					display: block;
					text-align: center;
				}
			}
		}
	}
}
/* 商品列表 */
.goods-list{
	display:flex;
	flex-direction: column;
	// padding: 0 30upx;
	// background: #fff;
}
.guess-section{
	display:flex;
	flex-wrap:wrap;
	padding: 0 30upx;
	// background: #fff;
}
.recommend{
	margin: 20px auto 0;
	width: 140px;
	height: 22px;
	font-size: 16px;
	font-family: PingFangSC-Medium;
	font-weight: 500;
	color: #333;
	line-height: 22px;
	display: flex;
	justify-content: space-around;
}
</style>
