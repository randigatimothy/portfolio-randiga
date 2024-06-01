<script>
	import '../app.css';
	import '@/lib/styles/fonts.css';

	import MainNavBar from '@/lib/components/navigation/MainNavBar.svelte';
	import PageContent from '@/lib/components/layout/PageContent.svelte';
</script>

<MainNavBar />

<PageContent>
	<slot></slot>
</PageContent>
