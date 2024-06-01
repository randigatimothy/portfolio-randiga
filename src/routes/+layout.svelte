<script>
	import '../app.css';
	import '@/lib/styles/fonts.css';

	import MainNavBar from '@/lib/components/navigation/MainNavBar.svelte';
	import WebShell from '@/lib/components/layout/WebShell.svelte';
</script>

<WebShell>
	<MainNavBar slot="header" />
	<main slot="main">
		<slot />
	</main>
</WebShell>
