<script lang="ts">
	import type { PageData } from './$types';
	import type { SvelteComponentTyped } from 'svelte/internal';

	import PageHead from './components/PageHead.svelte';
	import ArticleTitle from './components/ArticleTitle.svelte';
	import ArticleMeta from './components/ArticleMeta.svelte';

	export let data: PageData;

	type C = $$Generic<typeof SvelteComponentTyped<any, any, any>>;
	$: component = data.component as unknown as C;
</script>

<div class="flex flex-col gap-8">
	<PageHead title={data.frontmatter.title} description={data.frontmatter.description} />
	<div class="flex flex-col gap-2">
		<ArticleTitle title={data.frontmatter.title} />
		<ArticleMeta author={data.frontmatter.author} date={data.frontmatter.date} />
	</div>

	<div class="flex flex-col gap-4">
		<svelte:component this={component} />
	</div>
</div>
