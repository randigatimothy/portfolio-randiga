<script lang="ts">
	import routes from '@/lib/data/routes';
	import PageContent from '../layout/PageContent.svelte';
	import { twMerge } from 'tailwind-merge';

	import { page } from '$app/stores';
	import { Button } from '../ui/button';

	$: currentPage = $page.url.pathname;

	function isCurrentPage(href: string) {
		if (href === '/') return href === currentPage;
		return currentPage.startsWith(href);
	}
</script>

<PageContent>
	<div class="flex w-full max-w-full items-center justify-between px-8 py-8">
		<nav class="flex flex-1 gap-4">
			{#each routes.mainNav as { name, href }}
				<a {href} class="relative p-2 font-semibold">
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
		<Button href="mailto:hrandiga126@gmail.com">Reach out</Button>
	</div>
</PageContent>

<style>
	nav {
		view-transition-name: nav;
	}

	#current-tab-indicator {
		view-transition-name: current-tab-indicator;
	}
</style>
