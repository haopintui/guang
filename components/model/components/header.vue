<template>
	<view class="user-section">
		<view class="bg"></view>
		<view class="user-info-box">
			<view class="portrait-box">
				<image class="portrait" :src="itemData.portrait || '/static/missing-face.png'"></image>
			</view>
			<view class="info-box">
				<text class="username">{{itemData.nickname || '吴哥'}}</text>
				<text class="invite-code">邀请码: {{itemData.nickname || '1111111'}}</text>
			</view>
		</view>
		<view class="vip-card-box">
			<view class="vip-card-btn">
				<view class="vip-card-content">
					<text class="yticon icon-iLinkapp-"></text>
					可提现: 1000元
				</view>
				<view class="b-btn">
					提现
				</view>
			</view>
			<text class="e-m">每月23号可提现上个月结算收益</text>
			<text class="e-b">升级销售总监可享有加速提现功能</text>
		</view>
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
			
			
		}
	}
</script>

<style lang="scss">
.user-section{
	height: 520upx;
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
}
.user-info-box{
	height: 180upx;
	display:flex;
	align-items:center;
	position:relative;
	z-index: 1;
	.portrait{
		width: 130upx;
		height: 130upx;
		border:5upx solid #fff;
		border-radius: 50%;
	}
	.info-box{
		display: flex;
		flex-direction: column;
	}
	.username{
		font-size: $font-base + 6upx;
		color: $font-color-dark;
		margin-left: 20upx;
		color: #fff;
	}
	.invite-code{
		font-size: $font-sm + 0upx;
		color: $font-color-dark;
		margin-left: 20upx;
		color: #fff;
	}
}
.vip-card-box{
	display:flex;
	flex-direction: column;
	color: #f7d680;
	height: 240upx;
	/* background: linear-gradient(left, rgba(0,0,0,.7), rgba(0,0,0,.8)); */
	background-color: #292929;
	border-radius: 16upx 16upx 0 0;
	overflow: hidden;
	position: relative;
	padding: 20upx 24upx;
	
	.vip-card-btn{
		display:flex;
		flex-direction: row;
	}
	.b-btn{
		right: 20upx;
		top: 16upx;
		width: 132upx;
		height: 40upx;
		text-align: center;
		line-height: 40upx;
		font-size: 22upx;
		color: #36343c;
		border-radius: 20px;
		background: linear-gradient(left, #f9e6af, #ffd465);
		z-index: 1;
	}
	.vip-card-content{
		flex: 1;
		font-size: $font-base+2upx;
		color: #f7d680;
		margin-bottom: 28upx;
		.yticon{
			color: #f6e5a3;
			margin-right: 16upx;
		}
	}
	.e-m{
		font-size: $font-sm;
		color: #d8cba9;
		margin-top: 10upx;
	}
	.e-b{
		font-size: $font-sm;
		color: #d8cba9;
		margin-top: 10upx;
	}
}
</style>
