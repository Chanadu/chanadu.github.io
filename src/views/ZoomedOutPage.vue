<template>
	<!-- <h1>HomePage</h1> -->
	<div class="grid grid-cols-3 lg:gap-24 md:gap-24 sm:gap-16">
		<SmallPagePlaceholder :empty="true">1</SmallPagePlaceholder>
		<SmallPagePlaceholder :empty="true">2</SmallPagePlaceholder>
		<SmallPagePlaceholder :empty="true">5</SmallPagePlaceholder>
		<SmallPagePlaceholder :empty="true">4</SmallPagePlaceholder>
		<SmallPagePlaceholder :empty="true">5</SmallPagePlaceholder>
		<SmallPagePlaceholder :empty="true">6</SmallPagePlaceholder>
		<SmallPagePlaceholder :empty="true">7</SmallPagePlaceholder>
		<SmallPagePlaceholder :empty="true">8</SmallPagePlaceholder>
		<SmallPagePlaceholder :empty="true">9</SmallPagePlaceholder>
	</div>
</template>

<script setup lang="ts">
	import SmallPagePlaceholder from '../components/ZoomedOutPage/SmallPagePlaceholder.vue';
</script>

<style scoped></style>
