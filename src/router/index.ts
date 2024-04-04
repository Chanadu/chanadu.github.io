import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';

const routes = [
	{ path: '/', name: 'Home', component: HomePage },
	{ path: '/home', redirect: { name: 'Home' } },
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
