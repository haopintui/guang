<template>
	<view>
		<!-- 秒杀楼层 -->
		<view v-if="itemData.type=='qiang'" class="seckill-section m-t">
			<view class="s-header">
				<image class="s-img" src="/static/temp/secskill-img.jpg" mode="widthFix"></image>
				<text class="tip">8点场</text>
				<text class="hour timer">07</text>
				<text class="minute timer">13</text>
				<text class="second timer">55</text>
				<text class="yticon icon-you"></text>
			</view>
			<scroll-view class="floor-list" scroll-x>
				<view class="scoll-wrapper">
					<view 
						v-for="(item, index) in items" :key="index"
						class="floor-item"
						@click="navToDetailPage(item)"
					>
						<image :src="item.goods.pic_url" mode="aspectFill"></image>
						<text class="title clamp">{{item.goods.title}}</text>
						<text class="price">￥{{item.price.price}}</text>
					</view>
				</view>
			</scroll-view>
		</view>
		<view v-if="itemData.type=='tuan'">
			<!-- 团购楼层 -->
			<view class="f-header m-t">
				<image src="/static/temp/h1.png"></image>
				<view class="tit-box">
					<text class="tit">精品团购</text>
					<text class="tit2">Boutique Group Buying</text>
				</view>
				<text class="yticon icon-you"></text>
			</view>
			<view class="group-section">
				<swiper class="g-swiper" :duration="500">
					<swiper-item
						class="g-swiper-item"
						v-for="(item, index) in goodsList" :key="index"
						v-if="index%2 === 0"
						@click="navToDetailPage(item)"
					>
						<view class="g-item left">
							<image :src="item.image" mode="aspectFill"></image>
							<view class="t-box">
								<text class="title clamp">{{item.title}}</text>
								<view class="price-box">
									<text class="price">￥{{item.price}}</text> 
									<text class="m-price">￥188</text> 
								</view>
								
								<view class="pro-box">
								  	<view class="progress-box">
								  		<progress percent="72" activeColor="#fa436a" active stroke-width="6" />
								  	</view>
									<text>6人成团</text>
								</view>
							</view>
							            
						</view>
						<view class="g-item right">
							<image :src="goodsList[index+1].image" mode="aspectFill"></image>
							<view class="t-box">
								<text class="title clamp">{{goodsList[index+1].title}}</text>
								<view class="price-box">
									<text class="price">￥{{goodsList[index+1].price}}</text> 
									<text class="m-price">￥188</text> 
								</view>
								<view class="pro-box">
								  	<view class="progress-box">
								  		<progress percent="72" activeColor="#fa436a" active stroke-width="6" />
								  	</view>
									<text>10人成团</text>
								</view>
							</view>
						</view>
					</swiper-item>
				</swiper>
			</view>
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
			
		},
		computed: {
			items() {
				return JSON.parse(this.itemData.items_json);
			},
		}
	}
</script>

<style lang="scss">
/* 秒杀专区 */
.seckill-section{
	padding: 4upx 30upx 24upx;
	background: #fff;
	.s-header{
		display:flex;
		align-items:center;
		height: 92upx;
		line-height: 1;
		.s-img{
			width: 140upx;
			height: 30upx;
		}
		.tip{
			font-size: $font-base;
			color: $font-color-light;
			margin: 0 20upx 0 40upx;
		}
		.timer{
			display:inline-block;
			width: 40upx;
			height: 36upx;
			text-align:center;
			line-height: 36upx;
			margin-right: 14upx;
			font-size: $font-sm+2upx;
			color: #fff;
			border-radius: 2px;
			background: rgba(0,0,0,.8);
		}
		.icon-you{
			font-size: $font-lg;
			color: $font-color-light;
			flex: 1;
			text-align: right;
		}
	}
	.floor-list{
		white-space: nowrap;
	}
	.scoll-wrapper{
		display:flex;
		align-items: flex-start;
	}
	.floor-item{
		width: 150upx;
		margin-right: 20upx;
		font-size: $font-sm+2upx;
		color: $font-color-dark;
		line-height: 1.8;
		image{
			width: 150upx;
			height: 150upx;
			border-radius: 6upx;
		}
		.price{
			color: $uni-color-primary;
		}
	}
}

.f-header{
	display:flex;
	align-items:center;
	height: 140upx;
	padding: 6upx 30upx 8upx;
	background: #fff;
	image{
		flex-shrink: 0;
		width: 80upx;
		height: 80upx;
		margin-right: 20upx;
	}
	.tit-box{
		flex: 1;
		display: flex;
		flex-direction: column;
	}
	.tit{
		font-size: $font-lg +2upx;
		color: #font-color-dark;
		line-height: 1.3;
	}
	.tit2{
		font-size: $font-sm;
		color: $font-color-light;
	}
	.icon-you{
		font-size: $font-lg +2upx;
		color: $font-color-light;
	}
}
</style>
