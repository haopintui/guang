<template>
	<view class="container">
		<view class="payment-view">
			<view class="bg"></view>
			<view class="payment-content">
				<view class="payment">
					<view class="money">
						<text class="em">¥{{user_data.money_available}}元</text>
						<text>可提现</text>
					</view>
				</view>
				<view class="payment-detail">
					<view class="money">
						<text class="em">¥{{user_data.money}}元</text>
						<text>总金额</text>
					</view>
					<view class="money">
						<text class="em">¥{{(user_data.money-user_data.money_available).toFixed(4)}}元</text>
						<text>待结算</text>
					</view>
				</view>
			</view>
		</view>
		<view class="payment-introduce">
			<view>每月23日后可提现上月结算佣金</view>
		</view>
		<view class="payment-account">
			<view>提现账号</view>
			<view @click="navTo('/pages/set/cash')" v-if="user_cms_user_payment.member_id">{{user_cms_user_payment.alipay_account}}({{user_cms_user_payment.payee_name}})</view>
			<view @click="navTo('/pages/set/cash')" v-else>设置账号</view>
		</view>
		
		<view class="input-content">
			<view class="input-item">
				<text class="tit">提现金额(元)</text>
				<input 
					type="number" 
					:value="money" 
					placeholder="输入提现金额"
					maxlength="11"
					data-key="money"
					@input="inputChange"
				/>
			</view>
			<view class="input-item">
				<text class="em" v-if="user_data.withdraws>0">
					提醒:每次提现需大于{{user_data.limit_money}}元
				</text>
				<text class="em" v-else>
					提醒:首次提现需要大于{{user_data.payment_first_money}}，后每次提现满{{user_data.limit_money}}元即可
				</text>
			</view>
		</view>
		
		<button class="mix-btn" @click="payment" :disabled="logining">确认提现</button>
		<view class="tip">
			<view class="tip-item">注意事项</view>
			<view class="tip-item">1.提现实时自动转账</view>
			<view class="tip-item">2.遇特殊情况，自动转账失败的，2个工作日人工转账处理，耐心等待</view>
			<view class="tip-item">3.提现金额将在提现确认后,转入您的支付宝,您可以在支付宝账单中查询</view>
			<view class="tip-item">4.若您存在违规行为,我们有权驳回您的提现申请;</view>
		</view>
	</view>
</template>

<script>
    import { mapState ,mapMutations } from 'vuex'; 
	export default{
		components: {
			
		},
		data() {
			return {
				money: 0,
				user_data:{},
				user_cms_data:{},
				user_cms_user_payment:{},
				logining: false
			};
		},
		onLoad(){
			this.query();
			this.query_payment();
		},
        computed: {
			...mapState(['hasLogin','userInfo'])
		},
		methods:{
			inputChange(e){
				const key = e.currentTarget.dataset.key;
				this[key] = e.detail.value;
			},
			navTo(url){
				if(!this.hasLogin){
					url = '/pages/public/login';
				}
				uni.navigateTo({  
					url
				})  
			}, 
			//规格弹窗开关
			toggleSpec() {
				if(this.specClass === 'show'){
					this.specClass = 'hide';
					setTimeout(() => {
						this.specClass = 'none';
					}, 250);
				}else if(this.specClass === 'none'){
					this.specClass = 'show';
				}
			},
			//选择规格
			selectSpec(index, pid){
				let list = this.specChildList;
				list.forEach(item=>{
					if(item.pid === pid){
						this.$set(item, 'selected', false);
					}
				})

				this.$set(list[index], 'selected', true);
				//存储已选择
				/**
				 * 修复选择规格存储错误
				 * 将这几行代码替换即可
				 * 选择的规格存放在specSelected中
				 */
				this.specSelected = []; 
				list.forEach(item=>{ 
					if(item.selected === true){ 
						this.specSelected.push(item); 
					} 
				})
			},
			payment(){
				this.logining = true;
				const {money} = this;
				
				this.$http.post('/cms/member/payment/payment', {paymentMoney:money}).then(res => {
					this.$api.msg(res.info.status_err);
					this.logining = false;
				}).catch(err => {});
			},
			query_payment(){
				this.$http.post('/cms/member/payment/account', {}).then(res => {
					if(res.data.item){
						this.user_cms_user_payment = res.data.item;
					}
				}).catch(err => {});
			},
			query() {
				this.$http.post('/cms/member/info/getdata', {}).then(res => {
					if(res.data.user_data){
						this.user_data = res.data.user_data;
					}
					if(res.data.user_cms_data){
						this.user_cms_data = res.data.user_cms_data;
					}
				}).catch(err => {});
			},
			stopPrevent(){}
		},

	}
</script>

<style lang="scss">
	
page{
	background: $page-color-base;
	padding-bottom: 160upx;
}
.payment-view{
	height: 460upx;
	padding: 100upx 30upx 0;
	position:relative;
	.bg{
		position:absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		filter: blur(1px);
		/* opacity: .7; */
		background-color: #df1f1a;
		/* background: -webkit-linear-gradient(left, #df1e1a, #df1e1a); */
		/* background: linear-gradient(to right, #df1e1a, #df1e1a); */
	}
	.payment-content{
		height: 360upx;
		display:flex;
		flex-direction: column;
		position:relative;
		z-index: 1;
		.payment{
			height: 180upx;
			display:flex;
			align-items:center;
			flex-direction: column;
			.money{
				font-size: $font-base - 6upx;
				color: #fff;
				display: flex;
				flex-direction: column;
				align-items: center;
				.em{
					font-size: $font-base + 12upx;
				}
			}
		}
		.payment-detail{
			display:flex;
			flex-direction: row;
			justify-content: space-between;
			padding:0px 30px;
			.money{
				font-size: $font-base - 6upx;
				color: #fff;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-content: center;
				justify-items: center;
				align-items: center;
				.em{
					font-size: $font-base + 6upx;
				}
			}
		}
	}
}
.payment-introduce{
	background-color: #fff;
	margin: 10px 0px;
	padding: 10px 10px;
	font-size: $font-base + 1upx;
	color: #666;
}
.payment-account{
	background-color: #fff;
	margin: 10px 0px;
	padding: 10px 10px;
	display:flex;
	flex-direction: row;
	justify-content: space-between;
	font-size: 28upx;
	color: #333;
}
.input-content{
	background-color: #fff;
	padding: 10px 30upx;
	font-size: 28upx;
	color:#666;
	.input-item{
		display:flex;
		flex-direction: row;
		justify-content: flex-start;
		padding: 3px 0px;
		font-size: 28upx;
		input{
			margin: 0px 10px;
			// height: 60upx;
			font-size: 28upx;
			color: $font-color-dark;
			// width: 100%;
		}
		.em{
			font-size: 24upx;
		}
	}
}
.mix-btn {
	display: flex;
	align-items: center;
	justify-content: center;
	width: 630upx;
	height: 80upx;
	margin: 80upx auto 30upx;
	font-size: $font-lg;
	color: #fff;
	background-color: $base-color;
	border-radius: 10upx;
	box-shadow: 1px 2px 5px rgba(219, 63, 96, 0.4);
}
.tip{
	color: #333;
	padding: 0 30upx;
	font-size: 26upx;
	.tip-item{
		margin: 10px 0px;
		color: #333;
		font-size: 24upx;
	}
}
</style>
