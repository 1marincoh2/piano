import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Piano from '@/components/piano.vue'

const routes: Array<RouteRecordRaw> = [
	{
		path: '/',
		name: 'Home',
		component: Piano
	}
]

const router = createRouter({
	history: createWebHashHistory(),
	routes
})

export default router
