import Request from './request'
import md5 from '@/js_sdk/ccdzhang-dokey/md5.js';

const http = new Request()

http.setConfig((config) => { /* 设置全局配置 */
	config.baseUrl = 'https://s.youdanhui.com' /* 根域名不同 */
	config.header = {
		// a: 1,
		// b: 2
      // 'Content-Type': 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded',
	}
	return config
})

http.interceptor.request((config, cancel) => { /* 请求之前拦截器 */
	config.header = {
		...config.header,
		// b: 1
	}
	// uni.get
	let app_id = '23562';
	let timeStamp = new Date().getTime();
	let url_sign = md5(app_id+''+timeStamp);
	let params = config.data;
	
	let hpt_token = uni.getStorageSync('token');
	
	params['version'] = 9;
	params['times'] = timeStamp;
	params['url_sign'] = url_sign;
	
	params['hpt_token'] = hpt_token;
	params['app_id'] = app_id;
	
	config.data = params;
	/*
  if (!token) { // 如果token不存在，调用cancel 会取消本次请求，但是该函数的catch() 仍会执行
    cancel('token 不存在') // 接收一个参数，会传给catch((err) => {}) err.errMsg === 'token 不存在'
  }
  */
	return config
})

http.interceptor.response((response) => { /* 请求之后拦截器 */
	console.log(response)
    const { statusCode, data } = response;
	if (statusCode >= 200 && statusCode < 300) {
	 //  if (!noConsole) {
		// console.log(
		//   `${new Date().toLocaleString()}【 M=${options.url} 】【接口响应：】`,
		//   res.data
		// );
	 //  }
	  // if (data.status !== 'ok') {
	  //   Taro.showToast({
	  //     title: `${res.data.error.message}~` || res.data.error.code,
	  //     icon: 'none',
	  //     mask: true,
	  //   });
	  // }
	  return data;
	} else {
	  throw new Error(`网络请求错误，状态码${statusCode}`);
	}
	return response
}, (response) => { // 请求错误做点什么
	return response
})

export {
	http
}
