<script>
	import { page } from '$app/stores';
	import blog from '@/lib/data/blog';

	$: blog_slug = $page.params.blog_slug;

	$: content = blog.find((b) => b?.id === blog_slug) ?? null;
</script>

{#if !content}
	<h1>Not found</h1>
{:else}
	<figure class="aspect-video w-full flex-1 overflow-hidden">
		<img
			src={content?.image}
			alt=""
			class="content-image h-full w-full object-cover"
			style:--content-image={content?.id}
		/>
	</figure>

	<style>
		img.content-image {
			view-transition-name: var(--content-image);
		}
	</style>
{/if}
