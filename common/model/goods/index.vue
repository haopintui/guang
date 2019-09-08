<template>
	<column v-if="goodsType=='column'" :item-data="itemData"></column>
	<ju v-else-if="goodsType=='ju'" :item-data="itemData"></ju>
	<list v-else-if="goodsType=='list'" :item-data="itemData"></list>
	<qiang v-else-if="goodsType=='qiang'" :item-data="itemData"></qiang>
	<history v-else-if="goodsType=='history'" :item-data="itemData"></history>
	<favorite v-else-if="goodsType=='favorite'" :item-data="itemData"></favorite>
	<top v-else-if="goodsType=='top'" :item-data="itemData" :top="top"></top>
	<zhishu v-else-if="goodsType=='zhishu'" :item-data="itemData"></zhishu>
	<goods-video v-else-if="goodsType=='video'" :item-data="itemData"></goods-video>
	<video-list v-else-if="goodsType=='video-list'" :item-data="itemData"></video-list>
	<column v-else :item-data="itemData"></column>
</template>

<script>
	import column from '@/common/model/goods/column';
	import ju from '@/common/model/goods/ju';
	import list from '@/common/model/goods/list';
	import qiang from '@/common/model/goods/qiang';
	import history from '@/common/model/goods/history';
	import favorite from '@/common/model/goods/favorite';
	import top from '@/common/model/goods/top';
	import zhishu from '@/common/model/goods/zhishu';
	import goodsVideo from '@/common/model/goods/video';
	import videoList from '@/common/model/goods/video-list';
	
	export default {
		components: {
			column,
			ju,
			list,
			qiang,
			history,
			favorite,
			top,
			zhishu,
			goodsVideo,
			videoList,
		},
		props:{
			goodsType:{
				type:String,
			},
			itemData:{
				type:Object
			},
			top:{
				type:Number
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

</style>
