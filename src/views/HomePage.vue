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
</script>

<style scoped></style>
