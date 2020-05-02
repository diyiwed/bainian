<template>
	<view class="hot">
		<Commodity :dataList='HotList' itemW='250rpx' bigH="220rpx"></Commodity>
	</view>
</template>

<script>
	import Commodity from '../common/Commodity.vue'
	export default {
		data() {
			return {
				HotList: [
					{
						id:1,
						imgUrl: '../../static/img/hot1.jpg',
						name:'大衣绒毛大款2020年必须买，不买你就后悔了，爆款折扣GG008',
						pprice: '248',
						oprice: '998',
						discount: '4.5'
					},
					{
						id:2,
						imgUrl: '../../static/img/hot2.jpg',
						name:'大衣绒毛大款2020年必须买，不买你就后悔了，爆款折扣GG008',
						pprice: '248',
						oprice: '998',
						discount: '4.5'
					},
					{
						id:3,
						imgUrl: '../../static/img/hot3.jpg',
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

<style>
</style>
