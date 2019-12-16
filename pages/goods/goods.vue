<template>
	<view class="container">
		<!--header-->
		<view class="tui-header-box" :style="{height:height+'px',background:'rgba(255,255,255,'+opcity+')'}">
			<view class="tui-header" :style="{paddingTop:top+'px', opacity:opcity}">
				商品详情
			</view>
			<view class="tui-header-icon" :style="{marginTop:top+'px'}">
				<view class="tui-icon tui-icon-arrowleft tui-icon-back" :style="{color:opcity>=1?'#000':'#fff',background:'rgba(0, 0, 0,'+iconOpcity+')'}"
				 @tap="back"></view>
				<view class="tui-icon tui-icon-more-fill  tui-icon-ml" :style="{color:opcity>=1?'#000':'#fff',background:'rgba(0, 0, 0,'+iconOpcity+')',fontSize:'20px'}"
				 @tap.stop="openMenu"></view>
				<tui-badge type="red" size="small">5</tui-badge>
			</view>
		</view>
		<!--header-->

		<!--banner-->
		<view class="tui-banner-swiper" v-if="!video">
			<swiper :autoplay="true" :interval="5000" :duration="150" :circular="true" :style="{height:scrollH + 'px'}" @change="bannerChange">
				<block v-for="(item,index) in goods.goods.picList" :key="index">
					<swiper-item :data-index="index" @tap.stop="previewImage">
						<image :src="item" class="tui-slide-image" :style="{height:scrollH+'px'}" />
					</swiper-item>
				</block>
			</swiper>
			<tui-tag type="translucent" shape="circleLeft" size="small">{{bannerIndex+1}}/{{goods.goods.picList.length}}</tui-tag>
		</view>
		
		<view v-if="video">
			<video id="tui-video" :src="goods.videos.url" :danmu-list="danmuList" enable-danmu danmu-btn controls
			 autoplay objectFit="fill" :custom-cache="false"></video>
		</view>

		<!--banner-->

		<view class="tui-pro-detail">
			<view class="tui-product-title tui-border-radius">
				<view class="tui-pro-pricebox tui-padding">
					<view class="tui-pro-price">
						<view>￥<text class="tui-price">{{goods.price.price}}</text></view>
						<tui-tag size="small" :plain="true" type="high-green" shape="circle">{{goods.goods.user_type_name}}</tui-tag>
					</view>
					<view class="tui-collection tui-size" @tap="toFavorite()">
						<view class="tui-icon tui-icon-collection" :class="['tui-icon-'+(favorite?'like-fill':'like')]" :style="{color:favorite?'#ff201f':'#333',fontSize:'20px'}"></view>
						<view class="tui-scale" :class="[favorite?'tui-icon-red':'']">收藏</view>
					</view>
				</view>
				<view class="tui-original-price tui-gray">
					价格
					<text class="tui-line-through">￥{{goods.price.buy_price}}</text>
				</view>
				<view class="tui-pro-titbox">
					<view class="tui-pro-title">{{goods.goods.title}}</view>
					<button open-type="share" class="tui-share-btn tui-share-position">
						<tui-tag type="gray" tui-tag-class="tui-tag-share tui-size" shape="circleLeft" size="small">
							<view class="tui-icon tui-icon-partake" style="color:#999;font-size:15px"></view>
							<!-- <tui-icon name="partake" color="#999" size="15"></tui-icon> -->
							<text class="tui-share-text tui-gray">分享</text>
						</tui-tag>
					</button>
				</view>
				<view class="tui-padding">
					<view class="tui-sub-title tui-size tui-gray">{{goods.goods.comment}}</view>
					<view class="tui-sale-info tui-size tui-gray">
						<view>快递：0.00</view>
						<view>月销{{goods.goods.volume_str}}</view>
						<view v-if="goods.click.share_commission>0">分享赚:{{goods.click.share_commission}}</view>
					</view>
				</view>
			</view>

			<view class="tui-discount-box tui-radius-all tui-mtop">
				<view class="tui-list-cell" @tap="buy">
					<view class="tui-bold tui-cell-title">领券</view>
					<view class="tui-tag-coupon-box">
						<tui-tag size="small" type="red" shape="circle" tui-tag-class="tui-tag-coupon">{{goods.coupon.coupon_money}}元券</tui-tag>
					</view>
					<tui-icon name="more-fill" :size="20" class="tui-right tui-top40" color="#666"></tui-icon>
				</view>

				<!-- <view class="tui-list-cell tui-last" @tap="showPopup">
					<view class="tui-bold tui-cell-title">促销</view>
					<view>
						<view class="tui-promotion-box">
							<tui-tag size="small" type="red" :plain="true" tui-tag-class="tui-inline-block">多买优惠</tui-tag>
							<text>满1件，立减最低1件商品价格，包邮（限中国内地）</text>
						</view>
						<view class="tui-promotion-box">
							<tui-tag size="small" type="red" :plain="true" tui-tag-class="tui-inline-block">满额返券</tui-tag>
							<text>满2件，立减最低2件商品价格，包邮（限中国内地）</text>
						</view>
						<view class="tui-promotion-box">
							<tui-tag size="small" type="red" :plain="true" tui-tag-class="tui-inline-block">特别赠品</tui-tag>
							<text>满3件，立减最低3件商品价格，包邮（限中国内地）</text>
						</view>
					</view>
					<tui-icon name="more-fill" :size="20" class="tui-right tui-top40" color="#666"></tui-icon>
				</view> -->

			</view>

			<!-- <view class="tui-basic-info tui-mtop tui-radius-all">
				<view class="tui-list-cell" @tap="showPopup">
					<view class="tui-bold tui-cell-title">已选</view>
					<view class="tui-selected-box">个性水滴耳环【A2】,1个，可选服务</view>
					<tui-icon name="more-fill" :size="20" class="tui-right" color="#666"></tui-icon>
				</view>
				<view class="tui-list-cell" @tap="showPopup">
					<view class="tui-bold tui-cell-title">送至</view>
					<view class="tui-addr-box">
						<view class="tui-addr-item">北京朝阳区三环到四环之间</view>
						<view class="tui-addr-item">今日23:59前完成下单，预计6月28日23:30前发货，7月1日24:00前送达</view>
					</view>
					<tui-icon name="more-fill" :size="20" class="tui-right" color="#666"></tui-icon>
				</view>
				<view class="tui-list-cell tui-last">
					<view class="tui-bold tui-cell-title">运费</view>
					<view class="tui-selected-box">在线支付免运费</view>
				</view>
				<view class="tui-guarantee">
					<view class="tui-guarantee-item">
						<tui-icon name="circle-selected" :size="14" color="#999"></tui-icon>
						<text class="tui-pl">可配送海外</text>
					</view>
					<view class="tui-guarantee-item">
						<tui-icon name="circle-selected" :size="14" color="#999"></tui-icon>
						<text class="tui-pl">店铺发货&售后</text>
					</view>
					<view class="tui-guarantee-item">
						<tui-icon name="circle-selected" :size="14" color="#999"></tui-icon>
						<text class="tui-pl">7天无理由退货</text>
					</view>
					<view class="tui-guarantee-item">
						<tui-icon name="circle-selected" :size="14" color="#999"></tui-icon>
						<text class="tui-pl">闪电退款</text>
					</view>
					<view class="tui-guarantee-item">
						<tui-icon name="circle-selected" :size="14" color="#999"></tui-icon>
						<text class="tui-pl">极速审核</text>
					</view>
				</view>
			</view> -->

			<!-- <view class="tui-cmt-box tui-mtop tui-radius-all">
				<view class="tui-list-cell tui-last tui-between">
					<view class="tui-bold tui-cell-title">评价</view>
					<view @tap="common">
						<text class="tui-cmt-all">查看全部</text>
						<view class="tui-icon tui-icon-more-fill" style="color:#ff201f; font-size: 20px;"></view>
					</view>
				</view>

				<view class="tui-cmt-content tui-padding">
					<view class="tui-cmt-user">
						<image src="../../../static/images/news/avatar_2.jpg" class="tui-acatar"></image>
						<view>z***9</view>
					</view>
					<view class="tui-cmt">物流很快，很适合我的风格❤</view>
					<view class="tui-attr">颜色：叠层钛钢流苏耳环（A74）</view>
				</view>

				<view class="tui-cmt-btn">
					<tui-tag type="black" :plain="true" tui-tag-class="tui-tag-cmt" @tap="common">查看全部评价</tui-tag>
				</view>
			</view> -->

			<view class="tui-nomore-box">
				<tui-nomore text="宝贝详情" :visible="true" bgcolor="#f7f7f7"></tui-nomore>
			</view>
			<view class="tui-product-img tui-radius-all">
				<image :src="item" 
				mode="widthFix"
				v-for="(item,index) in goods.goods.images" :key="index"
				></image>
			</view>
			<tui-nomore text="已经到最底了" :visible="true" bgcolor="#f7f7f7"></tui-nomore>
			<view class="tui-safearea-bottom"></view>
		</view>

		<!--底部操作栏-->
		<view class="tui-operation">
			<view class="tui-operation-left tui-col-5">
				<view @tap="goHome" class="tui-operation-item" hover-class="opcity" :hover-stay-time="150">
					<tui-icon name="shop" :size="22" color='#333'></tui-icon>
					<view class="tui-operation-text tui-scale-small">首页</view>
				</view>
				<view @tap="toFavorite" class="tui-operation-item" hover-class="opcity" :hover-stay-time="150">
					<view class="tui-icon tui-icon-collection" :class="['tui-icon-'+(favorite?'like-fill':'like')]" :style="{color:favorite?'#ff201f':'#333',fontSize:'20px'}"></view>
					<view class="tui-operation-text tui-scale-small">收藏</view>
				</view>
				<!-- <view class="tui-operation-item" hover-class="opcity" :hover-stay-time="150">
					<tui-icon name="cart" :size="22" color='#333'></tui-icon>
					<view class="tui-operation-text tui-scale-small">购物车</view>
					<tui-badge type="danger" size="small">9</tui-badge>
				</view> -->
			</view>
			<view class="tui-operation-right tui-right-flex tui-col-7 tui-btnbox-4">
				<view class="tui-flex-1">
					<tui-button type="danger" shape="circle" size="mini" @click="showToken">口令购买</tui-button>
				</view>
				<view class="tui-flex-1">
					<tui-button type="warning" shape="circle" size="mini" @click="buy">领券购买</tui-button>
				</view>
			</view>
		</view>
		<!--底部操作栏--->

		<!--顶部下拉菜单-->
		<tui-top-dropdown tui-top-dropdown="tui-top-dropdown" bgcolor="rgba(76, 76, 76, 0.95)" :show="menuShow" :height="0"
		 @close="closeMenu">
			<view class="tui-menu-box tui-padding">
				<view class="tui-menu-header" :style="{paddingTop:top+'px'}">
					功能直达
				</view>
				<view class="tui-menu-itembox">
					<block v-for="(item,index) in topMenu" :key="index">
						<view class="tui-menu-item" hover-class="tui-opcity" :hover-stay-time="150" @tap="common">
							<view class="tui-badge-box">
								<tui-icon :name="item.icon" color="#fff" :size="item.size"></tui-icon>
								<tui-badge type="red" tui-badge-class="tui-menu-badge" size="small" v-if="item.badge">{{item.badge}}</tui-badge>
							</view>
							<view class="tui-menu-text">{{item.text}}</view>
						</view>
					</block>
				</view>
				<view class="tui-icon tui-icon-up" style="color: #fff; font-size: 26px;" @tap.stop="closeMenu"></view>
			</view>
		</tui-top-dropdown>
		<!---顶部下拉菜单-->
		
		<tui-modal :show="modalToken" @cancel="hideToken" :custom="true">
			<view class="tui-modal-custom">
				<view class="tui-tips-content">复制口令购买</view>
				<view class="tui-modal-custom-text">复制框内整段文字，打开【手-机-淘-宝】即可领券购买。{{click.tao_token}}</view>
				<view class="tui-modal-custom-btn" @click="copyContent()">{{modelBtnText}}</view>
			</view>
		</tui-modal>
		
		<tui-modal :show="modalAuthorize" @cancel="hideAuthorize" :custom="true">
			<view class="tui-modal-custom">
				<image class="tui-modal-custom-img" src="http://cmsstatic.dataoke.com//wap_new/user/images/dialog/taobao.png"></image>
				<view class="tui-tips-content">请先完成淘宝授权</view>
				<view class="tui-tips-content">淘宝授权后购买商品可以获得返利</view>
				<view class="tui-modal-custom-authorize" @click="toAuthorize()">去授权</view>
				<view class="tui-modal-custom-buy" @click="tobuy()">暂不授权</view>
			</view>
		</tui-modal>
		
	</view>
</template>

<script>
	import tuiIcon from "@/components/icon/icon"
	import tuiTag from "@/components/tag/tag"
	import tuiBadge from "@/components/badge/badge"
	import tuiNomore from "@/components/nomore/nomore"
	import tuiButton from "@/components/button/button"
	import tuiTopDropdown from "@/components/top-dropdown/top-dropdown"
	import tuiBottomPopup from "@/components/bottom-popup/bottom-popup"
	import tuiNumberbox from "@/components/numberbox/numberbox"
	import tuiModal from "@/components/modal/modal"
	
	export default {
		components: {
			tuiIcon,
			tuiTag,
			tuiBadge,
			tuiNomore,
			tuiButton,
			tuiTopDropdown,
			tuiBottomPopup,
			tuiNumberbox,
			tuiModal,
		},
		data() {
			return {
				id:'',
				goods:{},
				click:{},
				favorite: false,
				modalToken: false,
				modelBtnText:'一键复制',
				
				modalAuthorize: false,
				video:false,
				
				height: 64, //header高度
				top: 0, //标题图标距离顶部距离
				scrollH: 0, //滚动总高度
				opcity: 0,
				iconOpcity: 0.5,
				bannerIndex: 0,
				topMenu: [{
					icon: "message",
					text: "消息",
					size: 26,
					badge: 3
				}, {
					icon: "home",
					text: "首页",
					size: 23,
					badge: 0
				}, {
					icon: "people",
					text: "我的",
					size: 26,
					badge: 0
				}, {
					icon: "cart",
					text: "购物车",
					size: 23,
					badge: 2
				}, {
					icon: "kefu",
					text: "客服小蜜",
					size: 26,
					badge: 0
				}, {
					icon: "feedback",
					text: "我要反馈",
					size: 23,
					badge: 0
				}, {
					icon: "share",
					text: "分享",
					size: 26,
					badge: 0
				}],
				menuShow: false,
				popupShow: false,
				value: 1,
				danmuList: [{
						text: '',
						color: '#ff0000',
						time: 3
					}
				],
			}
		},
		onLoad: function(options) {
			let obj = {};
			// #ifdef MP-WEIXIN
			obj = wx.getMenuButtonBoundingClientRect();
			// #endif
			// #ifdef MP-BAIDU
			obj = swan.getMenuButtonBoundingClientRect();
			// #endif
			// #ifdef MP-ALIPAY
			my.hideAddToDesktopMenu();
			// #endif

			uni.getSystemInfo({
				success: (res) => {
					this.width = obj.left || res.windowWidth;
					this.height = obj.top ? (obj.top + obj.height + 8) : (res.statusBarHeight + 44);
					this.top = obj.top ? (obj.top + (obj.height - 32) / 2) : (res.statusBarHeight + 6);
					this.scrollH = res.windowWidth
				}
			})
			//接收传值,id里面放的是标题，因为测试数据并没写id
			let id = options.id;
			// console.log('detail:'+id)
			if(options.video){
				this.video = true;
			}
			if(id){
				this.id = id;
				this.query_detail(id);
				this.pin(id);
			}
		},
		methods: {
			goHome: function() {
				uni.navigateTo({
					url:'/pages/index/index'
				})
			},
			bannerChange: function(e) {
				this.bannerIndex = e.detail.current
			},
			previewImage: function(e) {
				let index = e.currentTarget.dataset.index;
				uni.previewImage({
					current: this.goods.goods.images[index],
					urls: this.goods.goods.images
				})
			},
			back: function() {
				uni.navigateBack()
			},
			openMenu: function() {
				this.menuShow = true
			},
			closeMenu: function() {
				this.menuShow = false
			},
			showPopup: function() {
				this.popupShow = true
			},
			hidePopup: function() {
				this.popupShow = false
			},
			change: function(e) {
				this.value = e.value
			},
			common: function() {
				this.tui.toast("功能开发中~")
			},
			//收藏
			toFavorite(){
				this.$http.post('/cms/member/favorite/pin', {object_type:'goods',object_id:this.id}).then(res => {
					if(res.info.status==0){
						this.favorite = true;
					}else{
						this.favorite = false;
					}
				}).catch(err => {});
			},
			buy(){
				if(!this.click.click_url){
					this.query_click(this.id,1);
				}else{
					if(this.click.authorize_url){
						this.modalAuthorize = true;
					}else{						
						window.location.href = this.click.click_url;
					}
				}
			},
			showToken(){
				if(!this.click.click_url){
					this.query_click(this.id,2);
				}else{
					this.modalToken = true;
				}
			},
			query_detail(id){
				uni.showLoading({
					title: '请稍候...'
				})
				this.$http.post('/cms/goods/view', {num_iid:id}).then(res => {
					if(res.data.item&&res.data.item){
						this.goods = res.data.item;
					}
					uni.hideLoading();
				}).catch(err => {
					uni.hideLoading();
				});
				this.$http.post('/cms/member/favorite/index', {object_type:'goods',object_id:id}).then(res => {
					if(res.data.item&&res.data.item.id){
						this.favorite = true;
					}else{
						this.favorite = false;
					}
				}).catch(err => {});
			},
			query_click(id,goIndex){
				this.$http.post('/cms/goods/click', {num_iid:id}).then(res => {
					if(res.data.click&&res.data.click){
						this.click = res.data.click;
						if(goIndex==1){
							this.buy();
						}
						else if(goIndex==2){
							this.showToken();
						}
					}
				}).catch(err => {});
			},
			pin(id){
				this.$http.post('/cms/member/history/pin', {object_type:'goods',object_id:id}).then(res => {
					
				}).catch(err => {});
			},
			hideToken() {
				this.modalToken= false;
			},
			hideAuthorize(){
				this.modalAuthorize= false;
			},
			copyContent(){
				uni.setClipboardData({ 
				data:'复制框内整段文字，打开【手-机-淘-宝】即可领券购买。'+this.click.tao_token, 
				success: (r=>{
					this.modelBtnText = '复制成功';
					uni.showToast({
						title: '复制成功',
						duration: 2000
					});
				}),
				fail:(r=>{
					this.modelBtnText = '复制失败，请手工复制';
					uni.showToast({
					    title: '复制失败，请手工复制',
					    duration: 2000
					});
				}), complete:(r=>{
					this.modelBtnText = '复制完成';
				})})
			},
			toAuthorize(){
				window.location.href = this.click.authorize_url;
			},
			tobuy(){
				this.modalAuthorize = false;
				window.location.href = this.click.click_url;
			}
		},
		onPageScroll(e) {
			let scroll = e.scrollTop <= 0 ? 0 : e.scrollTop;
			let opcity = scroll / this.scrollH;
			if (this.opcity >= 1 && opcity >= 1) {
				return;
			}
			this.opcity = opcity;
			this.iconOpcity = 0.5 * (1 - opcity < 0 ? 0 : 1 - opcity)
		}
	}
</script>

<style lang="scss">
	/* icon 也可以使用组件*/
	@import "../../static/style/icon.css";

	page {
		background: #f7f7f7;
	}

	.container {
		padding-bottom: 110upx;
	}

	.tui-header-box {
		width: 100%;
		position: fixed;
		left: 0;
		top: 0;
		z-index: 9998;
	}

	.tui-header {
		width: 100%;
		font-size: 18px;
		line-height: 18px;
		font-weight: 500;
		height: 32px;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.tui-header-icon {
		position: fixed;
		top: 0;
		left: 10px;
		display: flex;
		align-items: flex-start;
		justify-content: space-between;
		height: 32px;
		transform: translateZ(0);
		z-index: 99999;
	}



	.tui-header-icon .tui-badge {
		background: #e41f19 !important;
		position: absolute;
		right: -4px;
	}

	.tui-icon-ml {
		margin-left: 20upx;
	}

	.tui-icon {
		border-radius: 16px;
	}


	.tui-icon-back {
		height: 32px !important;
		width: 32px !important;
		display: block !important;
	}

	.tui-header-icon .tui-icon-more-fill {
		height: 20px !important;
		width: 20px !important;
		padding: 6px !important;
		display: block !important;
	}

	.tui-banner-swiper {
		position: relative;
	}

	.tui-banner-swiper .tui-tag-class {
		position: absolute;
		color: #fff;
		bottom: 30upx;
		right: 0;
	}

	.tui-slide-image {
		width: 100%;
		display: block;
	}

	/*顶部菜单*/

	.tui-menu-box {
		box-sizing: border-box;
	}

	.tui-menu-header {
		font-size: 34upx;
		color: #fff;
		height: 32px;
		display: flex;
		align-items: center;
	}

	.tui-top-dropdown {
		z-index: 9999 !important;
	}

	.tui-menu-itembox {
		color: #fff;
		padding: 40upx 10upx 0 10upx;
		box-sizing: border-box;
		display: flex;
		flex-wrap: wrap;
		font-size: 26upx;
	}

	.tui-menu-item {
		width: 22%;
		height: 160upx;
		border-radius: 24upx;
		display: flex;
		align-items: center;
		flex-direction: column;
		justify-content: center;
		background: rgba(0, 0, 0, 0.4);
		margin-right: 4%;
		margin-bottom: 4%;
	}

	.tui-menu-item:nth-of-type(4n) {
		margin-right: 0;
	}

	.tui-badge-box {
		position: relative;
	}

	.tui-badge-box .tui-badge-class {
		position: absolute;
		top: -8px;
		right: -8px;
	}

	.tui-msg-badge {
		top: -10px;
	}

	.tui-icon-up {
		position: relative;
		display: inline-block;
		left: 50%;
		transform: translateX(-50%);
	}

	.tui-menu-text {
		padding-top: 12upx;
	}

	.tui-opcity .tui-menu-text,
	.tui-opcity .tui-badge-box {
		opacity: 0.5;
		transition: opacity 0.2s ease-in-out;
	}

	/*顶部菜单*/

	/*内容 部分*/

	.tui-padding {
		padding: 0 30upx;
		box-sizing: border-box;
	}

	.tui-size {
		font-size: 24upx;
		line-height: 24upx;
	}

	.tui-gray {
		color: #999;
	}

	.tui-icon-red {
		color: #ff201f;
	}

	.tui-border-radius {
		border-bottom-left-radius: 24upx;
		border-bottom-right-radius: 24upx;
		overflow: hidden;
	}

	.tui-radius-all {
		border-radius: 24upx;
		overflow: hidden;
	}

	.tui-mtop {
		margin-top: 26upx;
	}

	.tui-pro-detail {
		box-sizing: border-box;
		color: #333;
	}

	.tui-product-title {
		background: #fff;
		padding: 30upx 0;
	}

	.tui-pro-pricebox {
		display: flex;
		align-items: center;
		justify-content: space-between;
		color: #ff201f;
		font-size: 36upx;
		font-weight: bold;
		line-height: 44upx;
	}

	.tui-pro-price {
		display: flex;
		align-items: center;
	}

	.tui-pro-price .tui-tag-class {
		transform: scale(0.7);
		transform-origin: center center;
		line-height: 24upx;
		font-weight: normal;
	}

	.tui-price {
		font-size: 58upx;
	}

	.tui-original-price {
		font-size: 26upx;
		line-height: 26upx;
		padding: 10upx 30upx;
		box-sizing: border-box;
	}

	.tui-line-through {
		text-decoration: line-through;
	}

	.tui-collection {
		color: #333;
		display: flex;
		align-items: center;
		flex-direction: column;
		justify-content: center;
		height: 44upx;
	}

	.tui-scale {
		transform: scale(0.7);
		transform-origin: center center;
		line-height: 24upx;
		font-weight: normal;
	}

	.tui-icon-collection {
		line-height: 20px !important;
		margin-bottom: 0 !important;

	}

	.tui-pro-titbox {
		font-size: 32upx;
		font-weight: 500;
		position: relative;
		padding: 0 150upx 0 30upx;
		box-sizing: border-box;
	}

	.tui-pro-title {
		padding-top: 20upx;
	}

	.tui-share-btn {
		display: block;
		background: none;
		margin: 0;
		padding: 0;
		border-radius: 0;
	}

	.tui-tag-share {
		display: flex;
		align-items: center;
	}

	.tui-share-position {
		position: absolute;
		right: 0;
		top: 30upx;
	}

	.tui-share-text {
		padding-left: 8upx;
	}

	.tui-sub-title {
		padding: 20upx 0;
	}

	.tui-sale-info {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding-top: 30upx;
	}

	.tui-discount-box {
		background: #fff;
	}

	.tui-list-cell {
		position: relative;
		display: flex;
		align-items: center;
		font-size: 26upx;
		line-height: 26upx;
		padding: 36upx 30upx;
		box-sizing: border-box;
	}

	.tui-right {
		position: absolute;
		right: 30upx;
		top: 30upx;
	}

	.tui-top40 {
		top: 40upx !important;
	}

	.tui-bold {
		font-weight: bold;
	}

	.tui-list-cell::after {
		content: '';
		position: absolute;
		border-bottom: 1upx solid #eaeef1;
		-webkit-transform: scaleY(0.5);
		transform: scaleY(0.5);
		bottom: 0;
		right: 0;
		left: 126upx;
	}

	.tui-last::after {
		border-bottom: 0 !important;
	}

	.tui-tag-coupon-box {
		display: flex;
		align-items: center;
	}

	.tui-tag-coupon-box .tui-tag-class {
		margin-right: 20upx;
	}


	.tui-cell-title {
		width: 66upx;
		padding-right: 30upx;
		flex-shrink: 0;
	}

	.tui-promotion-box {
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		padding: 10upx 0;
		width: 74%;
	}

	.tui-promotion-box .tui-tag-class {
		display: inline-block !important;
		transform: scale(0.8);
		transform-origin: 0 center;
	}

	/* .tui-inline-block {
		display: inline-block !important;
		transform: scale(0.8);
		transform-origin: 0 center;
	} */

	.tui-basic-info {
		background: #fff;
	}

	.tui-addr-box {
		width: 76%;
	}

	.tui-addr-item {
		padding: 10upx;
		line-height: 34upx;
	}

	.tui-guarantee {
		background: #fdfdfd;
		display: flex;
		flex-wrap: wrap;
		padding: 20upx 30upx 30upx 30upx;
		font-size: 24upx;
	}

	.tui-guarantee-item {
		color: #999;
		padding-right: 30upx;
		padding-top: 10upx;
	}

	.tui-pl {
		padding-left: 4upx;
	}

	.tui-cmt-box {
		background: #fff;
	}

	.tui-between {
		justify-content: space-between !important;
	}

	.tui-cmt-all {
		color: #ff201f;
		padding-right: 8upx;
	}

	.tui-cmt-content {
		font-size: 26upx;
	}

	.tui-cmt-user {
		display: flex;
		align-items: center;
	}

	.tui-acatar {
		width: 60upx;
		height: 60upx;
		border-radius: 30upx;
		display: block;
		margin-right: 16upx;
	}

	.tui-cmt {
		padding: 14upx 0;
	}

	.tui-attr {
		font-size: 24upx;
		color: #999;
		padding: 6upx 0;
	}

	.tui-cmt-btn {
		padding: 50upx 0 30upx 0;
		box-sizing: border-box;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.tui-tag-cmt {
		min-width: 130upx;
		padding: 20upx 52upx !important;
		font-size: 26upx !important;
		display: inline-block;
	}

	.tui-nomore-box {
		padding-top: 10upx;
	}

	.tui-product-img {
		transform: translateZ(0);
	}

	.tui-product-img image {
		width: 100%;
		display: block;
	}

	/*底部操作栏*/

	.tui-col-7 {
		width: 58.33333333%;
	}

	.tui-col-5 {
		width: 41.66666667%;
	}

	.tui-operation {
		width: 100%;
		height: 100upx;
		/* box-sizing: border-box; */
		background: rgba(255, 255, 255, 0.98);
		position: fixed;
		display: flex;
		align-items: center;
		justify-content: space-between;
		z-index: 10;
		bottom: 0;
		left: 0;
		padding-bottom: env(safe-area-inset-bottom);
	}

	.tui-safearea-bottom {
		width: 100%;
		height: env(safe-area-inset-bottom);
	}

	.tui-operation::before {
		content: '';
		position: absolute;
		top: 0;
		right: 0;
		left: 0;
		border-top: 1upx solid #eaeef1;
		-webkit-transform: scaleY(0.5);
		transform: scaleY(0.5);
	}

	.tui-operation-left {
		display: flex;
		align-items: center;
	}

	.tui-operation-item {
		flex: 1;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		position: relative;
	}

	.tui-operation-text {
		font-size: 22upx;
		color: #333;
	}

	.tui-opacity {
		opacity: 0.5;
	}

	.tui-scale-small {
		transform: scale(0.9);
		transform-origin: center center;
	}

	.tui-operation-right {
		height: 100upx;
		/* box-sizing: border-box; */
		padding-top: 0;
	}

	.tui-right-flex {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.tui-btnbox-4 .tui-btn-class {
		width: 90% !important;
		display: block !important;
		font-size: 28upx !important;
	}

	.tui-operation .tui-badge-class {
		position: absolute;
		top: -6upx;
		/* #ifdef H5 */
		transform: translateX(50%)
		/* #endif  */
	}

	.tui-flex-1 {
		flex: 1;
	}

	/*底部操作栏*/

	/*底部选择弹层*/

	.tui-popup-class {
		border-top-left-radius: 24upx;
		border-top-right-radius: 24upx;
		padding-bottom: env(safe-area-inset-bottom);
	}

	.tui-popup-box {
		position: relative;
		padding: 30upx 0 100upx 0;
	}

	.tui-popup-btn {
		width: 100%;
		position: absolute;
		left: 0;
		bottom: 0;
	}

	.tui-popup-btn .tui-btn-class {
		width: 90% !important;
		display: block !important;
		font-size: 28upx !important;
	}

	.tui-icon-close {
		position: absolute;
		top: 30upx;
		right: 30upx;
	}

	.tui-product-box {
		display: flex;
		align-items: flex-end;
		font-size: 24upx;
		padding-bottom: 30upx;
	}

	.tui-popup-img {
		height: 200upx;
		width: 200upx;
		border-radius: 24upx;
		display: block;
	}

	.tui-popup-price {
		padding-left: 20upx;
		padding-bottom: 8upx;
	}

	.tui-amount {
		color: #ff201f;
		font-size: 36upx;
	}

	.tui-number {
		font-size: 24upx;
		line-height: 24upx;
		padding-top: 12upx;
		color: #999;
	}

	.tui-popup-scroll {
		height: 600upx;
		font-size: 26upx;
	}

	.tui-scrollview-box {
		padding: 0 30upx 60upx 30upx;
		box-sizing: border-box;
	}

	.tui-attr-title {
		padding: 10upx 0;
		color: #333;
	}

	.tui-attr-box {
		font-size: 0;
		padding: 20upx 0;
	}

	.tui-attr-item {
		max-width: 100%;
		min-width: 200upx;
		height: 64upx;
		display: -webkit-inline-flex;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		background: #f7f7f7;
		padding: 0 26upx;
		box-sizing: border-box;
		border-radius: 32upx;
		margin-right: 20upx;
		margin-bottom: 20upx;
		font-size: 26upx;
	}

	.tui-attr-active {
		background: #fcedea !important;
		color: #e41f19;
		font-weight: bold;
		position: relative;
	}

	.tui-attr-active::after {
		content: "";
		position: absolute;
		border: 1upx solid #e41f19;
		width: 100%;
		height: 100%;
		border-radius: 40upx;
		left: 0;
		top: 0;
	}

	.tui-number-box {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 20upx 0 30upx 0;
		box-sizing: border-box;
	}

	/*底部选择弹层*/
	
	
	.tui-modal-custom {
		text-align: center;
		display: flex;
		flex-direction: column;
		// align-items: center;
	}
	
	.tui-modal-custom-img {
		width: 100upx;
		height: 100upx;
		margin:0 auto;
	}
	
	.tui-tips-content {
		margin-top: 20upx;
		color: #888888;
		font-size: 14px;
	}
	
	.tui-modal-custom-text {
		font-size: 30upx;
		color: #333;
		padding: 20upx 0;
		padding: 20upx 0;
		background: #F1F1F1;
		color: #333;
		font-size: 14px;
		line-height: 24px;
		min-height: 90px;
		max-height: 220px;
		border-radius: 4px;
		overflow: hidden;
	}
	.tui-modal-custom-btn{
		background: -moz-linear-gradient(left,#FE9F69 0,#FB85F7 100%);
		background: -webkit-gradient(linear,left top,left right,color-stop(0,#FE9F69),color-stop(100%,#FB85F7));
		background: -webkit-linear-gradient(left,#FE9F69 0,#FB85F7 100%);
		background: -o-linear-gradient(left,#FE9F69 0,#FB85F7 100%);
		background: -ms-linear-gradient(left,#FE9F69 0,#FB85F7 100%);
		background: linear-gradient(to left,#FE9F69 0,#FB85F7 100%);
		display: block;
		border-radius: 50px;
		line-height: 40px;
		height: 40px;
		text-align: center;
		color: #fff;
		font-size: 16px;
	}
	.tui-modal-custom-authorize{
		// width: 100upx;
		height: 36px;
		line-height: 36px;
		font-size: 14px;
		font-family: PingFangSC-Regular;
		font-weight: 400;
		color: #333;
		margin: 10px auto 0px;
		display: block;
		border-radius: 4px;
		border: 1px solid #ccc;
		background: 0 0;
	}
	.tui-modal-custom-buy{
		// width: 100upx;
		height: 36px;
		line-height: 36px;
		font-size: 14px;
		font-family: PingFangSC-Regular;
		font-weight: 400;
		color: #333;
		margin: 10px auto 0px;
		display: block;
		border-radius: 4px;
		border: 1px solid #ccc;
		background: 0 0;
	}
	
	#tui-video {
		width: 100%;
		height: 440upx;
		object-fit: fill;
	}
</style>
