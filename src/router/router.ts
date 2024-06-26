import { createRouter, createWebHashHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import ZoomedOutPage from '../views/ZoomedOutPage.vue';

const routes = [
	{
		path: '/',
		name: 'Home',
		component: HomePage,
	},
	{
		path: '/home',
		redirect: { name: 'Home' },
	},
	{
		path: '/zoomed-out',
		name: 'ZoomedOut',
		component: ZoomedOutPage,
	},
];

const router = createRouter({
	history: createWebHashHistory(),
	routes,
});

export default router;
