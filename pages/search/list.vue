<template>
	<view class="container">
		<!--header-->
		<view class="tui-header-box">
			<view class="tui-header" :style="{width:width+'px',height:height+'px'}">
				<view class="tui-back" :style="{marginTop:arrowTop+'px'}" @tap="back">
					<tui-icon name="arrowleft" color="#000"></tui-icon>
				</view>
				<view class="tui-searchbox tui-search-mr" :style="{marginTop:inputTop+'px'}" @tap="search">
					<!-- #ifdef APP-PLUS || MP -->
					<icon type="search" :size='13' color='#999'></icon>
					<!-- #endif -->
					<text class="tui-search-text" v-if="!searchKey">搜索宝贝标题、关键词</text>
					<view class="tui-search-key" v-if="searchKey">
						<view class="tui-key-text">{{searchKey}}</view>
						<tui-icon name="shut" :size='12' color='#fff'></tui-icon>
					</view>
				</view>
			</view>
		</view>
		<!--header-->
		<!--screen-->
		<view class="tui-header-screen" :style="{top:height+'px'}">
			<view class="tui-screen-top">
				<view class="tui-top-item tui-icon-ml" :class="[tabIndex==0?'tui-active tui-bold':'']" data-index="0" @tap="screen">
					<view>{{selectedName}}</view>
					<tui-icon :name="selectH>0?'arrowup':'arrowdown'" :size="14" :color="tabIndex==0?'#e41f19':'#444'" tui-icon-class="tui-ml"></tui-icon>
				</view>
				<view class="tui-top-item" :class="[tabIndex==1?'tui-active tui-bold':'']" @tap="screen" data-index="1">销量</view>
				<view class="tui-top-item" @tap="screen" data-index="2">
					<tui-icon :name="isList?'manage':'listview'" :size="isList?22:18" :bold="isList?false:true" color="#333"></tui-icon>
				</view>
				<view class="tui-top-item tui-icon-ml" @tap="screen" data-index="3">
					<text>筛选</text>
					<tui-icon name="screen" :size="12" color="#333" tui-icon-class="tui-ml" :bold="true"></tui-icon>
				</view>

				<!--下拉选择列表--综合-->
				<view class="tui-dropdownlist" :class="[selectH>0?'tui-dropdownlist-show':'']" :style="{height:px(selectH)}">
					<view class="tui-dropdownlist-item tui-icon-middle" :class="[item.selected?'tui-bold':'']" v-for="(item,index) in dropdownList"
					 :key="index" @tap.stop="dropdownItem" :data-index="index">
						<text class="tui-ml tui-middle">{{item.name}}</text>
						<tui-icon name="check" :size="16" color="#e41f19" :bold="true" v-if="item.selected" tui-icon-class="tui-middle"></tui-icon>
					</view>
				</view>
				<view class="tui-dropdownlist-mask" :class="[selectH>0?'tui-mask-show':'']" @tap.stop="hideDropdownList"></view>
				<!--下拉选择列表--综合-->

			</view>
			<!-- <view class="tui-screen-bottom">
				<block v-for="(item,index) in attrArr" :key="index">
					<view class="tui-bottom-item tui-icon-ml" :class="[item.isActive?'tui-btmItem-active':'',attrIndex==index?'tui-btmItem-tap':'']"
					 :data-index="index" @tap="btnDropChange">
						<view class="tui-bottom-text" :class="[attrIndex==index?'tui-active':'']">{{item.isActive?item.selectedName:item.name}}</view>
						<tui-icon :name="attrIndex==index?'arrowup':'arrowdown'" :size="14" :color="attrIndex==index || item.isActive?'#e41f19':'#444'"
						 tui-icon-class="tui-ml" v-if="item.list.length>0"></tui-icon>
					</view>
				</block>
			</view> -->
		</view>
		<!--screen-->

		<!--list-->
		<view class="tui-product-list" :style="{marginTop:px(dropScreenH+18)}">
			<view :class="isList?'tui-product-container ':'tui-product-container guess-section'">
				<goods 
					v-for="(item,index) in items" :key="index" 
					:top="index+1"
					:itemData="item" :goodsType="isList?'list':''" />
			</view>
		</view>

		<!--list-->

		<!--顶部下拉筛选弹层 属性-->
		<tui-top-dropdown bgcolor="#f7f7f7" :show="dropScreenShow" :paddingbtm="110" :translatey="dropScreenH" @close="btnCloseDrop">
			<scroll-view class="tui-scroll-box" scroll-y :scroll-top="scrollTop">
				<view class="tui-seizeaseat-20"></view>
				<view class="tui-drop-item tui-icon-middle" :class="[item.selected?'tui-bold':'']" v-for="(item,index) in attrData"
				 :key="index" @tap.stop="btnSelected" :data-index="index">
					<tui-icon name="check" :size="16" color="#e41f19" :bold="true" v-if="item.selected" tui-icon-class="tui-middle"></tui-icon>
					<text class="tui-ml tui-middle">{{item.name}}</text>
				</view>
				<view class="tui-seizeaseat-30"></view>
			</scroll-view>
			<view class="tui-drop-btnbox">
				<view class="tui-drop-btn tui-btn-white" hover-class="tui-white-hover" :hover-stay-time="150" @tap="reset">重置</view>
				<view class="tui-drop-btn tui-btn-red" hover-class="tui-red-hover" :hover-stay-time="150" @tap="btnSure">确定</view>
			</view>
		</tui-top-dropdown>
		<!---顶部下拉筛选弹层 属性-->


		<!--左抽屉弹层 筛选 -->
		<tui-drawer mode="right" :visible="drawer" @close="closeDrawer">
			<view class="tui-drawer-box" :style="{paddingTop:height+'px'}">
				<scroll-view class="tui-drawer-scroll" scroll-y :style="{height:drawerH+'px'}">
					<view class="tui-drawer-title">
						<text class="tui-title-bold">价格区间</text>
						<!-- <view class="tui-attr-right">
							<tui-icon name="position-fill" color="#e41f19" :size="14" class="tui-location"></tui-icon>
							<text>北京朝阳区三环到四环之间</text>
						</view> -->
					</view>
					<view class="tui-drawer-content">
						<input v-model.trim="page.price1" placeholder-class="tui-phcolor" class="tui-input" placeholder="最低价" maxlength="11" type='number' />
						<tui-icon name="reduce" color="#333" :size="14"></tui-icon>
						<input v-model.trim="page.price2" placeholder-class="tui-phcolor" class="tui-input" placeholder="最高价" maxlength="11" type='number' />
					</view>

					<!-- <view class="tui-drawer-title">
						<text class="tui-title-bold">全部分类</text>
						<view class="tui-all-box tui-icon-ml">
							<view class="tui-attr-right">全部</view>
							<tui-icon name="arrowdown" :size="14" color="#444" tui-icon-class="tui-ml"></tui-icon>
						</view>
					</view> -->
					<!-- <view class="tui-drawer-content tui-flex-attr">
						<view class="tui-attr-item">
							<view class="tui-attr-ellipsis">男装</view>
						</view>
						<view class="tui-attr-item">
							<view class="tui-attr-ellipsis">女装</view>
						</view>
					</view> -->

					<!-- <view class="tui-drawer-title">
						<text class="tui-title-bold">品牌</text>
						<view class="tui-all-box tui-icon-ml">
							<view class="tui-attr-right tui-active ">花花公子，七匹狼（SEPTWOLVES）</view>
							<tui-icon name="arrowdown" :size="14" color="#444" tui-icon-class="tui-ml"></tui-icon>
						</view>
					</view>
					<view class="tui-drawer-content tui-flex-attr">
						<view class="tui-attr-item tui-btmItem-active">
							<view class="tui-attr-ellipsis">花花公子</view>
						</view>
						<view class="tui-attr-item tui-btmItem-active">
							<view class="tui-attr-ellipsis">七匹狼（SEPTWOLVES）</view>
						</view>
						<view class="tui-attr-item">
							<view class="tui-attr-ellipsis">吉普</view>
						</view>
					</view> -->

					<!-- <view class="tui-drawer-title">
						<text class="tui-title-bold">尺码</text>
						<view class="tui-all-box tui-icon-ml">
							<view class="tui-attr-right">全部</view>
							<tui-icon name="arrowup" :size="14" color="#444" tui-icon-class="tui-ml"></tui-icon>
						</view>
					</view>
					<view class="tui-drawer-content tui-flex-attr">
						<view class="tui-attr-item">
							<view class="tui-attr-ellipsis">27</view>
						</view>
						<view class="tui-attr-item">
							<view class="tui-attr-ellipsis">28</view>
						</view>
						<view class="tui-attr-item">
							<view class="tui-attr-ellipsis">29</view>
						</view>
						<view class="tui-attr-item">
							<view class="tui-attr-ellipsis">30</view>
						</view>
						<view class="tui-attr-item">
							<view class="tui-attr-ellipsis">31</view>
						</view>
						<view class="tui-attr-item">
							<view class="tui-attr-ellipsis">32</view>
						</view>
						<view class="tui-attr-item">
							<view class="tui-attr-ellipsis">33</view>
						</view>
						<view class="tui-attr-item">
							<view class="tui-attr-ellipsis">34</view>
						</view>
						<view class="tui-attr-item">
							<view class="tui-attr-ellipsis">35</view>
						</view>
						<view class="tui-attr-item">
							<view class="tui-attr-ellipsis">36</view>
						</view>
						<view class="tui-attr-item">
							<view class="tui-attr-ellipsis">37</view>
						</view>
						<view class="tui-attr-item">
							<view class="tui-attr-ellipsis">38</view>
						</view>
						<view class="tui-attr-item">
							<view class="tui-attr-ellipsis">39</view>
						</view>
						<view class="tui-attr-item">
							<view class="tui-attr-ellipsis">40</view>
						</view>
						<view class="tui-attr-item">
							<view class="tui-attr-ellipsis">41</view>
						</view>
						<view class="tui-attr-item">
							<view class="tui-attr-ellipsis">42</view>
						</view>
						<view class="tui-attr-item">
							<view class="tui-attr-ellipsis">43</view>
						</view>
						<view class="tui-attr-item">
							<view class="tui-attr-ellipsis">44</view>
						</view>
					</view> -->
					<view class="tui-safearea-bottom"></view>
				</scroll-view>
				<view class="tui-attr-btnbox">
					<view class="tui-attr-safearea">
						<view class="tui-drawer-btn tui-drawerbtn-black" hover-class="tui-white-hover" :hover-stay-time="150" @tap="clearDrawer">重置</view>
						<view class="tui-drawer-btn tui-drawerbtn-primary" hover-class="tui-red-hover" :hover-stay-time="150" @tap="closeDrawer">确定</view>
					</view>
				</view>
			</view>
		</tui-drawer>
		<!--左抽屉弹层 筛选-->

		<!--加载loadding-->
		<tui-loadmore :visible="loadding" :index="3" type="red"></tui-loadmore>
		<tui-nomore :visible="!pullUpOn && isList" bgcolor="#f7f7f7"></tui-nomore>
		<!--加载loadding-->
	</view>
</template>

<script>
	import tuiIcon from "@/components/icon/icon"
	import tuiDrawer from "@/components/drawer/drawer"
	import tuiLoadmore from "@/components/loadmore/loadmore"
	import tuiNomore from "@/components/nomore/nomore"
	import tuiTopDropdown from "@/components/top-dropdown/top-dropdown"
	import goods from '@/common/model/goods/index';
	
	export default {
		components: {
			tuiIcon,
			tuiDrawer,
			tuiLoadmore,
			tuiNomore,
			tuiTopDropdown,
			goods
		},
		data() {
			return {
				searchKey: "", //搜索关键词
				page:{
					ipage:0,
					price1:'',
					price2:'',
				},
				width: 200, //header宽度
				height: 64, //header高度
				inputTop: 0, //搜索框距离顶部距离
				arrowTop: 0, //箭头距离顶部距离
				dropScreenH: 0, //下拉筛选框距顶部距离
				attrData: [],
				attrIndex: -1,
				dropScreenShow: false,
				scrollTop: 0,
				tabIndex: 0, //顶部筛选索引
				isList: false, //是否以列表展示  | 列表或大图
				drawer: false,
				drawerH: 0, //抽屉内部scrollview高度
				selectedName: "综合",
				selectH: 0,
				dropdownList: [{
					name: "综合",
					selected: true
				}, {
					name: "价格升序",
					selected: false,
				}],
				attrArr: [{
					name: "新品",
					selectedName: "新品",
					isActive: false,
					list: []
				}, {
					name: "品牌",
					selectedName: "品牌",
					isActive: false,
					list: [{
						name: "trendsetter",
						selected: false
					}, {
						name: "维肯（Viken）",
						selected: false
					}, {
						name: "AORO",
						selected: false
					}, {
						name: "苏发",
						selected: false
					}, {
						name: "飞花令（FHL）",
						selected: false
					}, {
						name: "叶梦丝",
						selected: false
					}, {
						name: "ITZOOM",
						selected: false
					}, {
						name: "亿魅",
						selected: false
					}, {
						name: "LEIKS",
						selected: false
					}, {
						name: "雷克士",
						selected: false
					}, {
						name: "蕊芬妮",
						selected: false
					}, {
						name: "辉宏达",
						selected: false
					}, {
						name: "英西达",
						selected: false
					}, {
						name: "戴为",
						selected: false
					}, {
						name: "魔风者",
						selected: false
					}, {
						name: "即满",
						selected: false
					}, {
						name: "北比",
						selected: false
					}, {
						name: "娱浪",
						selected: false
					}, {
						name: "搞怪猪",
						selected: false
					}]
				}, {
					name: "类型",
					selectedName: "类型",
					isActive: false,
					list: [{
						name: "线充套装",
						selected: false
					}, {
						name: "单条装",
						selected: false
					}, {
						name: "车载充电器",
						selected: false
					}, {
						name: "PD快充",
						selected: false
					}, {
						name: "数据线转换器",
						selected: false
					}, {
						name: "多条装",
						selected: false
					}, {
						name: "充电插头",
						selected: false
					}, {
						name: "无线充电器",
						selected: false
					}, {
						name: "座式充电器",
						selected: false
					}, {
						name: "万能充",
						selected: false
					}, {
						name: "转换器/转接线",
						selected: false
					}, {
						name: "MFI苹果认证",
						selected: false
					}, {
						name: "转换器",
						selected: false
					}, {
						name: "苹果认证",
						selected: false
					}]
				}, {
					name: "适用手机",
					selectedName: "适用手机",
					isActive: false,
					list: [{
						name: "通用",
						selected: false
					}, {
						name: "vivo",
						selected: false
					}, {
						name: "OPPO",
						selected: false
					}, {
						name: "魅族",
						selected: false
					}, {
						name: "苹果",
						selected: false
					}, {
						name: "华为",
						selected: false
					}, {
						name: "三星",
						selected: false
					}, {
						name: "荣耀",
						selected: false
					}, {
						name: "诺基亚5",
						selected: false
					}, {
						name: "荣耀4",
						selected: false
					}, {
						name: "诺基",
						selected: false
					}, {
						name: "荣耀",
						selected: false
					}, {
						name: "诺基亚2",
						selected: false
					}, {
						name: "荣耀2",
						selected: false
					}, {
						name: "诺基",
						selected: false
					}]
				}],
				items: [],
				loadding: false,
				pullUpOn: true
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
			this.searchKey = options.q || "";
			
			uni.getSystemInfo({
				success: (res) => {
					this.width = obj.left || res.windowWidth;
					this.height = obj.top ? (obj.top + obj.height + 8) : (res.statusBarHeight + 44);
					this.inputTop = obj.top ? (obj.top + (obj.height - 30) / 2) : (res.statusBarHeight + 7);
					this.arrowTop = obj.top ? (obj.top + (obj.height - 32) / 2) : (res.statusBarHeight + 6);
					//略小，避免误差带来的影响
					// this.dropScreenH = this.height * 750 / res.windowWidth + 186;
					this.dropScreenH = this.height * 750 / res.windowWidth + 76;
					this.drawerH = res.windowHeight - uni.upx2px(100) - this.height
				}
			})
			this.queryItems();
		},
		onReachBottom(){
			this.queryItems();
		},
		methods: {
			px(num) {
				return uni.upx2px(num) + "px"
			},
			btnDropChange: function(e) {
				let index = e.currentTarget.dataset.index;
				let arr = JSON.parse(JSON.stringify(this.attrArr[index].list));
				if (arr.length === 0) {
					this.$set(this.attrArr[index], "isActive", !this.attrArr[index].isActive)
				} else {
					this.attrData = arr;
					this.attrIndex = index;
					this.dropScreenShow = true;
					this.$set(this.attrArr[index], "isActive", false);
					this.scrollTop = 1;
					this.$nextTick(() => {
						this.scrollTop = 0
					});
				}
			},
			btnSelected: function(e) {
				let index = e.currentTarget.dataset.index;
				this.$set(this.attrData[index], "selected", !this.attrData[index].selected)
				this.queryItems('tabChange');
			},
			reset() {
				let arr = this.attrData;
				for (let item of arr) {
					item.selected = false;
				}
				this.attrData = arr
			},
			btnCloseDrop() {
				this.scrollTop = 1;
				this.$nextTick(() => {
					this.scrollTop = 0
				});
				this.dropScreenShow = false;
				this.attrIndex = -1
			},
			btnSure: function() {
				let index = this.attrIndex;
				let arr = this.attrData;
				let active = false;
				let attrName = "";
				//这里只是为了展示选中效果,并非实际场景
				for (let item of arr) {
					if (item.selected) {
						active = true;
						attrName += attrName ? ";" + item.name : item.name
					}
				}
				let obj = this.attrArr[index];
				this.btnCloseDrop();
				this.$set(obj, "isActive", active);
				this.$set(obj, "selectedName", attrName);
			},
			showDropdownList: function() {
				this.selectH = 246;
				this.tabIndex = 0;
			},
			hideDropdownList: function() {
				this.selectH = 0
			},
			dropdownItem: function(e) {
				let index = e.currentTarget.dataset.index;
				let arr = this.dropdownList;
				for (let i = 0; i < arr.length; i++) {
					if (i === index) {
						arr[i].selected = true;
					} else {
						arr[i].selected = false;
					}
				}
				this.dropdownList = arr;
				this.selectedName = index == 0 ? '综合' : '价格';
				this.selectH = 0
				
				this.queryItems('tabChange');
			},
			screen: function(e) {
				let index = e.currentTarget.dataset.index;
				if (index == 0) {
					this.showDropdownList();
				} else if (index == 1) {
					this.tabIndex = 1
					this.queryItems('tabChange');
				} else if (index == 2) {
					this.isList = !this.isList
				} else if (index == 3) {
					this.drawer = true
				}
			},
			closeDrawer: function() {
				this.drawer = false;
				this.queryItems('tabChange');
			},
			clearDrawer: function(){
				this.page.price1 = '',
				this.page.price2 = '',
				this.drawer = false;
			},
			back: function() {
				if (this.drawer) {
					this.closeDrawer()
				} else {
					// uni.navigateBack()
					uni.redirectTo({
						url:'/pages/search/search'
					})
				}
			},
			search: function() {
				uni.navigateTo({
					url: '/pages/search/search'
				})
			},
			detail: function() {
				uni.navigateTo({
					url: '../productDetail/productDetail'
				})
			},
			queryItems(source){
				if(source=='tabChange'){
					this.items = [];
					this.page.ipage  = 0;
				}
				
				this.loadding = true;
				
				let sort = '';
				if(this.tabIndex==1){
					sort = 'volume';
				}
				else {
					console.log(this.dropdownList);
					if(this.selectedName=='价格'){
						sort = 'coupon_price';
					}
					else if(this.selectedName=='综合'){
						sort = '';
					}
				}
				
				this.$http.post('/cms/goods/search', {ipage:this.page.ipage,q:this.searchKey,sort:sort,start_price:this.page.price1,end_price:this.page.price2}).then(res => {
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
							this.page.ipage = parseInt(res.data.pager.ipage)+1;
						}
						if(res.data.items.length>=20){							
							this.loadingType = 'more';
						}
					}
					this.loadding = false;
					uni.stopPullDownRefresh()
				}).catch(err => {});
			},
		},
		onPullDownRefresh: function() {
			this.page.ipage = 1;
			this.pullUpOn = true;
			this.loadding = false
			this.queryItems('tabChange');
			
		},
		onReachBottom: function() {
			if (!this.pullUpOn) return;
			this.loadding = true;
			this.queryItems();
		},
	}
</script>

<style>
	page {
		background: #f7f7f7;
	}

	.container {
		padding-bottom: env(safe-area-inset-bottom);
	}

	/* 隐藏scroll-view滚动条*/

	::-webkit-scrollbar {
		width: 0;
		height: 0;
		color: transparent;
	}

	.tui-header-box {
		width: 100%;
		background: #fff;
		position: fixed;
		z-index: 99998;
		left: 0;
		top: 0;
	}

	.tui-header {
		display: flex;
		align-items: flex-start;
	}

	.tui-back {
		margin-left: 8upx;
		height: 32px !important;
		width: 32px !important;
	}

	.tui-searchbox {
		width: 100%;
		height: 30px;
		margin-right: 30upx;
		border-radius: 15px;
		font-size: 12px;
		background: #f7f7f7;
		padding: 3px 10px;
		box-sizing: border-box;
		color: #999;
		display: flex;
		align-items: center;
		overflow: hidden;
	}

	/* #ifdef MP-WEIXIN */
	.tui-search-mr {
		margin-right: 20upx !important;
	}

	/* #endif */
	/* #ifdef MP-BAIDU */
	.tui-search-mr {
		margin-right: 20upx !important;
	}

	/* #endif */

	.tui-search-text {
		padding-left: 16upx;
	}

	.tui-search-key {
		max-width: 80%;
		height: 100%;
		padding: 0 16upx;
		margin-left: 12upx;
		display: flex;
		align-items: center;
		border-radius: 15px;
		background: rgba(0, 0, 0, 0.5);
		color: #fff;
	}

	.tui-key-text {
		box-sizing: border-box;
		padding-right: 12upx;
		font-size: 12px;
		line-height: 12px;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	/*screen*/

	.tui-header-screen {
		width: 100%;
		box-sizing: border-box;
		background: #fff;
		position: fixed;
		z-index: 1000;
	}

	.tui-screen-top,
	.tui-screen-bottom {
		display: flex;
		align-items: center;
		justify-content: space-between;
		font-size: 28upx;
		color: #333;
	}

	.tui-screen-top {
		height: 88upx;
		position: relative;
		background: #fff;
	}

	.tui-top-item {
		height: 28upx;
		line-height: 28upx;
		flex: 1;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.tui-topitem-active {
		color: #e41f19;
	}

	.tui-screen-bottom {
		height: 100upx;
		padding: 0 30upx;
		box-sizing: border-box;
		font-size: 24upx;
		align-items: center;
		overflow: hidden;
	}

	.tui-bottom-text {
		line-height: 24upx;
		max-width: 82%;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.tui-bottom-item {
		flex: 1;
		width: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 0 12upx;
		box-sizing: border-box;
		background: #f7f7f7;
		margin-right: 20upx;
		white-space: nowrap;
		height: 60upx;
		border-radius: 40upx;
	}

	.tui-bottom-item:last-child {
		margin-right: 0;
	}

	.tui-btmItem-active {
		background: #fcedea !important;
		color: #e41f19;
		font-weight: bold;
		position: relative;
	}

	.tui-btmItem-active::after {
		content: "";
		position: absolute;
		border: 1upx solid #e41f19;
		width: 100%;
		height: 100%;
		border-radius: 40upx;
		left: 0;
		top: 0;
	}

	.tui-btmItem-tap {
		position: relative;
		border-bottom-left-radius: 0;
		border-bottom-right-radius: 0;
	}

	.tui-btmItem-tap::after {
		content: "";
		position: absolute;
		width: 100%;
		height: 22upx;
		background: #f7f7f7;
		left: 0;
		top: 58upx;
	}

	.tui-bold {
		font-weight: bold;
	}

	.tui-active {
		color: #e41f19;
	}

	.tui-icon-ml .tui-icon-class {
		margin-left: 6upx;
	}

	.tui-ml {
		margin-left: 6upx;
	}

	.tui-seizeaseat-20 {
		height: 20upx;
	}

	.tui-seizeaseat-30 {
		height: 30upx;
	}

	.tui-icon-middle .tui-icon-class {
		vertical-align: middle;
	}

	.tui-middle {
		vertical-align: middle;
	}

	/*screen*/

	/*顶部下拉选择 属性*/

	.tui-scroll-box {
		width: 100%;
		height: 480upx;
		box-sizing: border-box;
		position: relative;
		z-index: 99;
		color: #fff;
		font-size: 30upx;
		word-break: break-all;
	}

	.tui-drop-item {
		color: #333;
		height: 80upx;
		font-size: 28upx;
		padding: 20upx 40upx 20upx 40upx;
		box-sizing: border-box;
		display: inline-block;
		width: 50%;
	}

	.tui-drop-btnbox {
		width: 100%;
		height: 100upx;
		position: absolute;
		left: 0;
		bottom: 0;
		box-sizing: border-box;
		display: flex;
	}

	.tui-drop-btn {
		width: 50%;
		font-size: 32upx;
		text-align: center;
		height: 100upx;
		line-height: 100upx;
		border: 0;
	}

	.tui-btn-red {
		background: #e41f19;
		color: #fff;
	}

	.tui-red-hover {
		background: #c51a15 !important;
		color: #e5e5e5;
	}

	.tui-btn-white {
		background: #fff;
		color: #333;
	}

	.tui-white-hover {
		background: #e5e5e5;
		color: #2e2e2e;
	}

	/*顶部下拉选择 属性*/

	/*顶部下拉选择 综合*/

	.tui-dropdownlist {
		width: 100%;
		position: absolute;
		background: #fff;
		border-bottom-left-radius: 24upx;
		border-bottom-right-radius: 24upx;
		overflow: hidden;
		box-sizing: border-box;
		padding-top: 10upx;
		padding-bottom: 26upx;
		left: 0;
		top: 88upx;
		visibility: hidden;
		transition: all 0.2s ease-in-out;
		z-index: 999;
	}

	.tui-dropdownlist-show {
		visibility: visible;
	}

	.tui-dropdownlist-mask {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: rgba(0, 0, 0, 0.6);
		z-index: -1;
		transition: all 0.2s ease-in-out;
		opacity: 0;
		visibility: hidden;
	}

	.tui-mask-show {
		opacity: 1;
		visibility: visible;
	}

	.tui-dropdownlist-item {
		color: #333;
		height: 70upx;
		font-size: 28upx;
		padding: 0 40upx;
		box-sizing: border-box;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	/*顶部下拉选择 综合*/

	.tui-drawer-box {
		width: 686upx;
		font-size: 24upx;
		overflow: hidden;
		position: relative;
		padding-bottom: 100upx;
	}

	.tui-drawer-title {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0 30upx;
		box-sizing: border-box;
		height: 80upx;
	}

	.tui-title-bold {
		font-size: 26upx;
		font-weight: bold;
		flex-shrink: 0;
	}

	.tui-location {
		margin-right: 6upx;
	}

	.tui-attr-right {
		width: 70%;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		text-align: right;
	}

	.tui-all-box {
		width: 90%;
		white-space: nowrap;
		display: flex;
		align-items: center;
		justify-content: flex-end;
	}

	.tui-drawer-content {
		padding: 16upx 30upx 30upx 30upx;
		display: flex;
		align-items: center;
		justify-content: space-between;
		box-sizing: border-box;
	}

	.tui-input {
		border: 0;
		height: 64upx;
		border-radius: 32upx;
		width: 45%;
		background: #f7f7f7;
		text-align: center;
		font-size: 24upx;
		color: #333;
	}

	.tui-phcolor {
		text-align: center;
		color: #b2b2b2;
		font-size: 24upx;
	}

	.tui-flex-attr {
		flex-wrap: wrap;
		justify-content: flex-start;
	}

	.tui-attr-item {
		width: 30%;
		height: 64upx;
		background: #f7f7f7;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 0 4upx;
		box-sizing: border-box;
		border-radius: 32upx;
		margin-right: 5%;
		margin-bottom: 5%;
	}

	.tui-attr-ellipsis {
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;
		width: 96%;
		text-align: center;
	}

	.tui-attr-item:nth-of-type(3n) {
		margin-right: 0%;
	}

	.tui-attr-btnbox {
		width: 100%;
		position: absolute;
		left: 0;
		bottom: 0;
		box-sizing: border-box;
		padding: 0 30upx;
		background: #fff;
	}

	.tui-attr-safearea {
		height: 100upx;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding-bottom: env(safe-area-inset-bottom);
	}

	.tui-safearea-bottom {
		width: 100%;
		height: env(safe-area-inset-bottom);
	}

	.tui-attr-btnbox::before {
		content: '';
		position: absolute;
		top: 0;
		right: 0;
		left: 0;
		border-top: 1upx solid #eaeef1;
		-webkit-transform: scaleY(0.5);
		transform: scaleY(0.5);
	}

	.tui-drawer-btn {
		width: 47%;
		text-align: center;
		height: 60upx;
		border-radius: 30upx;
		flex-shrink: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		box-sizing: border-box;
	}

	.tui-drawerbtn-black {
		border: 1upx solid #555;
	}

	.tui-drawerbtn-primary {
		background: #e41f19;
		color: #fff;
	}

	/* 商品列表*/

	.tui-product-list {
		display: flex;
		justify-content: space-between;
		flex-direction: row;
		flex-wrap: wrap;
		box-sizing: border-box;
	}

	.tui-product-container {
		flex: 1;
		margin-right: 10upx;
	}

	.tui-product-container:last-child {
		margin-right: 0;
	}
	
	.guess-section{
		display:flex;
		flex-wrap:wrap;
	}

	.tui-pro-item {
		width: 100%;
		margin-bottom: 10upx;
		background: #fff;
		box-sizing: border-box;
		border-radius: 12upx;
		overflow: hidden;
		transition: all 0.15s ease-in-out;
	}

	.tui-flex-list {
		display: flex;
		margin-bottom: 1upx !important;
	}

	.tui-pro-img {
		width: 100%;
		display: block;
	}

	.tui-proimg-list {
		width: 260upx;
		height: 260upx;
		flex-shrink: 0;
		border-radius: 12upx;
	}

	.tui-pro-content {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		box-sizing: border-box;
		padding: 20upx;
	}

	.tui-pro-tit {
		color: #2e2e2e;
		font-size: 26upx;
		word-break: break-all;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
	}

	.tui-pro-price {
		padding-top: 18upx;
	}

	.tui-sale-price {
		font-size: 34upx;
		font-weight: 500;
		color: #e41f19;
	}

	.tui-factory-price {
		font-size: 24upx;
		color: #a0a0a0;
		text-decoration: line-through;
		padding-left: 12upx;
	}

	.tui-pro-pay {
		padding-top: 10upx;
		font-size: 24upx;
		color: #656565;
	}

	/* 商品列表*/
</style>
