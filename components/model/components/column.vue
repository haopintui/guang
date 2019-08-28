<template>
	<!-- 订单 -->
	<view class="order-section">
		<view class="order-item"  @click="navTo('/pages/order/order?state=0')" hover-class="common-hover"  :hover-stay-time="50">
			<text class="yticon icon-shouye"></text>
			<text>全部订单</text>
		</view>
		<view class="order-item" @click="navTo('/pages/order/order?state=1')"  hover-class="common-hover" :hover-stay-time="50">
			<text class="yticon icon-daifukuan"></text>
			<text>待付款</text>
		</view>
		<view class="order-item" @click="navTo('/pages/order/order?state=2')" hover-class="common-hover"  :hover-stay-time="50">
			<text class="yticon icon-yishouhuo"></text>
			<text>待收货</text>
		</view>
		<view class="order-item" @click="navTo('/pages/order/order?state=4')" hover-class="common-hover"  :hover-stay-time="50">
			<text class="yticon icon-shouhoutuikuan"></text>
			<text>退款/售后</text>
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
				
			}
		},
		methods: {
			
			
		}
	}
</script>

<style lang="scss">
%flex-center {
 display:flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
}
%section {
  display:flex;
  justify-content: space-around;
  align-content: center;
  background: #fff;
  border-radius: 10upx;
}
.order-section{
	@extend %section;
	padding: 28upx 0;
	margin-top: 20upx;
	.order-item{
		@extend %flex-center;
		width: 120upx;
		height: 120upx;
		border-radius: 10upx;
		font-size: $font-sm;
		color: $font-color-dark;
	}
	.yticon{
		font-size: 48upx;
		margin-bottom: 18upx;
		color: #fa436a;
	}
	.icon-shouhoutuikuan{
		font-size:44upx;
	}
}
</style>
