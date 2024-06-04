<script lang="ts">
	import { browser } from '$app/environment';
	import { onDestroy, onMount } from 'svelte';

	let cursor: HTMLElement;

	let height = 120;
	const speed = 1 / 10;
	let aimX = 0;
	let aimY = 0;

	let currentX = 0;
	let currentY = 0;

	function animate() {
		currentX += (aimX - currentX) * speed;
		currentY += (aimY - currentY) * speed;

		cursor.style.left = `${currentX}px`;
		cursor.style.top = `${currentY}px`;

		requestAnimationFrame(animate);
	}

	// init listeners
	const trackMouse = (event: MouseEvent) => {
		aimX = event.clientX - height / 2;
		aimY = event.clientY - height / 2;
	};

	onMount(() => {
		window.addEventListener('mousemove', trackMouse);
		animate();
	});
	onDestroy(() => {
		window.removeEventListener('mousemove', trackMouse);
	});

	function cursorAction(node: HTMLElement) {
		cursor = node;
	}
</script>

<div
	use:cursorAction
	class="pointer-events-none fixed z-[99999] rounded-full bg-black mix-blend-soft-light grayscale"
	style="height: {height}px; width: {height}px;"
></div>

<style>
	@media (pointer: none), (pointer: coarse) {
		div {
			display: none;
		}
	}
</style>
