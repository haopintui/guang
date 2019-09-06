<template>
	<!--tabbar-->
	<view class="tui-tabbar">
		<block v-for="(item,index) in items" :key="index">
			<view class="tui-tabbar-item" :class="[menusIndex==index?'tui-item-active':'']" :data-index="index" @tap="tabbarSwitch(item)">
				<view :class="[index==0?'tui-ptop-4':'']">
<!-- 					<tui-icon :name="current==index?item.icon+'-fill':item.icon" :color="current==index?'#E41F19':'#666'" :size="item.size"></tui-icon>
 -->					<image class="icon" :src="menusIndex==index?item.images_active:item.images"></image>
				</view>
				<view class="tui-scale">{{item.text}}</view>
			</view>
		</block>
	</view>
	<!--tabbar-->
</template>

<script>
export default {
	props:{
		menusIndex:{
			default:0
		}
	},
	data(){
		return {
			items: [
				{icon: "home",text: "首页",size: 21,
					pages:'/pages/index/index',
					"images":'https://img.alicdn.com/imgextra/i1/2053469401/O1CN01IDoKYf2JJhy7Pld17_!!2053469401.png',
					"images_active":'https://img.alicdn.com/imgextra/i1/2053469401/O1CN01tx7Piu2JJhy5Id1tp_!!2053469401.png',
				}, 
				{icon: "category",text: "分类",size: 24,
					pages:'/pages/category/category',
					"images":'https://img.alicdn.com/imgextra/i4/2053469401/O1CN01Ts9O8t2JJhy5zKLZn_!!2053469401.png',
					"images_active":'https://img.alicdn.com/imgextra/i1/2053469401/O1CN01SM4j382JJhy5Id205_!!2053469401.png',
				}, 
				{icon: "cart",text: "九块九",size: 22,
					"images":'https://img.alicdn.com/imgextra/i2/2053469401/O1CN01IoDVRW2JJhy7uYnhS_!!2053469401.png',
					"images_active":'https://img.alicdn.com/imgextra/i4/2053469401/O1CN01zKJ7sE2JJhy4rI1Dl_!!2053469401.png',
					pages:'/pages/market/jiu',
				}, 
				{icon: "people",text: "我的",size: 24,
					pages:'/pages/user/user',
					"images":'https://img.alicdn.com/imgextra/i1/2053469401/O1CN015lCWYO2JJhy8Mlr01_!!2053469401.png',
					"images_active":'https://img.alicdn.com/imgextra/i4/2053469401/O1CN01VrW0OV2JJhy7udA7A_!!2053469401.png',
				},
			],
		}
	},
	methods:{
		tabbarSwitch: function(item) {
			// let index = e.currentTarget.dataset.index;
			// let index = item.index;
			// this.current = index;
			// if (index != this.menusIndex) {
				this.navTo(item.pages);
			// }
		},
		navTo: function(url) {
			uni.navigateTo({
				url: url
			})
		
		},
	}
	
}
</script>

<style lang="scss">
/*tabbar*/
.tui-tabbar {
	width: 100%;
	position: fixed;
	display: flex;
	align-items: center;
	justify-content: space-between;
	z-index: 99999;
	background: #fff;
	height: 100rpx;
	left: 0;
	bottom: 0;
	padding-bottom: env(safe-area-inset-bottom);
}

.tui-safearea-bottom {
	width: 100%;
	height: env(safe-area-inset-bottom);
}

.tui-tabbar::before {
	content: '';
	width: 100%;
	border-top: 1rpx solid #d9d9d9;
	position: absolute;
	top: 0;
	left: 0;
	-webkit-transform: scaleY(0.5);
	transform: scaleY(0.5);
}

.tui-tabbar-item {
	flex: 1;
	width: 25%;
	display: flex;
	align-items: center;
	flex-direction: column;
	justify-content: space-between;
	font-size: 24rpx;
	color: #666;
	height: 80rpx;
	.icon{
		width: 40rpx;
		height: 40rpx;
	}
}

.tui-ptop-4 {
	padding-top: 4rpx;
}

.tui-scale {
	font-weight: bold;
	transform: scale(0.8);
	transform-origin: center 100%;
	line-height: 30rpx;
}

.tui-item-active {
	color: #e41f19 !important;
}
/*tabbar*/

</style>
