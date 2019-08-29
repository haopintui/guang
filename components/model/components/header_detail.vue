<template>
	<view class="tj-sction">
		<view class="tj-item" @click="navTo('/pages/user/order')">
			<text class="num">{{itemData.money_total}}</text>
			<text>累计奖励（元）</text>
		</view>
		<view class="tj-item" @click="navTo('/pages/user/points')">
			<text class="num">{{itemData.points_available}}</text>
			<text>积分奖励（个）</text>
		</view>
		<view class="tj-item" @click="navTo('/pages/user/order')">
			<text class="num">{{itemData.orders}}</text>
			<text>奖励订单(笔)</text>
		</view>
	</view>
</template>

<script>
    import { mapState ,mapMutations } from 'vuex'; 
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
        computed: {
			...mapState(['hasLogin','userInfo'])
		},
		methods: {
			navTo(url) {
				if(!this.hasLogin){
					url = '/pages/public/login';
				}
				uni.navigateTo({
					url:url
				})
			},
			
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
