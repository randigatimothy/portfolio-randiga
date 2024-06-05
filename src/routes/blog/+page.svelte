<script>
	import BlogItem from '@/lib/components/shared/BlogItem.svelte';
	import blog from '@/lib/data/blog';
</script>

<div class="flex flex-col gap-8">
	{#each blog as c}
		<BlogItem data={c} />
	{/each}
</div>
