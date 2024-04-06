<template>
	<Transition>
		<div v-if="show">
			<!-- class="transition-all ease-in delay-300 -translate-y-96 duration-500" -->
			<h1 class="text-nowrap text-4xl">
				{{ name }}
			</h1>
		</div>
	</Transition>
</template>

<script setup lang="ts">
	import { ref, onMounted } from 'vue';

	const show = ref(false);
	defineProps<{ name: string }>();
	onMounted(() => {
		show.value = true;
	});
</script>

<style scoped>
	.v-enter-active {
		transition-property: all;
		transition-duration: 600ms;
		transition-delay: 100ms;
		transition-timing-function: ease-in;
		transform: translate(0);
	}
	.v-enter-from {
		--tw-translate-y: -60vh;
		transform: translate(0, var(--tw-translate-y));
	}
</style>
