<script lang="ts">
	import PageContent from './PageContent.svelte';

	const gray1 = '#131316';
	const gray2 = '#1b1b1f';
	const gray3 = '#242429';
</script>

<footer
	class="footer-bg relative overflow-hidden px-4 py-36 text-white"
	style="
		--gray-1: {gray1};
		--gray-2: {gray2};
		--gray-3: {gray3};
	"
>
	<PageContent>
		<div class="relative z-1 flex flex-col gap-4">
			<h6 class="text-3xl font-bold uppercase tracking-tight">Write to me</h6>
			<a
				href="mailto:randigath@gmail.com"
				class="w-fit text-white/80 transition-colors hover:text-white hover:underline"
			>
				randigath@gmail.com
			</a>
		</div>
	</PageContent>
</footer>

<style>
	.footer-bg {
		background-image:
			linear-gradient(180deg, rgba(255, 255, 255, 0.03) 0%, rgba(0, 0, 0, 0.5) 100%),
			linear-gradient(
				125deg,
				var(--gray-1) 0%,
				var(--gray-1) 33.33%,
				var(--gray-2) 33.33%,
				var(--gray-2) 66.66%,
				var(--gray-3) 66.66%,
				var(--gray-3) 100%
			);
		background-size: 260% 260%;
		animation: moveHardBackgrounds 24s ease-in-out infinite alternate;
	}

	@keyframes moveHardBackgrounds {
		0% {
			background-position: 0% 20%;
		}
		50% {
			background-position: 100% 80%;
		}
		100% {
			background-position: 20% 100%;
		}
	}
</style>
