import Vue from 'vue'
import Router from 'vue-router'
 import screen from '@/views/screen.vue' 
Vue.use(Router)
var constantRouterMap=[{
	path: "/",
	component: screen,
	
}];
const router = new Router({
	routes:constantRouterMap

})
export default router;
