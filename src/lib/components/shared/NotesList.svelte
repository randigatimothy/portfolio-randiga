<script lang="ts">
	import NoteItem from '@/lib/components/shared/NoteItem.svelte';
	import { getNotes } from '@/lib/utils/sanity';
	import { useQuery } from '@sveltestack/svelte-query';
	import { ArrowRight } from '@lucide/svelte';

	const query = useQuery('notes', getNotes);
	export let max: number | null = null;
</script>

<div>
	{#if $query.isLoading}
		<div class="flex flex-col items-center justify-center py-12 text-center">
			<p class="text-muted-foreground animate-pulse text-sm">Loading notes...</p>
		</div>
	{:else if $query.data && $query.data.length > 0}
		<div class="notes-grid">
			{#each $query.data as note, index}
				{#if max === null || index < max}
					<NoteItem data={note} />
				{:else if index === max}
					<a
						href="/notes"
						class="hover:border-b-foreground group flex w-fit items-center gap-2 border-2 border-dashed border-transparent italic transition-all hover:gap-1"
					>
						<span> See all notes </span>
						<ArrowRight class="h-4" />
					</a>
				{/if}
			{/each}
		</div>
	{:else if $query.data && $query.data.length === 0}
		<div class="flex flex-col items-center justify-center rounded-xl border border-dashed py-16 text-center">
			<p class="text-muted-foreground text-lg font-medium">I'll keep you posted</p>
		</div>
	{/if}
</div>

<style>
	.notes-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(min(100%, 280px), 1fr));
		gap: 4rem 2rem;
	}
</style>
