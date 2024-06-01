<script>
	import routes from '@/lib/data/routes';
	import PageContent from '../layout/PageContent.svelte';
</script>

<PageContent>
	{#each routes.mainNav as { name, href }}
		<a {href} class="mx-4 font-semibold">{name}</a>
	{/each}
</PageContent>
