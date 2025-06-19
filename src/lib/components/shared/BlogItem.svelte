<script lang="ts">
	import { formatDate } from '@/lib/utils/date';
	import { ChevronRight } from 'lucide-svelte';

	let c: any;

	export { c as data };
</script>

<a
	href="/blog/{c?.slug?.current}"
	class="content-card group grid gap-4 md:grid-cols-[repeat(auto-fit,minmax(240px,1fr))]"
>
	<figure class="flex aspect-video h-full w-full flex-1 items-center overflow-hidden bg-red-700">
		<img
			src={c?.coverImage}
			alt=""
			class="min-h-full w-full object-cover grayscale transition-all duration-1000 group-hover:scale-[1.25] group-hover:grayscale-0"
		/>
	</figure>
	<div class="grid flex-1 gap-4 p-4">
		<h5 class="text-primary text-xl font-bold hover:underline">{c?.title}</h5>
		<span class="text-muted-foreground text-sm">Published on {formatDate(c?.publishedAt)}</span>
		<p class="text-muted-foreground max-w-[60ch]">
			{c?.description}
		</p>
		<div class="flex justify-end">
			<ChevronRight
				class="text-muted-foreground transition-all  duration-1000 group-hover:-translate-x-1 group-hover:opacity-100 md:opacity-0"
			/>
		</div>
	</div>
</a>
