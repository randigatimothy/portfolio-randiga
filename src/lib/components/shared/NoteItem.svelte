<script lang="ts">
	import { formatDate } from '@/lib/utils/date';

	let note: any;
	export { note as data };
</script>

{#if note?.slug?.current}
	<a
		href="/notes/{note.slug.current}"
		class="group flex flex-col overflow-hidden rounded-xl bg-muted/40 text-card-foreground transition-colors hover:bg-muted"
	>
		{#if note.coverImage}
			<figure class="aspect-video w-full overflow-hidden bg-muted">
				<img
					src={note.coverImage}
					alt={note.title ?? ''}
					class="h-full w-full object-cover"
				/>
			</figure>
		{/if}
		<div class="flex flex-1 flex-col justify-between gap-1 p-5">
			<h3 class="text-base font-semibold leading-snug group-hover:underline">
				{note.title}
			</h3>
			<time class="text-muted-foreground text-xs">
				{formatDate(note.publishedAt || note._createdAt)}
			</time>
		</div>
	</a>
{/if}
