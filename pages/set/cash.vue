<template>
	<view class="container">
		<view class="input-content">
			<view class="input-item">
				<text class="tit">账号:</text>
				<input 
					type="text" 
					:value="alipay" 
					placeholder="输入支付宝账号"
					data-key="alipay"
					@input="inputChange"
				/>
			</view>
			<view class="input-item">
				<text class="tit">收款人姓名:</text>
				<input 
					type="text" 
					:value="payee_name" 
					placeholder="输入支付宝真实用户名"
					placeholder-class="input-empty"
					data-key="payee_name"
					@input="inputChange"
				/>
			</view>
		</view>
		<button class="confirm-btn" @click="update" :disabled="logining">设置</button>
	</view>
</template>

<script>
	import { mapMutations } from 'vuex';
	export default {
		data() {
			return {
				alipay: '',
				payee_name: '',
			};
		},
		onLoad(){
			this.query();
		},
		methods: {
			...mapMutations(['login','setToken']),
			inputChange(e){
				const key = e.currentTarget.dataset.key;
				this[key] = e.detail.value;
			},
			navBack(){
				uni.navigateBack();
			},
			async update(){
				this.logining = true;
				const {alipay, payee_name} = this;
				
				this.$http.post('/cms/member/info/change_alipay', {alipay:alipay,payee_name:payee_name}).then(res => {
					this.$api.msg(res.info.status_err);
					this.logining = false;
					if(res.info.status==0){
						uni.navigateBack();
					}
				}).catch(err => {});
			},
			query() {
				this.$http.post('/cms/member/payment/account', {}).then(res => {
					if(res.data.item){
						this.alipay = res.data.item.alipay_account;
						this.payee_name = res.data.item.payee_name;
					}
				}).catch(err => {});
			},
		},
	}
</script>

<style lang="scss">
page{
	background: #fff;
}
.container{
	padding-top: 25px;
	position:relative;
	width: 100vw;
	height: 100vh;
	overflow: hidden;
	background: #fff;
}
.input-content{
	padding: 0 60upx;
}
.input-item{
	display:flex;
	flex-direction: row;
	align-items:flex-start;
	justify-content: flex-start;
	padding: 0 10upx;
	// background:$page-color-light;
	// height: 120upx;
	border-radius: 4px;
	margin-bottom: 50upx;
	&:last-child{
		margin-bottom: 0;
	}
	.tit{
		height: 50upx;
		line-height: 56upx;
		font-size: $font-sm+2upx;
		color: $font-color-base;
		padding: 0px 20px 0px 0px;
	}
	input{
		flex: 1;
		height: 60upx;
		font-size: $font-base + 2upx;
		color: $font-color-dark;
		// width: 100%;
	}	
}

.confirm-btn{
	width: 630upx;
	height: 76upx;
	line-height: 76upx;
	border-radius: 50px;
	margin-top: 70upx;
	background: $uni-color-primary;
	color: #fff;
	font-size: $font-lg;
	&:after{
		border-radius: 100px;
	}
}
</style>
