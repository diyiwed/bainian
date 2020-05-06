<template>
	<view class="hot">
		<Commodity :dataList='dataList' itemW='250rpx' bigH="220rpx"></Commodity>
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

<style>
</style>
