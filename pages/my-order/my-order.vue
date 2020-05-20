<template>
	<view class="my-order bg-active-color">
		<Lines></Lines>
		<view class="order-header">
			<view class="header-item" 
				v-for="(item, index) in tabList"
				:key="index"
				:class=" tabIndex == index?'active':'' "
				@tap="changeTab(index)"
				>{{item.name}}</view>
		</view>
		<block
		v-for="(tabItem,tabI) in tabList"
		:key="tabI">
		<view v-show="tabI === tabIndex">
			
				<view v-if="tabItem.list!=null" class="order-main" :style="'height:'+clentHeight+'px;'">
					<!-- 商品 -->
					<view v-for="(k,i) in tabItem.list" :key="i">
						<view class="order-goods">
							<view class="goods-status f-active-color">{{k.status}}</view>
							<view class="goods-item" 
								v-for="(item,index) in k.goods_item"
								:key="index">
								<OrderList :item="item" :index="index"></OrderList>
							</view>
						</view>
						<Lines></Lines>
						
						<!-- 总价 -->
						<view class="total-price">
							订单金额：<text class="f-active-color">￥{{k.totalPrice}}</text>（包含运费￥0.00）
						</view>
						<Lines></Lines>
						<!-- 支付 -->
						<view class="payment">
							<view class="payment-text f-active-color">支付</view>
						</view>
					</view>
				</view>
			
				<view v-else class="no-order" :style="'height:'+clentHeight+'px;'">
					<view>您还没有相关订单</view>
					<view class="no-order-home" @tap="gohome">去首页逛逛</view>
				</view>
			</view>
		</block>
	</view>
</template>

<script>
	import Lines from '@/common/Lines.vue'
	import OrderList from '@/components/order/order-list.vue'
	export default {
		data() {
			return {
				tabIndex:0,
				// 顶部选项卡数据
				clentHeight:0,
				tabList:[
					{
						name:"全部",
						list:[
							{
								status:"待付款",
								totalPrice:"3999.00",
								goods_item:[
									{
										imgUrl:"../../static/img/Children3.jpg",
										name:"大衣绒毛大款2020年必须买，不买你就后悔了，爆款折扣GG008",
										attrs:"黑色",
										pprice:"299.00",
										num:"1"
									},
									{
										imgUrl:"../../static/img/Children2.jpg",
										name:"大衣绒毛大款2020年必须买，不买你就后悔了，爆款折扣GG008",
										attrs:"红色",
										pprice:"299.00",
										num:"5"
									},
									{
										imgUrl:"../../static/img/Children1.jpg",
										name:"大衣绒毛大款2020年必须买，不买你就后悔了，爆款折扣GG008",
										attrs:"黄色",
										pprice:"299.00",
										num:"2"
									}
								]
							}
						]
						},
					{name:"待付款"},
					{name:"代发货"},
					{name:"待收货"},
					{name:"待评价"}
				]
			}
		},
		components:{
			Lines,
			OrderList
		},
		onReady() {
			uni.getSystemInfo({
				success: (res) => {
					this.clentHeight = res.windowHeight - uni.upx2px(120) - this.getClientHeight();
				}
			})
		},
		methods: {
			changeTab(index){
				this.tabIndex = index
			},
			// 获取可视区域高度【兼容】
			getClientHeight() {
				const res = uni.getSystemInfoSync();
				const system = res.platform;
				if(system === 'ios') {
					return 44+res.statusBarHeight;
				}else if(system === 'android') {
					return 0;
				}else {
					return 0;
				}
			},
			gohome(){
				uni.navigateTo({
					url:'../index/index'
				})
			}
		}
	}
</script>

<style scoped>
	.no-order {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		background-color: #FFFFFF;
	}
	.no-order-home {
		padding: 6rpx 60rpx;
		border: 2rpx solid #49BDFB;
		color: #49BDFB;
		border-radius: 40rpx;
	}
	.order-header{
		background-color: #FFFFFF;
		display: flex;
		justify-content: center;
		align-items: center;
		border-bottom: 2rpx solid #F7F7F7;
	}
	.header-item{
		text-align: center;
		flex: 1;
		line-height: 100rpx;
	}
	.active{
		border-bottom: 4rpx solid #49BDFB;
	}
	
	.goods-status {
		display: flex;
		justify-content: flex-end;
		background-color: #FFFFFF;
		padding: 20rpx;
	}
	.goods-content{
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
	.total-price {
		display: flex;
		justify-content: flex-end;
		background-color: #FFFFFF;
		padding: 20rpx;
	}
	.payment {
		display: flex;
		justify-content: flex-end;
		background-color: #FFFFFF;
		padding: 20rpx;
	}
	.payment-text {
		border: 2rpx solid #49BDFB;
		padding: 6rpx 40rpx;
		border-radius: 30rpx;
	}
</style>
