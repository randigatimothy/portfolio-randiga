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

<div class="flex flex-col items-center gap-16 py-8" data-scroll-section>
	<!-- intro -->

	<div class="flex flex-col px-4 py-16 md:items-center md:py-36">
		<h1
			class="font-display text-6xl font-semibold leading-tight text-muted-foreground md:text-8xl"
			data-scroll
			data-scroll-speed="-0.5"
		>
			Dr. <br /> Randiga <br /> T.H.
		</h1>

		<div
			class="z-[0] max-w-screen-sm overflow-hidden border p-2 grayscale transition-all duration-1000 hover:filter-none"
		>
			<img
				src={avatar}
				alt=""
				class="h-full w-full object-cover transition-all duration-1000 hover:scale-[1.25]"
			/>
		</div>

		<p class="max-w-[60ch] pt-8">
			I am a highly motivated individual with a meticulous sense of organization and maturity. A
			graduate of Bachelor of Pharmacy, I have a keen interest in patient advocacy and education,
			medication therapy management and in the future, cancer research.
		</p>
	</div>

	<!-- sections -->

	<div class="flex flex-col gap-8">
		{#each sections as { sectionName, contents }}
			<div class="flex flex-col gap-4 px-4">
				<div class="sticky top-[96px] z-[1] border-b bg-background py-4">
					<h2 class="font-display text-2xl font-semibold md:text-6xl">{sectionName}</h2>
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
