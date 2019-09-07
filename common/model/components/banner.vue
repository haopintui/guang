<template>	
	<view class="ad" @tap="navAction(itemData)">
		<image :src="itemData.pic_url" mode="widthFix"></image>
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
			navAction(item){
				if(item.pages){
					this.navTo(item.pages);
				}
				else if(item.action.action=='load_action'){
					this.load_action(item.action);
				}
				else if(item.action.action=='open_web'){
					this.open_web(item.action);
				}
			},
			navTo(url) {
				uni.navigateTo({
					url:url
				})
			},
			load_action(action){
				let options = {};
				// options.putAll(action.params);
				console.log(action);
				options = Object.assign(options,action.params);
				this.$http.post('/cms/load/view', options).then(res => {
					if(res.data.item.click
						&&res.data.item.click.we_app_web_view_url){
						window.location.href = res.data.item.click.we_app_web_view_url;
					}
					// this.$api.msg(res.info.status_err);
				}).catch(err => {});
			},
			open_web(action){
				window.location.href = action.params.url;
			}
		}
	}
</script>

<style lang="scss">
	
.ad{
	// width: 100%;
	// height: 210upx;
	margin: 5px 0px;
	padding: 10upx 0;
	background: #fff;
	image{
		width:100%;
		// height: 100%; 
	}
}
</style>
