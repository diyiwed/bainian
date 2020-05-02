<template>
	<view class="">
		<Commodity :dataList='commodityList'></Commodity>
	</view>
</template>

<script>
	import Commodity from './Commodity.vue'
	export default {
		data() {
			return {
				commodityList: [
					{
						id:1,
						imgUrl: '../../static/img/commodity1.jpg',
						name:'大衣绒毛大款2020年必须买，不买你就后悔了，爆款折扣GG008',
						pprice: '248',
						oprice: '998',
						discount: '4.5'
					},
					{
						id:2,
						imgUrl: '../../static/img/commodity2.jpg',
						name:'大衣绒毛大款2020年必须买，不买你就后悔了，爆款折扣GG008',
						pprice: '248',
						oprice: '998',
						discount: '4.5'
					},
					{
						id:3,
						imgUrl: '../../static/img/commodity3.jpg',
						name:'大衣绒毛大款2020年必须买，不买你就后悔了，爆款折扣GG008',
						pprice: '248',
						oprice: '998',
						discount: '4.5'
					},
					{
						id:4,
						imgUrl: '../../static/img/commodity4.jpg',
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
