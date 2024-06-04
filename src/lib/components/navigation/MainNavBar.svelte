<script lang="ts">
	import routes from '@/lib/data/routes';
	import PageContent from '../layout/PageContent.svelte';
	import { twMerge } from 'tailwind-merge';

	import { page } from '$app/stores';

	$: currentPage = $page.url.pathname;

	function isCurrentPage(href: string) {
		if (href === '/') return href === currentPage;
		return currentPage.startsWith(href);
	}
</script>

<PageContent>
	<nav class="flex min-w-full gap-8 border-b pt-4">
		{#each routes.mainNav as { name, href }}
			<a {href} class="relative p-4 font-semibold">
				<span class={isCurrentPage(href) ? 'text-primary' : ''}>{name} </span>

				{#if isCurrentPage(href)}
					<span
						id="current-tab-indicator"
						class={twMerge('absolute bottom-0 left-0 h-[4px] w-full bg-primary')}
					>
					</span>
				{/if}
			</a>
		{/each}
	</nav>
</PageContent>

<style>
	nav {
		view-transition-name: nav;
	}

	#current-tab-indicator {
		view-transition-name: current-tab-indicator;
	}
</style>
