<script>
	import avatar from '@/lib/assets/randiga.jpeg';
	import BlogItem from '@/lib/components/shared/BlogItem.svelte';
	import blog from '@/lib/data/blog';

	const sections = [{ sectionName: 'Blog posts', contents: blog }];
</script>

<div class="flex flex-col items-center gap-64 py-8" data-scroll-section>
	<!-- intro -->

	<div class="flex flex-col px-4 pt-12 md:items-center md:pt-24">
		<h1
			class="z-[1] flex flex-col gap-4 font-display text-6xl font-semibold leading-tight text-muted-foreground md:text-8xl"
		>
			<span data-scroll data-scroll-speed="0.2" data-scroll-delay="1"> Dr. </span>
			<span data-scroll data-scroll-speed="0.13" data-scroll-delay="2"> Randiga </span>
			<span data-scroll data-scroll-speed="0.06" data-scroll-delay="2"> T.H. </span>
		</h1>

		<div
			class="z-[0] max-w-screen-sm overflow-hidden rounded-3xl p-2 grayscale transition-all duration-1000 hover:filter-none"
		>
			<img
				src={avatar}
				alt=""
				class="h-full w-full rounded-[inherit] object-cover transition-all duration-1000 hover:scale-[1.25]"
			/>
		</div>
	</div>

	<div class="flex flex-col gap-8">
		<div>
			<h6 class="text-md uppercase leading-tight text-muted-foreground">Who am I</h6>
			<p
				data-scroll
				data-scroll-css-progress
				data-scroll-class="c-scroll-opacity"
				class="max-w-[60ch] pt-8 indent-48 text-3xl font-semibold leading-snug md:text-6xl
      "
			>
				A Pharmacist with a passion for patient care. Skilled in medication management and advocacy,
				with a future focus on cancer research.
			</p>
		</div>
		<hr />

		<div class="flex max-w-screen-md flex-col gap-4">
			<p>
				My path to pharmacy wasn't typical. Driven by a desire to bridge the gap between traditional
				medicine and modern science, I earned my Bachelor's in Pharmacy and dove into the
				complexities of cancer treatment through research. This solidified my goal to contribute to
				oncology research in the future.
			</p>
			<p>
				Beyond academics, I craved practical experience. Internships at a children's hospital, a
				pharmaceutical lab, and a quality control facility exposed me to medication preparation,
				manufacturing, and quality control. Witnessing the resilience of young patients and the
				meticulous processes behind safe medications fueled my passion for patient care and the
				entire healthcare system.
			</p>
			<p>
				My leadership extends beyond technical skills. I actively participate in the Young
				Pharmacists Group, advocating for professional development and policy changes. Leading a
				team at the Millenium Campus Network and serving on committees within the Pharmacy Students'
				Association honed my collaboration, communication, and organizational skills. These
				experiences have shaped me into a well-rounded pharmacist with a passion for patient care,
				research, and advocacy.
			</p>
		</div>
	</div>

	<!-- sections -->

	<div class="flex w-full flex-col gap-8">
		{#each sections as { sectionName, contents }}
			<div class="flex flex-col gap-4 px-4">
				<div class="sticky top-[96px] z-[1] border-b bg-background py-4">
					<h2 class="font-display text-2xl font-semibold md:text-6xl">{sectionName}</h2>
				</div>

				{#each contents.slice(0, 3) as c}
					<BlogItem data={c} />
				{/each}
			</div>
		{/each}
	</div>
</div>
