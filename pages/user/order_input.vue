<template>
	<view class="container">
		<!-- 订单查询 -->
		<view class="order_search_group" v-if="!result">
			<view class="search_group">
				<view class="icon"><i class="iconfont icon-search2"></i></view>
				<view class="search">
					<input class="search-input" name='search' type="text" placeholder="请输入淘宝订单编号" :value="order_no" 
						@input="inputChange" >
					<i id='search_close' class="iconfont icon-closecircle search_close"></i>
					<button id='search' class="btn" @tap="search">查询</button>
				</view>
			</view>
			<view class="order_num">
				<view class="title">如何获取订单编号？</view>
				<text class="step"><span>1.&nbsp;</span>打开手机“淘宝”<br/>&nbsp;&nbsp;&nbsp;淘宝APP-我的淘宝-查看全部订单</text>
				<view class="rule_img">
					<image src="https://cmsstatic.dataoke.com//wap_new/user/images/integral/rule-msg.png?v=201909061754" alt="" />
				</view>
				<text class="step"><span>2.&nbsp;</span>找到需要查询的订单，进入详情页复制订单编号<br/>&nbsp;&nbsp;&nbsp;订单详情页内找到订单信息，点击【复制】订单编号</text>
				<view class="rule_img">
					<image src="https://cmsstatic.dataoke.com//wap_new/user/images/integral/rule-msg2.png?v=201909061754" alt="" />
				</view>
			</view>
			<view class="rule_msg">
				<text class="title">查询规则说明：</text>
				<text class="msg"> 1. 购买人没同步的订单可通过订单查询找回<br />
					2. 当有多个用户同时查询同一订单编号时，以第一个输入人为准<br/>
					3. 已归属的订单不支持查询。如查询，则会反馈查找不到该订单的提示<br/>
					4. 奖励积分会按查找人的当前用户关系进行归属。建议购买人自查，不帮别人查询，避免误操作
				</text>
			</view>
		</view>
		
		<!-- 查询结果 -->
		<view class="order_search_result"  v-if="result">
			<view class="order_null">
				<view class="logo"><image src="https://cmsstatic.dataoke.com//wap_new/user/images/integral/order-null.png?v=201909061754" /></view>
				<view class="msg">未查到该订单</view>
				<view class="info">
					<text class="title">未查询到订单的可能原因：</text>
					<text class="step">
						1. 订单有延迟，建议下单后15分钟再查询<br/>
						2. 非您购买的订单<br/>
						3. 不是通过大淘券下的订单<br/>
						4. 创建订单超过40分钟付费，次日才能同步<br/>
						5. 超出7天的订单无法找回
					</text>
				</view>
				<button class="btn order_search_btn goback_search" @tap="reQuery">重新查询</button>
			</view>
			<view class="order_lists"></view>
		</view>
			
	</view>
</template>

<script>
	export default {
		data() {
			return {
				order_no:'',
				result: false,
			}
		},
		onLoad(options){
			
		},
		methods: {
			inputChange(e){
				const key = e.currentTarget.dataset.key;
				this[key] = e.detail.value;
			},
			reQuery(){
				this.result = false;
			},
			search(){
				this.$http.post('/cms/member/order/input', {order_no:this.order_no}).then(res => {
					if(res.info.status==1){
						uni.showToast({
							title:res.info.status_err,
							duration:1500,
						})
					}
					else {
						uni.showToast({
							title:res.info.status_err,
							duration:1500,
						})
					}
					// this.result = true;
				}).catch(err => {});	
			}
		}
	}
</script>

<style lang="scss">
page{
	background: $page-color-base;
	padding-bottom: 160upx;
}
.container{
	width: 100vw;
	padding: 10upx;
	color: #303133;
	background-color: #fff;
	font-size: $font-sm;
	line-height: 46upx;
	display: flex;
	flex-direction: column;
	.order_search_group{
		.search_group{
			// height: 165px;
			background: #fff;
			padding: 20px 15px 15px;
			box-sizing: border-box;
			.search {
			    height: 36px;
			    background: #fff;
			    border-radius: 4px;
			    display: flex;
			    position: relative;
				.search-input{
					flex: 1;
					height: 34px;
					border: 1px solid #ccc;
					border-right: 0;
					padding-left: 9px;
					font-size: 14px;
					font-family: PingFangSC-Regular;
					font-weight: 400;
					color: #4a4a4a;
					line-height: 20px;
					border-radius: 4px 0 0 4px;
				}
				.btn{
					width: 60px;
					height: 34px;
					background: linear-gradient(133deg,#f9642b 0,rgba(255,52,52,.99) 100%);
					border-radius: 0 4px 4px 0;
					font-size: 14px;
					font-family: PingFangSC-Regular;
					font-weight: 400;
					color: #fff;
					line-height: 34px;
				}
			}
		}
	}
	.order_search_result {
	    margin: 10px 0;
	    background: #fff;
		.order_null {
		    // display: none;
		    padding: 20px 10px;
		    height: calc(100vh - 55px);
		    overflow: hidden;
			.logo {
			    width: 150px;
			    height: 139px;
			    box-sizing: border-box;
			    margin: 21px auto 10px;
				image {
				    width: 150px;
				    height: 139px;
				}
			}
			.msg {
			    margin: 0 auto 10px;
			    width: 108px;
			    height: 25px;
			    font-size: 18px;
			    font-family: PingFangSC-Medium;
			    font-weight: 500;
			    color: #4a4a4a;
			    line-height: 25px;
			}
			.info {
			    // height: 130px;
			    background: #f6f6f6;
			    border-radius: 10px;
			    padding: 16px 20px;
			}
			.order_search_btn {
			    width: 320px;
			    height: 48px;
			    background: linear-gradient(270deg,#ff4950 0,#fb8d2c 100%);
			    border-radius: 4px;
			    display: block;
			    margin: 20px auto auto;
			    font-size: 15px;
			    color: #fff;
			    line-height: 48px;
			}
		}
	}
}
</style>
