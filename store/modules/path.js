export default {
	state: {
		list:[
			{
				name:"张三",
				tel:"18879257443",
				city:"江西省九江市彭泽县",
				details:"定山镇",
				isDefault:false
			},
			{
				name:"李四",
				tel:"18879257443",
				city:"江西省赣州市章贡区",
				details:"江西环境工程职业学院",
				isDefault:true
			}
		]
	},
	getters:{
		defaultPath(state){
			return state.list.filter(v=>v.isDefault)
		}
	},
	mutations:{
		createPath(state, obj){
			state.list.unshift(obj);
		},
		updatePath(state, {index, item}) {
			for(let key in item){
				state.list[index][key] = item[key];
			}
		},
		// 把之前选中的变成为选中
		removePath(state){
			state.list.forEach(v=>{
				if(v.isDefault){
					v.isDefault = false
				}
			})
		}
	},
	actions:{
		createPathFn({commit}, obj){
			if(obj.isDefault){
				commit('removePath')
			}
			commit('createPath', obj)
		},
		updatePathFn({commit}, obj){
			if(obj.item.isDefault){
				commit('removePath')
			}
			commit('updatePath', obj)
		}
	}
	
}