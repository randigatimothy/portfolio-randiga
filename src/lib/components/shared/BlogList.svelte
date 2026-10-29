<script lang="ts">
	import BlogItem from '@/lib/components/shared/BlogItem.svelte';
	import { getBlogPosts } from '@/lib/utils/sanity';
	import { useQuery } from '@sveltestack/svelte-query';
	import { ArrowRight } from '@lucide/svelte';

	const query = useQuery('blogs', getBlogPosts);
	export let max: number | null = null;
</script>

<div class="flex flex-col gap-8">
	{#if $query.isLoading}
		<div class="flex flex-col items-center justify-center py-12 text-center">
			<p class="text-muted-foreground animate-pulse text-sm">Loading posts...</p>
		</div>
	{:else if $query.data && $query.data.length > 0}
		{#each $query.data as blogPost, index}
			{#if max === null || index < max}
				<BlogItem data={blogPost} />
			{:else if index === max}
				<a
					href="/blog"
					class="hover:border-b-foreground group flex w-fit items-center gap-2 border-2 border-dashed border-transparent italic transition-all hover:gap-1"
				>
					<span> See all posts </span>
					<ArrowRight class="h-4" />
				</a>
			{/if}
		{/each}
	{:else if $query.data && $query.data.length === 0}
		<div class="flex flex-col items-center justify-center rounded-xl border border-dashed py-16 text-center">
			<p class="text-muted-foreground text-lg font-medium">I'll keep you posted</p>
		</div>
	{/if}
</div>
