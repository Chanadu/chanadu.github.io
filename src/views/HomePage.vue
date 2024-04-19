<template>
	<!-- <h1>HomePage</h1> -->
	<div class="flex content-center items-center">
		<HorizontalBar class="mx-6"></HorizontalBar>
		<NameCard name="Chandu Peddada" class="sono-400"></NameCard>
		<HorizontalBar class="mx-6"></HorizontalBar>

		<!-- <strong>{{ $route.fullPath }}</strong> -->
	</div>
</template>

<script setup lang="ts">
	import NameCard from '../components/HomePage/NameCard.vue';
	import HorizontalBar from '../components/HomePage/HorizontalBar.vue';
	import { onMounted, onUnmounted } from 'vue';
	import { useRouter } from 'vue-router';
	import router from '../router/router';

	function scrollEvent(event: Event) {
		console.log(useRouter());
		if (window.scrollY > 0) {
			window.scrollTo(0, 0);
			router.replace({ path: '/zoomed-out' });
		}
	}
	onMounted(() => {
		document.addEventListener('scroll', scrollEvent);
	});
	onUnmounted(() => {
		document.removeEventListener('scroll', scrollEvent);
	});
</script>

<style scoped></style>
