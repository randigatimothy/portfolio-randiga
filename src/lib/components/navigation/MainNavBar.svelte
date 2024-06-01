<script>
	import routes from '@/lib/data/routes';
	import PageContent from '../layout/PageContent.svelte';
</script>

<PageContent>
	<nav class="flex min-w-full gap-8 border-b px-4 pb-4 pt-8">
		{#each routes.mainNav as { name, href }}
			<a {href} class="font-semibold">{name}</a>
		{/each}
	</nav>
</PageContent>
