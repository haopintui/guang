<template>
	<column v-if="goodsType=='column'" :item-data="itemData"></column>
	<ju v-else-if="goodsType=='ju'" :item-data="itemData"></ju>
	<list v-else-if="goodsType=='list'" :item-data="itemData"></list>
	<qiang v-else-if="goodsType=='qiang'" :item-data="itemData"></qiang>
	<history v-else-if="goodsType=='history'" :item-data="itemData"></history>
	<favorite v-else-if="goodsType=='favorite'" :item-data="itemData"></favorite>
	<column v-else :item-data="itemData"></column>
</template>

<script>
	import column from '@/components/model/goods/column';
	import ju from '@/components/model/goods/ju';
	import list from '@/components/model/goods/list';
	import qiang from '@/components/model/goods/qiang';
	import history from '@/components/model/goods/history';
	import favorite from '@/components/model/goods/favorite';
	
	export default {
		components: {
			column,
			ju,
			list,
			qiang,
			history,
			favorite,
		},
		props:{
			goodsType:{
				type:String,
			},
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

<style>

</style>
