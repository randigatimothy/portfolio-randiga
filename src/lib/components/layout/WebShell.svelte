<script>
	import { page } from '$app/state';
	import Footer from './Footer.svelte';
	import PageContent from './PageContent.svelte';

	import { createScroll } from '@/lib/utils/scroll';
</script>

{#key page}
	<div class="bg-background text-foreground relative scroll-smooth" use:createScroll>
		<header class="sticky top-0 z-10 bg-inherit">
			<slot name="header" />
		</header>

		<main class="min-h-[calc(100vh-4rem)]">
			<PageContent>
				<slot name="main" />
			</PageContent>
		</main>

		<slot name="footer">
			<Footer />
		</slot>
	</div>
{/key}
