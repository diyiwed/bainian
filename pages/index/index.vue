<template>
	<view class="index">
		
		<scroll-view scroll-x="true" class="scroll-content" :scroll-into-view="scrollIntoIndex">
			<view class="scroll-item"
			:id="'top'+index"
			v-for="(item, index) in topBar"
			:key="index"
			@tap="changeTab(index)"
			>
				<text :class="topBarIndex===index?'f-active-color':'f-color'">{{item.name}}</text>
			</view>
		</scroll-view>
		
		<swiper 
		@change="onChangeTab" 
		:current="topBarIndex"
		:style="'height:'+clentHeight+'px;'"
		>
			<swiper-item
			v-for="(item, index) in newTopBar"
			:key="index"
			>
				<scroll-view scroll-y="true" :style="'height:'+clentHeight+'px;'">
					<block v-if="item.data.length > 0">
						<block
						v-for="(k, i) in item.data"
						:key="i">
							<IndexSwiper v-if="k.type === 'swiperList'" :dataList='k.data'></IndexSwiper>
							<template v-if="k.type === 'recommendList'">
								<Recommend :dataList='k.data'></Recommend>
								<Card cardTitle='猜你喜欢'></Card>
							</template>
							<CommodityList v-if="k.type === 'commodityList'" :dataList='k.data'></CommodityList>
						</block>
					</block>
					<view v-else>
						暂无数据...
					</view>
				</scroll-view>
			</swiper-item>
		</swiper>
		
		<!-- 推荐模板 -->
		<!-- <IndexSwiper></IndexSwiper>
		<Recommend></Recommend>
		<Card cardTitle='猜你喜欢'></Card>
		<CommodityList></CommodityList> -->
		
		<!-- 其他模板：运动户外，美妆... -->
		<!-- <Banner></Banner>
		<Icon></Icon>
		<Card cardTitle='运动户外'></Card>
		<Hot></Hot>
		<Card cardTitle='推荐店铺'></Card>
		<Shop></Shop>
		<Card cardTitle='为您推荐'></Card>
		<CommodityList></CommodityList> -->
	</view>
</template>

<script>
	import IndexSwiper from '@/components/index/IndexSwiper.vue'
	import Recommend from '@/components/index/Recommend.vue'
	import Card from '@/components/common/Card.vue'
	import CommodityList from '@/components/common/CommodityList.vue'
	import Banner from '@/components/index/Banner.vue'
	import Icon from '@/components/index/Icons.vue'
	import Hot from '@/components/index/Hot.vue'
	import Shop from '@/components/index/Shop.vue'
	export default {
		data() {
			return {
				// 选中的索引
				topBarIndex: 0,
				// 顶部跟随的索引id值
				scrollIntoIndex: 'top0',
				// 内容块高度
				clentHeight: 0,
				// 顶部数据
				topBar: [],
				newTopBar: []
			}
		},
		components: {
			IndexSwiper,
			Recommend,
			Card,
			CommodityList,
			Banner,
			Icon,
			Hot,
			Shop
		},
		onLoad() {
			this.__init();
		},
		onReady() {
			uni.getSystemInfo({
				success: (res) => {
					this.clentHeight = res.windowHeight - uni.upx2px(80) - this.getClientHeight();
					console.log(this.getClientHeight().res)
				}
			})
		},
		methods: {
			__init() {
				uni.request({
					url:"http://192.168.0.102:3000/api/index_list/data",
					success: (res) => {
						let data = res.data.data;
						this.topBar = data.topBar;
						this.newTopBar = this.initData(data);
					}
				})
			},
			initData(res) {
				let arr = [];
				for(let i=0;i<this.topBar.length;i++) {
					let obj = {
						data: []
					}
					// 首次获取数据
					if(i==0) {
						obj.data = res.data;
					}
					arr.push(obj)
				}
				return arr;
			},
			changeTab(index) {
				if(this.topBarIndex === index) {
					return ;
				}
				this.topBarIndex = index
				this.scrollIntoIndex = 'top'+index
			},
			// 对应滑动
			onChangeTab(e) {
				this.changeTab(e.detail.current)
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
			}
		}
	}
</script>

<style scoped>
	.scroll-content {
		width: 100%;
		height: 80rpx;
		/* 规定段落不进行换行 */
		white-space: nowrap;
	}
	.scroll-item {
		display: inline-block;
		padding: 10rpx 30rpx;
		font-size: 32rpx;
	}
	.f-active-color {
		padding: 10rpx 0;
		border-bottom: 6rpx solid #49BDFB;
	}
</style>
