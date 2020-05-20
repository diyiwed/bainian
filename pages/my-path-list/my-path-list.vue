<template>
	<view class="my-path-list">
		<view class="path-list">
			<view 
				v-for="(item, index) in list" 
				:key="index"
				@tap="toAddPath(index)">
				<view class="path-item"
				@tap="goConfirmOrder(item)">
					<view class="item-main">
						<view class="item-name">{{item.name}}</view>
						<view>{{item.tel}}</view>
					</view>
					<view class="item-main">
						<view class="active" v-if="item.isDefault">默认</view>
						<view>{{item.city}}{{item.details}}</view>
					</view>
				</view>
			</view>
		</view>
		<view class="add-path">
			<view class="add-path-btn" @tap="goAddPat">新增地址</view>
		</view>
	</view>
</template>

<script>
	import {mapState} from 'vuex'
	export default {
		data() {
			return {
				isSelectedPath:false
			}
		},
		computed:{
			...mapState({
				list:state=>state.path.list
			})
		},
		onLoad(e) {
			if(e.type === "selectedPath"){
				this.isSelectedPath = true;
			}
		},
		methods: {
			// 修改
			toAddPath(index){
					let pathObj = JSON.stringify({
						index:index,
						item:this.list[index]
					})
					uni.navigateTo({
						url:"../my-add-path/my-add-path?data="+pathObj+""
					})
			},
			// 新增
			goAddPat(){
				uni.navigateTo({
					url:'../my-add-path/my-add-path'
				})
			},
			// 返回确认订单页面
			goConfirmOrder(item){
				// 如果是从确认订单过来的执行以下下面代码
				if(this.isSelectedPath){
					uni.$emit("selectPathItem", item)
					uni.navigateBack({
						delta:1
					})
				}
				
			}
		}
	}
</script>

<style scoped>
	.add-path {
		padding: 20rpx 0;
		width: 100%;
		display: flex;
		justify-content: center;
	}
	.add-path-btn {
		border: 2rpx solid #49BDFB;
		color: #49BDFB;
		border-radius: 30rpx;
		padding: 6rpx 60rpx;
	}
	.path-list {
		padding-left: 20rpx;
	}
	.path-item {
		padding: 10rpx;
		border-bottom: 2rpx solid #CCCCCC;
	}
	.item-main {
		display: flex;
		align-items: center;
	}
	.item-name {
		padding-right: 10rpx;
	}
	.active {
		padding-right: 10rpx;
		background-color: #49BDFB;
		color: #FFFFFF;
		border-radius: 26rpx;
		font-size: 24rpx;
		text-align: center;
	}
</style>
