<template>	
	<view class="ad-1">
		<image :src="itemData.pic_url" mode="scaleToFill"></image>
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
	
.ad-1{
	width: 100%;
	// height: 210upx;
	padding: 10upx 0;
	background: #fff;
	image{
		width:100%;
		// height: 100%; 
	}
}
</style>
