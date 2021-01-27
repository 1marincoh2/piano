import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import piano from '.././components/piano.vue'

const routes: Array<RouteRecordRaw> = [
	{
		path: '/',
		name: 'Home',
		component: piano
	},
]

const router = createRouter({
	history: createWebHashHistory(),
	routes
})

export default router
