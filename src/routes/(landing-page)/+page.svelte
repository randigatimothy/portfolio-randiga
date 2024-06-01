<script>
	import avatar from '@/lib/assets/randiga.jpeg';
</script>

<div class="flex flex-col gap-4">
	<!-- intro -->

	<div class="flex flex-col gap-4 px-4 py-16">
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

	{#each Array(2) as _}
		<div class="flex flex-col gap-4 px-4 py-16">
			<div class="sticky top-[73px] z-[1] border-b bg-background py-4">
				<h2 class="font-display text-6xl font-semibold">Projects</h2>
			</div>

			{#each Array(3) as _}
				<div class="flex flex-wrap items-start justify-start gap-4">
					<figure class="aspect-video w-full max-w-screen-sm flex-1 overflow-hidden">
						<img src="https://placehold.co/400" alt="" class="h-full w-full object-cover" />
					</figure>
					<p class="min-w-[400px] max-w-[60ch] flex-1">
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur vitae porro ab
						repellendus? Culpa quis minima illum, iure, doloribus fuga, reprehenderit molestiae non
						repellat inventore repellendus. Obcaecati maiores mollitia earum.
					</p>
				</div>
			{/each}
		</div>
	{/each}
</div>
