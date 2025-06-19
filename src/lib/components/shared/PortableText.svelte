<script lang="ts">
	import { PortableText } from '@portabletext/svelte';

	export let value;
</script>

<div class="prose lg:prose-xl dark:**:text-foreground/70">
	<PortableText {value} />
</div>
