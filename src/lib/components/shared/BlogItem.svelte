<script lang="ts">
	import { Button } from '@/lib/components/ui/button';

	let c: any;

	export { c as data };
</script>

<a
	href="/blog/{c?.id}"
	class="content-card grid items-start justify-start gap-4 md:grid-cols-[repeat(auto-fit,minmax(240px,1fr))]"
>
	<figure class="aspect-video w-full flex-1 overflow-hidden">
		<img
			src={c?.image}
			alt=""
			class="h-full w-full object-cover grayscale transition-all duration-1000 hover:scale-[1.25] hover:grayscale-0"
		/>
	</figure>
	<div class="grid flex-1 gap-4 p-4">
		<h5 class="text-xl font-bold text-primary hover:underline">{c?.title}</h5>
		<p class="max-w-[60ch] text-muted-foreground">
			{c?.caption}
		</p>
		<Button size="lg" variant="outline" href="/blog/{c?.id}" class="w-fit">Read</Button>
	</div>
</a>
