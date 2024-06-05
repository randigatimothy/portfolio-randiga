<script>
	import '../app.css';
	import '@/lib/styles/fonts.css';
	import '@/lib/styles/typography.css';
	import '@/lib/styles/view-transitions.css';

	import LocomotiveScrollProvider from 'svelte-locomotive-scroll';

	import Cursor from '@/lib/components/transitions/Cursor.svelte';
	import MainNavBar from '@/lib/components/navigation/MainNavBar.svelte';
	import NavigationTransition from '@/lib/components/transitions/NavigationTransition.svelte';
	import WebShell from '@/lib/components/layout/WebShell.svelte';
	import { page } from '$app/stores';
</script>

<NavigationTransition />

<LocomotiveScrollProvider
	options={{
		smooth: true,
		inertia: 0.5,
	}}
	location={$page.url}
	onLocationChange={(scroll) => scroll.scrollTo(0, { duration: 2 })}
>
	<WebShell>
		<MainNavBar slot="header" />
		<main slot="main">
			<slot />
		</main>
	</WebShell>
</LocomotiveScrollProvider>
