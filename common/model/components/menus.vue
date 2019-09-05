<template>
	<view class="menus">
		<view class="item" v-for="(item, index) in itemData.items" :key="index" >
			<text>{{item.name}}</text>
			<text>></text>
		</view>
	</view>
</template>

<script>
	import listCell from '@/components/mix-list-cell';
	export default {
		components: {
			listCell,
		},
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
	
.menus {
	display: flex;
	flex-direction: column;
	flex-wrap:wrap;
	padding: 30upx 20upx; 
	background: #fff;
	margin: 30px 0px;
	font-size: 24upx;
	color: #333;
	.item{
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}
}
</style>
