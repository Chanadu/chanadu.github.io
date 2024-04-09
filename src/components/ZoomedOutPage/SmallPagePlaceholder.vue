<template>
	<!-- <h1>HomePage</h1> -->
	<SmallPageTemplate
		class="flex flex-col items-center justify-center bg-slate-600">
		<div v-show="!empty" class="text-black">Placeholder</div>
		<slot></slot>
	</SmallPageTemplate>
</template>

<script setup lang="ts">
	import SmallPageTemplate from './SmallPageTemplate.vue';

	defineProps({
		empty: Boolean,
	});
</script>

<style scoped></style>
