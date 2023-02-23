<script>
	import Hero from '../components/Hero.svelte';
	import Card from '../components/Card.svelte';
	import { tours } from '../utils/tours.ts';
	import Search from '../components/Search.svelte';
	let searchQuery = '';
	$: processedSearch = searchQuery.toLowerCase();
</script>

<svelte:head>
	<title>Travel Agency</title>
</svelte:head>
<Hero />
<Search bind:searchQuery />

<section class="grid min-h-[60vh] w-full place-items-center">
	<div
		class="grid w-11/12 grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
		id="tours">
		{#each tours as tour}
			{#if tour.destination.toLowerCase().includes(processedSearch)}
				<a href={`/tour/${tour.id}`}>
					<Card {tour} />
				</a>
			{/if}
		{/each}
	</div>
</section>

<style lang="scss">
</style>
