<script lang="ts">
	import Hero from '../components/Hero.svelte';
	import Card from '../components/Card.svelte';
	import Search from '../components/Search.svelte';
	import Range from '../components/Range.svelte';
	import Sort from '../components/Sort.svelte';
	import { tours } from '../utils/tours';
	import { collection, getDocs, query, orderBy, limit } from 'firebase/firestore';
	import { db } from '../lib/firebase';
	let loading = true;
	let houses = [];

	let searchQuery = '';
	let sortOption = 0;
	let curMin = 1;
	let curMax = 1000;
	$: processedSearch = searchQuery.toLowerCase();
	$: minMax = [curMin, curMax];
	import { fade } from 'svelte/transition';
	import { onMount } from 'svelte';
	let show = false;
	onMount(() => (show = true));

	$: sortedTours = (() => {
		if (sortOption === 1) {
			return tours.slice().sort((a, b) => a.price - b.price);
		} else if (sortOption === 2) {
			return tours.slice().sort((a, b) => b.price - a.price);
		} else if (sortOption === 3) {
			return tours.slice().sort((a, b) => a.peopleCount - b.peopleCount);
		} else if (sortOption === 4) {
			return tours.slice().sort((a, b) => b.peopleCount - a.peopleCount);
		}
	})();
</script>

<svelte:head>
	<title>Travel Agency</title>
</svelte:head>
<Hero />
<div class="grid w-full place-items-center pb-4">
	<div
		class="mt-10 grid w-11/12 transform grid-cols-1 flex-row items-center gap-3 rounded-xl bg-white p-5 text-2xl shadow-md transition duration-500 after:absolute after:-top-[1px] after:left-0 after:h-2 after:w-full after:rounded-t-xl hover:scale-105 hover:shadow-lg dark:bg-gray-900 md:mt-0 md:grid-cols-[1fr_1fr] lg:w-3/5">
		<div>
			<Search bind:searchQuery />
		</div>
		<div class="flex-row items-center md:flex">
			<Range bind:curMin bind:curMax />
			<Sort bind:sortOption />
		</div>
	</div>
</div>
<section class="mb-5 grid min-h-[100px] w-full place-items-center">
	<div class="grid w-11/12 grid-cols-1 gap-10 md:grid-cols-3 xl:grid-cols-4" id="tours">
		{#if sortOption == 0}
			{#each tours as tour, i}
				{#if tour.destination
					.toLowerCase()
					.includes(processedSearch) && tour.price > minMax[0] && tour.price < minMax[1]}
					<div in:fade={{ delay: i * 100 }} out:fade>
						<Card {tour} />
					</div>
				{/if}
			{/each}
		{:else}
			{#each sortedTours as tour, i}
				<div in:fade={{ delay: i * 100 }} out:fade>
					<Card {tour} />
				</div>
			{/each}
		{/if}
	</div>
</section>

<style lang="scss">
</style>
