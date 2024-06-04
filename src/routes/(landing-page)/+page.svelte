<script>
	import avatar from '@/lib/assets/randiga.jpeg';
	import { Button } from '@/lib/components/ui/button';
	import blog from '@/lib/data/blog';
	import notes from '@/lib/data/notes';

	const sections = [
		{ sectionName: 'Blog posts', contents: blog },
		{ sectionName: 'Notes', contents: notes },
	];
</script>

<div class="flex flex-col gap-16 py-8">
	<!-- intro -->

	<div class="flex flex-col gap-4 px-4">
		<h1 class="font-display text-4xl font-semibold">Dr. Randiga T.H.</h1>

		<div
			class="max-w-screen-sm overflow-hidden border p-2 grayscale transition-all duration-1000 hover:filter-none"
		>
			<img
				src={avatar}
				alt=""
				class="h-full w-full object-cover transition-all duration-1000 hover:scale-[1.25]"
			/>
		</div>

		<p class="max-w-[60ch]">
			Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione excepturi delectus
			consectetur, commodi error voluptate reprehenderit odit alias mollitia fugit, temporibus nulla
			facere molestias hic deserunt. Iusto, modi deserunt. Cupiditate?
		</p>
	</div>

	<!-- sections -->

	<div class="flex flex-col gap-8">
		{#each sections as { sectionName, contents }}
			<div class="flex flex-col gap-4 px-4">
				<div class="sticky top-[73px] z-[1] border-b bg-background py-4">
					<h2 class="font-display text-4xl font-semibold md:text-6xl">{sectionName}</h2>
				</div>

				{#each contents.slice(0, 4) as c}
					<a
						href="/blog/{c?.id}"
						class="content-card grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] items-start justify-start gap-4"
					>
						<figure class="aspect-video w-full flex-1 overflow-hidden">
							<img
								src={c?.image}
								alt=""
								class="h-full w-full object-cover grayscale transition-all duration-1000 hover:scale-[1.25] hover:grayscale-0"
								style:--content-image={c?.id}
							/>
						</figure>
						<div class="grid flex-1 gap-4">
							<h5 class="text-xl font-bold text-primary hover:underline">{c?.title}</h5>
							<p class="max-w-[60ch] text-muted-foreground">
								{c?.caption}
							</p>
							<Button variant="outline" href="/blog/{c?.id}" class="w-fit">Read more</Button>
						</div>
					</a>
				{/each}
			</div>
		{/each}
	</div>
</div>

<style>
	.content-card img {
		view-transition-name: var(--content-image);
	}
</style>
