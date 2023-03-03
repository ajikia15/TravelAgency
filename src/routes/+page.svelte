<script>
	import Hero from '../components/Hero.svelte';
	import Card from '../components/Card.svelte';
	import Search from '../components/Search.svelte';
	import Range from '../components/Range.svelte';
	import Sort from '../components/Sort.svelte';

	import { tours } from '../utils/tours.ts';
	let searchQuery = '';
	let curMin = 1;
	let curMax = 1000;
	$: processedSearch = searchQuery.toLowerCase();
	$: minMax = [curMin, curMax];

	import { fade } from 'svelte/transition';
	import { onMount } from 'svelte';
	let show = false;
	onMount(() => (show = true));
</script>

<svelte:head>
	<title>Travel Agency</title>
</svelte:head>
<Hero />
<div class=" relative mb-24 grid w-full place-items-center md:mb-20">
	<div
		class="-top-15 absolute grid w-11/12 transform grid-cols-1 flex-row items-center gap-3 rounded-xl bg-white p-5 text-2xl shadow-md transition duration-500 after:absolute after:left-0 after:-top-[1px] after:h-2 after:w-full after:rounded-t-xl hover:scale-105 hover:shadow-lg md:grid-cols-[3fr_2fr_1fr] lg:w-3/5">
		<Search bind:searchQuery />
		<Range bind:curMin bind:curMax />
		<Sort />
	</div>
</div>
<section class="grid min-h-[max] w-full place-items-center sm:grid-cols-[3fr_1fr]">
	<div class="grid w-11/12 grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3" id="tours">
		{#if show}
			{#each tours as tour, i}
				{#if tour.destination
					.toLowerCase()
					.includes(processedSearch) && tour.price > minMax[0] && tour.price < minMax[1]}
					<div in:fade={{ delay: i * 100 }} out:fade>
						<Card {tour} />
					</div>
				{/if}
			{/each}
		{/if}
	</div>
</section>

<style lang="scss">
</style>
