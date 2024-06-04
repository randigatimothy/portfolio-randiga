<script>
	let items = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];
</script>

Notes page is under construction

<div class="grid">
	{#each items as item (item)}
		<div class="item" animate:flip={{ duration: 500 }}>
			{item}
		</div>
	{/each}
</div>

<style>
	.grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
		gap: 1rem;
	}

	.item {
		padding: 1rem;
		background-color: #eee;
		border-radius: 5px;
		text-align: center;
		cursor: pointer;
	}
</style>
