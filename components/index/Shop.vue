<template>
	<view class="shop">
		<view class="shop-item">
			<view class="shop-big">
				<image class="shop-big" src="../../static/img/shop.jpg" mode=""></image>
			</view>
			<scroll-view class="scroll-content" scroll-x="true" >
				<Commodity 
				:dataList='ShopList'
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
		data() {
			return {
				ShopList: [
					{
						id:1,
						imgUrl: '../../static/img/shop1.jpg',
						name:'大衣绒毛大款2020年必须买，不买你就后悔了，爆款折扣GG008',
						pprice: '248',
						oprice: '998',
						discount: '4.5'
					},
					{
						id:2,
						imgUrl: '../../static/img/shop2.jpg',
						name:'大衣绒毛大款2020年必须买，不买你就后悔了，爆款折扣GG008',
						pprice: '248',
						oprice: '998',
						discount: '4.5'
					},
					{
						id:3,
						imgUrl: '../../static/img/shop3.jpg',
						name:'大衣绒毛大款2020年必须买，不买你就后悔了，爆款折扣GG008',
						pprice: '248',
						oprice: '998',
						discount: '4.5'
					},
					{
						id:4,
						imgUrl: '../../static/img/shop4.jpg',
						name:'大衣绒毛大款2020年必须买，不买你就后悔了，爆款折扣GG008',
						pprice: '248',
						oprice: '998',
						discount: '4.5'
					}
				]
			}
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
