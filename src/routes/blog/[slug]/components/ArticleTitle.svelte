<script lang="ts">
	export let slug = '';
	export let title: string;

	const id = title
		.toLowerCase()
		.replace(/[^a-zA-Z ]/g, '')
		.replace(/\s/g, '-');

	const href = slug ? `/blog/${slug}` : '#' + id;
</script>

{#if slug}
	<h3 class="heading font-bold" class:large={!slug} {id}>
		<a {href} class="hover:text-inherit hover:underline">
			{title}
		</a>
	</h3>
{:else}
	<h2 class="heading font-bold" class:large={!slug} {id}>
		<a {href} class="hover:text-inherit hover:underline">
			{title}
		</a>
	</h2>
{/if}

<style>
	h2 {
		margin: 0;
	}

	.heading {
		margin: 0;
		font-size: 1.8rem;
	}

	.large {
		font-size: 2.2rem;
	}
</style>
