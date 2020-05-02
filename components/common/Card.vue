<template>
	<view class="card">
		<view>-</view>
		<slot>
			<view class="card-name">{{cardTitle}}</view>
		</slot>
		<view>-</view>
	</view>
</template>

<script>
	export default {
		props: {
			cardTitle:String
		}
	}
</script>

<style scoped>
	.card {
		padding: 20rpx 0;
		display: flex;
		justify-content: center;
		font-size: bold;
	}
	.card-name {
		padding: 0 20rpx;
		font-size: 32rpx;
	}
</style>
