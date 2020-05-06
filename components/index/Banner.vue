<template>
	<view class="banner">
		<image class="banner-img" :src="dataList" mode=""></image>
	</view>
</template>

<script>
	export default {
		props:{
			dataList: String
		}
	}
</script>

<style scoped>
	.banner {
		width: 100%;
		height: 300rpx;
	}
	.banner-img {
		width: 100%;
		height: 300rpx;
	}
</style>
