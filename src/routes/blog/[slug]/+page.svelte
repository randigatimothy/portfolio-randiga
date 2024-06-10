<script lang="ts">
	import { page } from '$app/stores';
	import { useQuery } from '@sveltestack/svelte-query';

	import ArticleMeta from './components/ArticleMeta.svelte';
	import ArticleTitle from './components/ArticleTitle.svelte';
	import PageHead from './components/PageHead.svelte';
	import PortableText from '@/lib/components/shared/PortableText.svelte';

	import { formatDate } from '@/lib/utils/date';
	import { getBlogPost } from '@/lib/utils/sanity';

	$: slug = $page.params.slug;

	const query = useQuery(['blog_post', slug], async () => await getBlogPost(slug));
</script>

{#if $query.data}
	<div class="flex flex-col items-start px-4 pb-48">
		<div class="flex h-[calc(100dvh-104px)] flex-col gap-8 pb-12">
			<PageHead title={$query.data?.title} description={$query.data?.description} />
			<ArticleTitle title={$query.data?.title} id={slug} />
			<div class="flex h-full flex-1 items-center overflow-hidden rounded-xl">
				<img src={$query.data?.coverImage} alt="" class="h-full w-full object-cover" />
			</div>
			<!-- TODO add author to articles -->
			<ArticleMeta author="Dr. Randiga T.H." date={formatDate($query.data?.publishedAt)} />
		</div>
		<PortableText value={$query.data?.body} />
	</div>
{/if}
