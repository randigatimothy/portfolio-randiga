<script lang="ts">
	import { page } from '$app/state';
	import { useQuery } from '@sveltestack/svelte-query';

	import ArticleMeta from '../../blog/[slug]/components/ArticleMeta.svelte';
	import ArticleTitle from '../../blog/[slug]/components/ArticleTitle.svelte';
	import PageHead from '../../blog/[slug]/components/PageHead.svelte';
	import PortableText from '@/lib/components/shared/PortableText.svelte';

	import { formatDate } from '@/lib/utils/date';
	import { getNote } from '@/lib/utils/sanity';

	const slug = $derived((page.params.notes_slug || page.params.slug) as string);
	const query = $derived(useQuery(['note', slug], async () => await getNote(slug)));
</script>

{#if $query.data}
	<article class="flex w-full flex-col items-start px-6 py-8 pb-48 md:px-12 lg:px-16">
		<div class="flex min-h-[calc(100dvh-160px)] w-full flex-col gap-8 pb-16">
			<PageHead title={$query.data?.title} description={$query.data?.description} />
			<ArticleTitle title={$query.data?.title} id={slug} />
			{#if $query.data?.coverImage}
				<div class="flex h-full flex-1 items-center overflow-hidden rounded-xl">
					<img src={$query.data?.coverImage} alt="" class="min-h-full w-full object-cover" />
				</div>
			{/if}
			<!-- TODO add author to articles -->
			<ArticleMeta
				author="Dr. Randiga T.H."
				date={formatDate($query.data?.publishedAt || $query.data?._createdAt)}
			/>
		</div>
		<div class="w-full pt-8">
			<PortableText value={$query.data?.body} />
		</div>
	</article>
{/if}
