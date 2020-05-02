<template>
	<view>
		<view class="recommend bg-color">
			<view class="recommend-item">
				<image class="item-big" src="../../static/img/Children.jpg" mode=""></image>
				<view class="item-small">
					<image class="item-img" src="../../static/img/Children1.jpg" mode=""></image>
					<image class="item-img" src="../../static/img/Children2.jpg" mode=""></image>
					<image class="item-img" src="../../static/img/Children3.jpg" mode=""></image>
				</view>
			</view>
			
			<view class="recommend-item">
				<image class="item-big" src="../../static/img/Furnishing.jpg" mode=""></image>
				<view class="item-small">
					<image class="item-img" src="../../static/img/Furnishing1.jpg" mode=""></image>
					<image class="item-img" src="../../static/img/Furnishing2.jpg" mode=""></image>
					<image class="item-img" src="../../static/img/Furnishing3.jpg" mode=""></image>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
</script>

<style>
	.recommend {
		padding: 20rpx;
	}
	.recommend-item {
		display: flex;
		flex-direction: column;
		border-radius: 20rpx;
		border: 2rpx solid #CCCCCC;
		overflow: hidden;
		margin: 20rpx 0;
	}
	.item-big {
		width: 100%;
		height: 300rpx;
	}
	.item-small {
		width: 100%;
		height: 240rpx;
	}
	.item-img {
		width: 33.3333%;
		height: 240rpx;
	}
</style>
