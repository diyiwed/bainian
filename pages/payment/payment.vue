<template>
	<view>
		<!-- 自定义导航栏 -->
		<uniNavBar
		title="确认支付"
		left-text="关闭"
		fixed="true"
		status-bar="true"
		@clickLeft='goBack'></uniNavBar>
		
		<view class="pay-main">
			<label for="">
				<view class="pay-item">
					<image class="pay-img" src="../../static/img/zfb.png" mode=""></image>
					<view>
						<view>支付宝支付</view>
						<view class="pay-txt">推荐支付宝用户使用</view>
					</view>
					<label class="radio">
						<radio value="" color="#FF3333" /><text></text>
					</label>
				</view>
			</label>
			<label for="">
				<view class="pay-item">
					<image class="pay-img" src="../../static/img/wxf.png" mode=""></image>
					<view>
						<view>微信支付</view>
						<view class="pay-txt">推荐微信的用户使用</view>
					</view>
					<label class="radio">
						<radio value="" color="#FF3333" /><text></text>
					</label>
				</view>
			</label>
			<!-- 去支付 -->
			<view class="pay-foot">
				<view class="total">
					<text class="f-color">合计：</text>
					<text class="total-price">￥259.00</text>
				</view>
				<view class="go-pay" @tap="goPayment">去支付</view>
			</view>
		</view>
	</view>
</template>

<script>
	import uniNavBar from "@/components/uni-app/uni-nav-bar/uni-nav-bar.vue"
	export default {
		data() {
			return {
				
			}
		},
		components:{
			uniNavBar
		},
		methods: {
			goBack(){
				uni.navigateBack({
					delta:1
				})
			},
			goPayment(){
				uni.navigateTo({
					url:"../payment-success/payment-success"
				})
			}
		}
	}
</script>

<style scoped>
	.pay-item{
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 20rpx;
		border-bottom: 2rpx solid #CCCCCC;
	}
	.pay-img{
		width: 100rpx;
		height: 100rpx;
	}
	.pay-txt{
		color: #CCCCCC;
	}
	.pay-foot {
		width: 100%;
		position: fixed;
		left: 0;
		bottom: 0;
		height: 100rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.total {
		padding-left: 100rpx;
		flex: 1;
		background-color: #000000;
		line-height: 100rpx;
	}
	.go-pay {
		color: #FFFFFF;
		background-color: #49BDFB;
		line-height: 100rpx;
		text-align: center;
		width: 200px;
	}
	.total-price {
		color: #FFFFFF;
	}
</style>
