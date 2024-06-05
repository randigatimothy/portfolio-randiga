<script lang="ts">
	export let author: string;
	export let date: string;

	const formattedDate = new Date(date).toDateString();
</script>

<p>
	<span class="font-semibold">{author}</span>
	<span class="text-secondary-foreground">{formattedDate}</span>
</p>
