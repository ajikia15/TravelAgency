<script>
	import Hero from '../components/Hero.svelte';
	import Card from '../components/Card.svelte';
	import Search from '../components/Search.svelte';
	import { tours } from '../utils/tours.ts';
</script>

<svelte:head>
	<title>Travel Agency</title>
</svelte:head>
<Hero />
<Search />
<section class="mt-12 grid w-full  place-items-center">
	<div class="mx-4 grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3" id="tours">
		{#each tours as tour}
			{#if tour.availability}
				<a href={`/tour/${tour.id}`}>
					<Card {tour} />
				</a>
			{/if}
		{/each}
	</div>
</section>

<style lang="scss">
	section {
		grid-template-columns: 5fr 2fr;
	}
</style>
