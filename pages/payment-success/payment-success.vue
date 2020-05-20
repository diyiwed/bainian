<template>
	<view class="payment-success">
		<view class="return-index">恭喜支付成功</view>
		<view @tap="goIndex" class="f-active-color">返回首页在买点</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			goIndex(){
				uni.switchTab({
					url:"../index/index"
				})
			}
		}
	}
</script>

<style scoped>
	.payment-success{
		position: absolute;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
		display: flex;
		justify-content: center;
		flex-direction: column;
		align-items: center;
	}
	.return-index {
		padding: 40rpx 60rpx;
		border: 2rpx solid #49BDFB;
		border-radius: 40rpx;
		font-size: 52rpx;
	}
</style>
