import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		hasLogin: false,
		userInfo: {},
		token:''
	},
	mutations: {
		login(state, provider) {
			state.hasLogin = true;
			state.userInfo = provider;
			uni.setStorage({//缓存用户登陆状态
			    key: 'userInfo',  
			    data: provider  
			}) 
			console.log(state.userInfo);
		},
		logout(state) {
			state.hasLogin = false;
			state.userInfo = {};
			state.token = '';
			uni.removeStorage({  
                key: 'userInfo'  
            })
			uni.removeStorage({  
                key: 'token'  
            })
		},
		setToken(state, token) {
			state.hasLogin = true;
			state.token = token;
			uni.setStorage({ //缓存用户登陆token
				key: 'token',  
				data: token  
			}) 
		},
	},
	actions: {
	
	}
})

export default store
