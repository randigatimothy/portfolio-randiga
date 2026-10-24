<script>
	import avatar from '@/lib/assets/randiga.jpeg';
	import BlogList from '@/lib/components/shared/BlogList.svelte';
	import blog from '@/lib/data/blog';

	const sections = [{ sectionName: 'Blog posts', contents: blog }];
</script>

<div class="flex flex-col items-center gap-24 px-4 py-16 md:gap-64 md:py-64" data-scroll-section>
	<!-- intro -->

	<div class="flex flex-col gap-8 md:items-center md:px-4">
		<h1
			class="z-1 font-display text-muted-foreground flex flex-col text-5xl font-semibold leading-tight md:gap-4 md:text-8xl"
		>
			<span data-scroll data-scroll-speed="0.2" data-scroll-delay="1"> Randiga </span>
			<span data-scroll data-scroll-speed="0.13" data-scroll-delay="2"> Timothy </span>
			<span data-scroll data-scroll-speed="0.06" data-scroll-delay="2"> B.H. </span>
		</h1>

		<div
			class="max-w-(--breakpoint-sm) z-0 overflow-hidden rounded-3xl grayscale transition-all duration-1000 hover:filter-none md:p-2"
		>
			<img
				src={avatar}
				alt=""
				class="hover:rounded-6xl h-full w-full rounded-[inherit] object-cover transition-all duration-1000 hover:scale-[1.25]"
			/>
		</div>
	</div>

	<div class="flex flex-col gap-8">
		<div>
			<h6
				data-scroll
				data-scroll-speed="0.1"
				class="text-md text-muted-foreground uppercase leading-tight"
			>
				Who am I
			</h6>
			<p
				data-scroll
				data-scroll-speed="0.05"
				class="max-w-[60ch] pt-8 text-3xl font-semibold leading-snug md:indent-48 md:text-6xl
      "
			>
			Pharmacist. Scientist. Teacher
			</p>
		</div>
		<hr />

		<div class="max-w-(--breakpoint-md) flex flex-col gap-4">
			<p>
					Dear Reader,


            I am a Randiga Harnes, a pharmacist that can't stop asking "why?" I hold big,bold dreams of seeing the world,
            while advancing the care for cancer patients around the world. I am currently pursuing my Masters degree in Cancer Science. 
            On here, you will get to see my thoughts, my work and the notes of things I learn. I believe the best healthcare professionals  
            lift others as they climb, which is why peer leadershipis such a big part of my journey. Welcome to my corner of the internet :).
			</p>
			<p>
			</p>
			<p>
				
			</p>
		</div>
	</div>

	<!-- sections -->

	<div class="flex w-full flex-col gap-8">
		{#each sections as { sectionName, contents }}
			<div class="flex flex-col gap-4 px-4">
				<div class="z-1 bg-background sticky top-[96px] border-b py-4">
					<h2 class="font-display text-2xl font-semibold sm:text-4xl md:text-6xl">{sectionName}</h2>
				</div>
				<BlogList max={3} />
			</div>
		{/each}
	</div>
</div>
