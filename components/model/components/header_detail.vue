<template>
	<view class="tj-sction">
		<view class="tj-item">
			<text class="num">128.8</text>
			<text>累计奖励（元）</text>
		</view>
		<view class="tj-item">
			<text class="num">0</text>
			<text>积分奖励（g个）</text>
		</view>
		<view class="tj-item">
			<text class="num">20</text>
			<text>奖励订单(笔)</text>
		</view>
	</view>
	<!-- <view>
		<image class="arc" src="/static/arc.png"></image>
	</view> -->
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
.tj-sction{
	@extend %section;
	.tj-item{
		@extend %flex-center;
		flex-direction: column;
		height: 140upx;
		font-size: $font-sm;
		color: #75787d;
	}
	.num{
		font-size: $font-lg;
		color: $font-color-dark;
		margin-bottom: 8upx;
		color: #df1f1a;
	}
}
</style>
