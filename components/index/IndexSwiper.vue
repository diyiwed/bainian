<template>
	<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
		<swiper-item>
			<view class="swiper-item">
				<image class="swiper-img" src="../../static/img/swiper1.jpg" mode=""></image>
			</view>
		</swiper-item>
		<swiper-item>
			<view class="swiper-item">
				<image class="swiper-img" src="../../static/img/swiper2.jpg" mode=""></image>
			</view>
		</swiper-item>
		<swiper-item>
			<view class="swiper-item">
				<image class="swiper-img" src="../../static/img/swiper3.jpg" mode=""></image>
			</view>
		</swiper-item>
	</swiper>
			
</template>

<script>
</script>

<style scoped>
swiper {
	width: 100%;
	height: 400rpx;
}
.swiper-img {
	width: 100%;
	height: 400rpx;
}
</style>
