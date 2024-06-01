<script>
	import Footer from './Footer.svelte';
	import PageContent from './PageContent.svelte';
</script>

<div class="relative bg-background text-foreground">
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
