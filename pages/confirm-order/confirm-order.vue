<template>
	<view class="confirm-order bg-active-color">
		<Lines></Lines>
		
		<!-- 地址 -->
		<view class="order-map" @tap="goPathList">
			<template v-if="path">
				<view class="map-title">
					<view class="map-name">收件人：{{path.name}}</view>
					<view class="">{{path.tel}}</view>
				</view>
				<view class="map-city">
					收货地址：{{path.city}}{{path.details}}
				</view>
			</template>
			<template v-else>
				<view class="map-title">
					<view class="map-name">暂无默认地址</view>
				</view>
				
			</template>
		</view>
		
		<!-- 商品 -->
		<view class="goods-list">
			<view class="goods-content">
				<image class="goods-img" src="../../static/img/Children1.jpg" mode=""></image>
				<view class="goods-text">
					<view>大衣绒毛大款2020年必须买，不买你就后悔了，爆款折扣GG008</view>
					<view class="goods-size f-color">颜色分类：黑色</view>
					<view class="f-active-color goods-size">7天无理由</view>
				</view>
				<view>
					<view>￥299.00</view>
					<view class="f-color">x1</view>
				</view>
			</view>
		</view>
		
		<!-- 底部：提交订单 -->
		<view class="order-foot">
			<view class="tobal-price">合计: ￥<text class="f-active-color">39999</text></view>
			<view class="confirm" @tap="goPayment">提交订单</view>
		</view>
		
	</view>
</template>

<script>
	import Lines from '@/common/Lines.vue'
	import {mapGetters} from 'vuex'
	export default {
		data() {
			return {
				path:false
			}
		},
		components:{
			Lines
		},
		computed:{
			...mapGetters(['defaultPath'])
		},
		onLoad() {
			if(this.defaultPath.length){
				this.path = this.defaultPath[0]
			}
			// 如果发出自定义事件，on去接受值
			uni.$on("selectPathItem", (res)=> {
				this.path = res
			})
		},
		onUnload() {
			uni.$off("selectPathItem", ()=> {
				console.log("移出了selectPathItem")
			})
		},
		methods: {
			goPathList(){
				uni.navigateTo({
					url:"../my-path-list/my-path-list?type=selectedPath"
				})
			},
			goPayment(){
				uni.navigateTo({
					url:"../payment/payment"
				})
			}
		}
	}
</script>

<style scoped>
.confirm-order {
	position: absolute;
	left: 0;
	top: 0;
	right: 0;
	bottom: 0;
	width: 100%;
	height: 100%;
}
.order-map {
	padding:20rpx;
	background-color: #FFFFFF;
	line-height: 40rpx;
}
.map-title {
	display: flex;
	justify-content: space-between;
}
.map-name {
	font-weight: bold;
}
.goods-list{
	background-color: #FFFFFF;
	margin-top: 20rpx;
	padding: 20rpx 0;
}
	.goods-content{
		margin-top: 20rpx;
		padding: 10rpx 20rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.goods-text {
		width: 360rpx;
		padding: 0 10rpx;
		font-size: 26rpx;
	}
	.goods-img{
		width: 160rpx;
		height: 160rpx;
	}
	.goods-name {
		font-size: 26rpx;
	}
	.goods-size{
		font-size: 24rpx;
	}
.order-foot {
	width: 100%;
	height: 80rpx;
	position: fixed;
	bottom: 0;
	left: 0;
	background-color: #FFFFFF;
	display: flex;
	justify-content: flex-end;
	align-items: center;
}
.tobal-price{
	padding: 0 20rpx;
}
.confirm {
	color: #FFFFFF;
	background-color: #49BDFB;
	padding: 10rpx 30rpx;
}
</style>
