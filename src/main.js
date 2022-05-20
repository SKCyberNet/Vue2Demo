import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import router from './router'
import echarts from 'echarts'

import '@/icons'
Vue.prototype.$echarts = echarts //echarts 不能使用use
// 将自动注册所有组件为全局组件
import dataV from '@jiaminghi/data-view'
Vue.use(dataV)
Vue.config.productionTip = false
Vue.use(ElementUI)

new Vue({
	render: h => h(App),
	router,
}).$mount('#app')
