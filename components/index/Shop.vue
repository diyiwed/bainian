<template>
	<view class="shop">
		<view class="shop-item" v-for="(item, index) in dataList" :key="index">
			<view class="shop-big">
				<image class="shop-big" :src="item.bigUrl" mode=""></image>
			</view>
			<scroll-view class="scroll-content" scroll-x="true" >
				<Commodity 
				:dataList='item.data'
				wrap='no-wrap'
				itemW='200rpx'
				bigH='200rpx'
				nameSize='20rpx'
				></Commodity>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	import Commodity from '../common/Commodity.vue'
	export default {
		props: {
			dataList: Array
		},
		components: {
			Commodity
		}
	}
</script>

<style scoped>
	.shop-big {
		width: 100%;
		height: 350rpx;
	}
	.scroll-content {
		width: 100%;
		white-space: nowrap;
	}
	.scroll-item {
		display: inline-block;
	}
</style>
