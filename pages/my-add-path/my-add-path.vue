<template>
	<view class="my-add-path">
		<view class="path-item">
			<view>收件人</view>
			<input type="text" value="" placeholder="收件人姓名" v-model="pathObj.name"/>
		</view>
		
		<view class="path-item">
			<view>手机号</view>
			<input type="text" value="" placeholder="11位手机号" v-model="pathObj.tel"/>
		</view>
		
		<view class="path-item">
			<view>所在地址</view>
			<view @tap="showCityPicker">{{pathObj.city}} ></view>
			<mpvue-city-picker ref="mpvueCityPicker" @onConfirm="onConfirm"></mpvue-city-picker>
		</view>
		
		<view class="path-item">
			<view>详细地址</view>
			<input type="text" value="" placeholder="5到60个字符" v-model="pathObj.details"/>
		</view>
		
		<view class="path-item">
			<view>设为默认地址</view>
			<radio-group class="path-radio" @change="radioChange">
				<label class="radio">
					<radio value="" color="#FF3333" :checked="pathObj.isDefault"/><text></text>
				</label>
			</radio-group>
		</view>
	</view>
</template>

<script>
	import mpvueCityPicker from '@/components/uni-app/mpvue-citypicker/mpvueCityPicker.vue'
	import {mapActions} from 'vuex'
	export default {
		data() {
			return {
				pathObj:{
					pickerValueDefault: [0, 0, 1],
					name:"",
					tel:"",
					city:"请选择",
					details:"",
					isDefault:false
				},
				i:-1,
				// 是否修改的状态
				isStatus:false
			}
		},
		onLoad(e) {
			if(e.data){
				uni.setNavigationBarTitle({
					title:"修改地址"
				})
				let result = JSON.parse(e.data);
				this.pathObj = result.item;
				this.i = result.index;
				this.isStatus = true;
			}
		},
		components:{
			mpvueCityPicker
		},
		onNavigationBarButtonTap() {
			if(this.isStatus){
				// 修改
				this.updatePathFn({
					index:this.i,
					item:this.pathObj,
					})
				uni.navigateBack({
						delta:1
					})
			}else{
				this.createPathFn(this.pathObj)
				uni.navigateBack({
					delta:1
				})
			}
		},
		methods: {
			...mapActions(["createPathFn","updatePathFn"]),
			showCityPicker() {
			      this.$refs.mpvueCityPicker.show();
			    },
			    onConfirm(e) {
					this.pathObj.city = e.label
			    },
				radioChange(){
					this.pathObj.isDefault = !this.pathObj.isDefault;
				}
		}
	}
</script>

<style scoped>
	.my-add-path {
		padding-left: 20rpx;
	}
	.path-item {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 16rpx 0;
		width: 100%;
		border-bottom: 2rpx solid #CCCCCC;
	}
	.path-item input {
		flex: 1;
		text-align: left;
		padding-left: 10rpx;
	}
</style>
