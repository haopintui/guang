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
		<header-haibao v-else-if="itemData.type=='header_haibao'" :item-data="itemData.data"></header-haibao>
	</view>
</template>

<script>
	import agent from '@/common/model/components/agent';
	import banner from '@/common/model/components/banner';
	import haibao from '@/common/model/components/haibao';
	import uheader from '@/common/model/components/header_detail.vue';
	import icons from '@/common/model/components/icons';
	import menus from '@/common/model/components/menus';
	import slideRows from '@/common/model/components/slide_rows';
	import blocks from '@/common/model/components/blocks';
	import column from '@/common/model/components/column';
	import float from '@/common/model/components/float';
	import goods from '@/common/model/components/goods';
	import report from '@/common/model/components/report';
	import headerHaibao from '@/common/model/components/header_haibao';
	
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
			headerHaibao,
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
