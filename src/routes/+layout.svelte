<script>
	import '../app.css';
	import '@/lib/styles/fonts.css';
	import '@/lib/styles/typography.css';
	import '@/lib/styles/view-transitions.css';

	import Cursor from '@/lib/components/transitions/Cursor.svelte';
	import MainNavBar from '@/lib/components/navigation/MainNavBar.svelte';
	import NavigationTransition from '@/lib/components/transitions/NavigationTransition.svelte';
	import WebShell from '@/lib/components/layout/WebShell.svelte';
</script>

<NavigationTransition />

<WebShell>
	<MainNavBar slot="header" />
	<main slot="main">
		<slot />
	</main>
</WebShell>
