<script lang="ts">
	import BlogItem from '@/lib/components/shared/BlogItem.svelte';
	import { getBlogPosts } from '@/lib/utils/sanity';
	import { useQuery } from '@sveltestack/svelte-query';

	const query = useQuery('blogs', getBlogPosts);
	export let max: number | null = null;
</script>

<div class="flex flex-col gap-8">
	{#if $query.data}
		{#each $query.data as blogPost, index}
			{#if max === null || index < max}
				<BlogItem data={blogPost} />
			{:else if index === max}
				<hr />
				<a href="/blog">
					<span> See all posts </span>
				</a>
			{/if}
		{/each}
	{/if}
</div>
