<template>
	<view>
		<agent v-if="itemData.type=='agent'" :item-data="itemData.data"></agent>
		<banner v-else-if="itemData.type=='banner'" :item-data="itemData.data"></banner>
		<haibao v-else-if="itemData.type=='haibao'" :item-data="itemData.data"></haibao>
		<uheader v-else-if="itemData.type=='header'" :item-data="itemData.data"></uheader>
		<icons v-else-if="itemData.type=='icons'" :item-data="itemData.data"></icons>
		<menus v-else-if="itemData.type=='menus'" :item-data="itemData.data"></menus>
		<slide-rows v-else-if="itemData.type=='slide_rows'" :item-data="itemData.data"></slide-rows>
		<blocks v-else-if="itemData.type=='blocks'" :item-data="itemData.data"></blocks>
		<column v-else-if="itemData.type=='column'" :item-data="itemData.data"></column>
		<float v-else-if="itemData.type=='float'" :item-data="itemData.data"></float>
		<goods v-else-if="itemData.type=='goods'" :item-data="itemData.data"></goods>
		<report v-else-if="itemData.type=='report'" :item-data="itemData.data"></report>
	</view>
</template>

<script>
	import agent from '@/components/model/components/agent';
	import banner from '@/components/model/components/banner';
	import haibao from '@/components/model/components/haibao';
	import uheader from '@/components/model/components/header_detail.vue';
	import icons from '@/components/model/components/icons';
	import menus from '@/components/model/components/menus';
	import slideRows from '@/components/model/components/slide_rows';
	import blocks from '@/components/model/components/blocks';
	import column from '@/components/model/components/column';
	import float from '@/components/model/components/float';
	import goods from '@/components/model/components/goods';
	import report from '@/components/model/components/report';
	export default {
		components: {
			agent,
			banner,
			haibao,
			uheader,
			icons,
			menus,
			slideRows,
			blocks,
			column,
			float,
			goods,
			report,
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

<style>

</style>
