<template>
	<view>
		<Lines />
		<view class="list">
			<!-- 左侧 -->
			<scroll-view scroll-y="true" class="list-left"
			 :style="'height:'+clentHeight+'px;'">
				<view 
				v-for="(item, index) in leftData"
				:key="index"
				@tap="changeLeftTab(index, item.id)">
					<view class="left-name"
					:class="activeIndex === index?'left-name-active':'left-item' ">
						{{item.name}}
					</view>
				</view>
			</scroll-view>
			<!-- 右侧 -->
			<scroll-view scroll-y="true" class="list-right"
			:style="'height:'+clentHeight+'px;'">
				<view class="righ-list"
				v-for="(item, index) in rightData"
				:key="index">
				<block v-for="(k, i) in item"
				:key="i">
					<view class="list-title">
						{{k.name}}
					</view>
					<view class="right-content">
						<view class="right-item"
						v-for="(j, idx) in k.list"
						:key="idx">
							<image class="right-img" :src="j.imgUrl" mode=""></image>
							<view class="right-name">
								{{j.name}}
							</view>
						</view>
					</view>
				</block>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	import $http from '@/common/api/request.js'
	import Lines from "@/common/Lines.vue"
	export default {
		data() {
			return {
				clentHeight: 0,
				activeIndex: 0,
				leftData: [],
				rightData: []
			}
		},
		onLoad() {
			this.getData();
		},
		onReady() {
			uni.getSystemInfo({
				success: (res) => {
					this.clentHeight = res.windowHeight - this.getClientHeight();
				}
			})
		},
		components:{
			Lines
		},
		methods: {
			// 请求数据方法
			getData(id) {
				if( id === (this.activeIndex+1)) {
					return;
				}
				$http.request({
					url:'/goods/list'
				}).then((res) => {
					let leftData = [];
					let rightData = [];
					res.forEach(v => {
						leftData.push({
							id:v.id,
							name: v.name
						})
						// 如果点击的id值相同
						if( v.id === (this.activeIndex+1)) {
							rightData.push(v.data)
						}
					})
					this.leftData = leftData;
					this.rightData = rightData;
				}).catch(() => {
					uni.showToast({
						title:'请求失败',
						icon:'none'
					})
				})
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
			// 左侧点击事件
			changeLeftTab(index, id) {
				this.getData(id);
				this.activeIndex = index;
			}
		},
		// input 输入框点击事件
		onNavigationBarSearchInputClicked() {
			uni.navigateTo({
				url:"../search/search"
			})
		}
	}
</script>

<style scoped>
	.list {
		display: flex;
	}
	.list-left {
		width: 200rpx;
	}
	.left-item {
		border-bottom: 2rpx solid #FFFFFF;
		font-size: 28rpx;
		font-weight: bold;
		background-color: #F7F7F7;
	}
	.left-name {
		padding: 30rpx 6rpx;
		text-align: center;
	}
	
	.left-name-active {
		border-left: 8rpx solid #49BDFB;
		background-color: #FFFFFF;
	}
	.list-right{
		flex: 1;
		padding-left: 30rpx;
	}
	.list-title {
		font-weight: bold;
		padding: 30rpx 0;
	}
	.right-content {
		display: flex;
		flex-wrap: wrap;
	}
	.right-item {
		width: 150rpx;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 10rpx;
	}
	.right-name {
		padding: 16rpx 0;
	}
	.right-img {
		width: 150rpx;
		height: 150rpx;
	}
</style>
