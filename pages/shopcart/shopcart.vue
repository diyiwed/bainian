<template>
	<view class="shop-cart">
		<template v-if="list.length > 1">
		<!-- 自定义导航栏 -->
		<uniNavBar
		title="购物车"
		:right-text="isNavBar?'完成':'编辑'"
		fixed="true"
		status-bar="true"
		@clickRight='isNavBar = !isNavBar'></uniNavBar>
		<!-- 商品内容 -->
		<view class="shop-list">
			<view class="shop-item"
			v-for="(item, index) in list"
			:key="index">
				<label class="radio">
					<radio value="" color="#FF3333" :checked="item.checked" @tap="selectedItem(index)"/><text></text>
				</label>
				<image class="shop-img" :src="item.imgUrl" mode=""></image>
				<view class="shop-text">
					<view class="view-name">{{item.name}}</view>
					<view class="shop-color f-color">{{item.color}}</view>
					<view class="shop-price">
						<view>￥{{item.pprice}}</view>
						<template v-if="!isNavBar">
							<view>X{{item.num}}</view>
						</template>
						<template v-else>
							<uniNumbarBox
							:value="item.num"
							:min="1"
							@change="changeNumber($event,index)"></uniNumbarBox>
						</template>
					</view>
				</view>
			</view>
		</view>
		
		<!-- 底部 -->
		<view class="shop-foot">
			<label class="radio foot-radio" @tap='checkedAllFn'>
				<radio value="" color="#FF3333" :checked="checkedAll"/><text>全选</text>
			</label>
			<template v-if="!isNavBar">
				<view class="foot-total">
					<view class="foot-count">合计：<text class="f-active-color">￥{{totalCount.pprice}}</text></view>
					<view class="foot-num">结算({{totalCount.num}})</view>
				</view>
			</template>
			<template v-else>
				<view class="foot-total">
					<view class="foot-num" style="background-color: #000000;">移入收藏夹</view>
					<view class="foot-num" @tap="delGoodsFn">删除</view>
				</view>
			</template>
		</view>
		</template>
		
		<template v-else>
			<!-- 自定义导航栏 -->
			<uniNavBar
			title="购物车"
			fixed="true"
			status-bar="true"></uniNavBar>
			<view class="shop-else-list">
				<text>囧~购物车还是空的~</text>
			</view>
		</template>
		
	</view>
</template>

<script>
	import uniNumbarBox from '../../components/uni-app/uni-number-box/uni-number-box.vue'
	import uniNavBar from '@/components/uni-app/uni-nav-bar/uni-nav-bar.vue'
	import {mapState, mapActions, mapGetters, mapMutations} from 'vuex'
	export default {
		data() {
			return {
				isNavBar:false
			}
		},
		computed:{
			...mapState({
				list:state=>state.cart.list
			}),
			...mapGetters(['checkedAll','totalCount'])
		},
		components:{
			uniNavBar,
			uniNumbarBox
		},
		methods: {
			...mapActions(['checkedAllFn','delGoodsFn']),
			...mapMutations(['selectedItem']),
			changeNumber(value, index){
				this.list[index].num = value;
			}
		}
	}
</script>

<style scoped>
	.shop-list {
		padding-bottom: 100rpx;
	}
	.shop-else-list {
		position: absolute;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: #F7F7F7;
	}
	.shop-item {
		display: flex;
		padding: 20rpx;
		align-items: center;
		background-color: #F7F7F7;
		margin-bottom: 10rpx;
	}
	.shop-img {
		width: 200rpx;
		height: 200rpx;
	}
	.shop-text {
		flex: 1;
		padding-left: 20rpx;
	}
	.shop-color {
		font-size: 24rpx;
	}
	.shop-price {
		display: flex;
		justify-content: space-between;
	}
	.shop-foot {
		display: flex;
		border-top: 2rpx solid #F7F7F7;
		background-color: #FFFFFF;
		position: fixed;
		left: 0;
		bottom: 0;
		width: 100%;
		height: 100rpx;
		justify-content: space-between;
		align-items: center;
	}
	.foot-radio{
		padding-left: 20rpx;
	}
	.foot-total {
		display: flex;
	}
	.foot-count {
		line-height: 100rpx;
		padding: 0 20rpx;
		font-size: 32rpx;
	}
	.foot-num {
		background-color: #49BDFB;
		color: #FFFFFF;
		padding: 0 60rpx;
		line-height: 100rpx;
	}
</style>
