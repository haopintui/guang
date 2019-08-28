<template>  
    <view class="container">  
		<uheader v-for="(item, index) in components" v-if="item.type=='header'" :item-data="item.data" :key="index"></uheader>
		<view 
			class="cover-container"
			:style="[{
				transform: coverTransform,
				transition: coverTransition
			}]"
			@touchstart="coverTouchstart"
			@touchmove="coverTouchmove"
			@touchend="coverTouchend"
		>
			<component-item v-for="(item, index) in components" :item-data="item" :key="index" ></component-item>
		</view>
    </view>  
</template>  
<script>  
	import listCell from '@/components/mix-list-cell';
	import componentItem from '@/components/model/components/index';
	import uheader from '@/components/model/components/header';
    import { mapState ,mapMutations } from 'vuex'; 
	 
	let startY = 0, moveY = 0, pageAtTop = true;
	
    export default {
		components: {
			listCell,
			componentItem,
			uheader,
		},
		data(){
			return {
				coverTransform: 'translateY(0px)',
				coverTransition: '0s',
				moving: false,
				components:[],
			}
		},
		onLoad(){
			this.query();
			this.query_info();
			uni.$on('info',function(data){
				// console.log('监听到事件来自 update ，携带参数 msg 为：' + data.msg);
				// this.query_info();
				// this.query();
				this.$http.post('/app/page/member', {}).then(res => {
					if(res.data.components&&res.data.components){
						this.components.push(
						...res.data.components
						);
					}
				}).catch(err => {});
				this.$http.post('/cms/member/info/getinfo', {}).then(res => {
					if(res.data.user&&res.data.user.id){
						this.login(res.data.user);
					}
				}).catch(err => {});
			})
		},
		 
		onUnload() {  
			// 移除监听事件  
			uni.$off('info');  
		},  
		// #ifndef MP
		onNavigationBarButtonTap(e) {
			const index = e.index;
			if (index === 0) {
				this.navTo('/pages/set/set');
			}else if(index === 1){
				// #ifdef APP-PLUS
				const pages = getCurrentPages();
				const page = pages[pages.length - 1];
				const currentWebview = page.$getAppWebview();
				currentWebview.hideTitleNViewButtonRedDot({
					index
				});
				// #endif
				uni.navigateTo({
					url: '/pages/notice/notice'
				})
			}
		},
		// #endif
        computed: {
			...mapState(['hasLogin','userInfo'])
		},
        methods: {
			...mapMutations(['login']),
			query() {
				this.$http.post('/app/page/member', {}).then(res => {
					if(res.data.components&&res.data.components){
						this.components.push(
						...res.data.components
						);
					}
				}).catch(err => {});
			},
			/**
			 * 统一跳转接口,拦截未登录路由
			 * navigator标签现在默认没有转场动画，所以用view
			 */
			navTo(url){
				if(!this.hasLogin){
					url = '/pages/public/login';
				}
				uni.navigateTo({  
					url
				})  
			}, 
	
			/**
			 *  会员卡下拉和回弹
			 *  1.关闭bounce避免ios端下拉冲突
			 *  2.由于touchmove事件的缺陷（以前做小程序就遇到，比如20跳到40，h5反而好很多），下拉的时候会有掉帧的感觉
			 *    transition设置0.1秒延迟，让css来过渡这段空窗期
			 *  3.回弹效果可修改曲线值来调整效果，推荐一个好用的bezier生成工具 http://cubic-bezier.com/
			 */
			coverTouchstart(e){
				if(pageAtTop === false){
					return;
				}
				this.coverTransition = 'transform .1s linear';
				startY = e.touches[0].clientY;
			},
			coverTouchmove(e){
				moveY = e.touches[0].clientY;
				let moveDistance = moveY - startY;
				if(moveDistance < 0){
					this.moving = false;
					return;
				}
				this.moving = true;
				if(moveDistance >= 80 && moveDistance < 100){
					moveDistance = 80;
				}
		
				if(moveDistance > 0 && moveDistance <= 80){
					this.coverTransform = `translateY(${moveDistance}px)`;
				}
			},
			coverTouchend(){
				if(this.moving === false){
					return;
				}
				this.moving = false;
				this.coverTransition = 'transform 0.3s cubic-bezier(.21,1.93,.53,.64)';
				this.coverTransform = 'translateY(0px)';
			},
			query_info() {
				this.$http.post('/cms/member/info/getinfo', {}).then(res => {
					if(res.data.user&&res.data.user.id){
						this.login(res.data.user);
					}
				}).catch(err => {});
			},
        }  
    }  
</script>  
<style lang='scss'>
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
.cover-container{
	background: $page-color-base;
	margin-top: -150upx;
	padding: 0 30upx;
	position:relative;
	background: #f5f5f5;
	padding-bottom: 20upx;
	.arc{
		position:absolute;
		left: 0;
		top: -34upx;
		width: 100%;
		height: 36upx;
	}
}
	
</style>