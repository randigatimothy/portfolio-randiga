<script lang="ts">
	import BlogItem from '@/lib/components/shared/BlogItem.svelte';
	import { getBlogPosts } from '@/lib/utils/sanity';
	import { useQuery } from '@sveltestack/svelte-query';
	import { ArrowRight } from 'lucide-svelte';

	const query = useQuery('blogs', getBlogPosts);
	export let max: number | null = null;
</script>

<div class="flex flex-col gap-8">
	{#if $query.data}
		{#each $query.data as blogPost, index}
			{#if max === null || index < max}
				<BlogItem data={blogPost} />
			{:else if index === max}
				<a
					href="/blog"
					class="group flex w-fit items-center gap-2 border-2 border-dashed border-transparent italic transition-all hover:gap-1 hover:border-b-foreground"
				>
					<span> See all posts </span>
					<ArrowRight class="h-4" />
				</a>
			{/if}
		{/each}
	{/if}
</div>
