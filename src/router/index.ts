import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Piano from '@/components/piano.vue'


const routes: Array<RouteRecordRaw> = [
	{
	  path: '/',
	  name: 'Home',
	  component: Piano
	},
	{
	  path: '/dados',
	  name: 'Dados',
	  // route level code-splitting
	  // this generates a separate chunk (about.[hash].js) for this route
	  // which is lazy-loaded when the route is visited.
	  component: () => import(/* webpackChunkName: "about" */ '@/components/dados.vue')
	},
	{
		path: '/Arrays',
		name: 'Arrays',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import(/* webpackChunkName: "about" */ '@/components/Arrays.vue')
	  }
  ]
  
  const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
  })
  
  export default router
  
