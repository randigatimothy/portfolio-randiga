<script lang="ts">
	import { formatDate } from '@/lib/utils/date';
	import { ExternalLink } from '@lucide/svelte';

	let project: any;
	export { project as data };

	const href = $derived(
		project?.slug?.current ? `/projects/${project.slug.current}` : project?.link || null
	);
	const isExternal = $derived(!project?.slug?.current && !!project?.link);
</script>

{#if href}
	<a
		{href}
		target={isExternal ? '_blank' : undefined}
		rel={isExternal ? 'noopener noreferrer' : undefined}
		class="group flex flex-col overflow-hidden rounded-xl bg-muted/60 text-card-foreground transition-colors hover:bg-muted"
	>
		{#if project?.coverImage}
			<figure class="aspect-video w-full overflow-hidden bg-muted">
				<img
					src={project.coverImage}
					alt={project.title ?? ''}
					class="h-full w-full object-cover"
				/>
			</figure>
		{/if}
		<div class="flex flex-1 flex-col justify-between gap-3 p-5">
			<div class="flex flex-col gap-2">
				<div class="flex items-start justify-between gap-2">
					<h3 class="text-base font-semibold leading-snug group-hover:underline">
						{project?.title}
					</h3>
					{#if isExternal}
						<ExternalLink class="text-muted-foreground h-4 w-4 shrink-0" />
					{/if}
				</div>
				{#if project?.description}
					<p class="text-muted-foreground line-clamp-3 text-sm">
						{project.description}
					</p>
				{/if}
			</div>
			{#if project?.publishedAt || project?._createdAt}
				<time class="text-muted-foreground text-xs">
					{formatDate(project.publishedAt || project._createdAt)}
				</time>
			{/if}
		</div>
	</a>
{:else}
	<div
		class="group flex flex-col overflow-hidden rounded-xl bg-muted/60 text-card-foreground transition-colors hover:bg-muted"
	>
		{#if project?.coverImage}
			<figure class="aspect-video w-full overflow-hidden bg-muted">
				<img
					src={project.coverImage}
					alt={project.title ?? ''}
					class="h-full w-full object-cover"
				/>
			</figure>
		{/if}
		<div class="flex flex-1 flex-col justify-between gap-3 p-5">
			<div class="flex flex-col gap-2">
				<h3 class="text-base font-semibold leading-snug">
					{project?.title}
				</h3>
				{#if project?.description}
					<p class="text-muted-foreground line-clamp-3 text-sm">
						{project.description}
					</p>
				{/if}
			</div>
			{#if project?.publishedAt || project?._createdAt}
				<time class="text-muted-foreground text-xs">
					{formatDate(project.publishedAt || project._createdAt)}
				</time>
			{/if}
		</div>
	</div>
{/if}
