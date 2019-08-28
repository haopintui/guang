<template>
	<column v-if="goodsType=='column'" :item-data="itemData"></column>
	<ju v-else-if="goodsType=='ju'" :item-data="itemData"></ju>
	<list v-else-if="goodsType=='list'" :item-data="itemData"></list>
	<qiang v-else-if="goodsType=='qiang'" :item-data="itemData"></qiang>
	<column v-else :item-data="itemData"></column>
</template>

<script>
	import column from '@/components/model/goods/column';
	import ju from '@/components/model/goods/ju';
	import list from '@/components/model/goods/list';
	import qiang from '@/components/model/goods/qiang';
	
	export default {
		components: {
			column,
			ju,
			list,
			qiang,
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
