<script lang="ts">
	import { Sun, Moon } from '@lucide/svelte';

	import { mode, toggleMode } from 'mode-watcher';
	import { Button } from '@/lib/components/ui/button';
</script>

<Button onclick={toggleMode} variant="ghost" size="icon">
	{#if mode.current === 'light'}
		<Sun size={32} />
	{/if}
	{#if mode.current === 'dark'}
		<Moon size={32} />
	{/if}
	<span class="sr-only">Toggle theme</span>
</Button>
