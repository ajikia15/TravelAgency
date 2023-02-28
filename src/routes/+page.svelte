<script>
	import Hero from '../components/Hero.svelte';
	import Card from '../components/Card.svelte';
	import { tours } from '../utils/tours.ts';
	import Search from '../components/Search.svelte';
	import Range from '../components/Range.svelte';
	let searchQuery = '';
	let curMin = 1;
	let curMax = 1000;
	$: processedSearch = searchQuery.toLowerCase();
	$: minMax = [curMin, curMax];

	import { fade, fly } from 'svelte/transition';
	import { onMount } from 'svelte';
	let show = false;
	onMount(() => (show = true));
</script>

<svelte:head>
	<title>Travel Agency</title>
</svelte:head>
<Hero />
<div class="grid w-full -translate-y-1/2 place-items-center">
	<div
		class="grid w-11/12 transform grid-cols-1 flex-row items-center gap-3 rounded-xl bg-white p-5 text-2xl shadow-md transition duration-500 after:absolute after:left-0 after:-top-[1px] after:h-2 after:w-full  after:rounded-t-xl hover:scale-105 hover:shadow-lg md:grid-cols-[2fr_1fr] xl:w-1/2">
		<Search bind:searchQuery />
		<Range bind:curMin bind:curMax />
	</div>
</div>
<section class="grid min-h-[60vh] w-full grid-cols-[3fr_1fr] place-items-center">
	<div class="grid w-11/12 grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 " id="tours">
		{#if show}
			{#each tours as tour, i}
				{#if tour.destination
					.toLowerCase()
					.includes(processedSearch) && tour.price > minMax[0] && tour.price < minMax[1]}
					<!-- <div in:fly={{ y: 200, duration: 400, delay: 500 }}> </div> -->
					<div transition:fade={{ delay: 400 + i * 100 }}>
						<Card {tour} />
					</div>
				{/if}
			{/each}
		{/if}
	</div>
</section>

<!-- <a href={`/tour/${tour.id}`}>
	<Card {tour} />
</a> -->
<style lang="scss">
</style>
