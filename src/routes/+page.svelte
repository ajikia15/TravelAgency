<script lang="ts">
	import Hero from '../components/Hero.svelte';
	import Search from '../components/Search.svelte';
	import Range from '../components/Range.svelte';
	import Sort from '../components/Sort.svelte';
	import Card from '../components/Card.svelte';
	import AdminCard from '../components/AdminCard.svelte';
	import { db } from '../lib/firebase';
	import { collection, getDocs } from 'firebase/firestore';

	const iteration = 4;
	let searchQuery = '';
	let curMin = 0;
	let curMax = 1000;
	let sortOption = 0;
	let tours = [];
	const collectionRef = collection(db, 'tours');
	async function fetchTours() {
		try {
			const querySnapshot = await getDocs(collectionRef);
			let fbTours = [];
			querySnapshot.forEach((doc) => {
				let tour = { ...doc.data(), id: doc.id };
				fbTours = [tour, ...fbTours];
			});
			tours = fbTours;
		} catch (error) {
			console.error(error);
		}
	}
	// To call the function:
	fetchTours();
	$: processedSearch = searchQuery.toLowerCase();
	$: minMax = [curMin, curMax];
	$: sortedTours = (() => {
		if (sortOption === 1) {
			return tours.slice().sort((a, b) => a.Price - b.Price);
		} else if (sortOption === 2) {
			return tours.slice().sort((a, b) => b.Price - a.Price);
		} else if (sortOption === 3) {
			return tours.slice().sort((a, b) => a.MinPeople - b.MinPeople);
		} else if (sortOption === 4) {
			return tours.slice().sort((a, b) => b.MinPeople - a.MinPeople);
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
	<ul class="grid w-11/12 grid-cols-1 gap-10 md:grid-cols-3 xl:grid-cols-4" id="tours">
		<AdminCard />
		{#if tours.length > 0}
			{#if sortOption == 0}
				{#each tours as tour}
					{#if tour.Location.toLowerCase().includes(processedSearch) && tour.Price > minMax[0] && tour.Price < minMax[1]}
						<div>
							<Card
								Location={tour.Location}
								Price={tour.Price}
								Pics={tour.Pics}
								MinPeople={tour.MinPeople}
								id={tour.id} />
						</div>
					{/if}
				{/each}
			{:else}
				{#each sortedTours as tour}
					<div>
						<Card
							Location={tour.Location}
							Price={tour.Price}
							Pics={tour.Pics}
							MinPeople={tour.MinPeople}
							id={tour.id} />
					</div>
				{/each}
			{/if}
		{:else}
			{#each Array(iteration) as _, i}
				<div
					role="status"
					class="max-w-sm animate-pulse rounded border border-gray-200 p-4 shadow dark:border-gray-700 md:p-6">
					<div
						class="mb-4 flex h-48 items-center justify-center rounded bg-gray-300 dark:bg-gray-700">
						<svg
							class="h-12 w-12 text-gray-200 dark:text-gray-600"
							xmlns="http://www.w3.org/2000/svg"
							aria-hidden="true"
							fill="currentColor"
							viewBox="0 0 640 512"
							><path
								d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" /></svg>
					</div>
					<div class="mb-4 h-2.5 w-48 rounded-full bg-gray-200 dark:bg-gray-700" />
					<div class="mb-2.5 h-2 rounded-full bg-gray-200 dark:bg-gray-700" />
					<div class="mb-2.5 h-2 rounded-full bg-gray-200 dark:bg-gray-700" />
					<div class="h-2 rounded-full bg-gray-200 dark:bg-gray-700" />
					<span class="sr-only">Loading...</span>
				</div>
			{/each}
		{/if}
	</ul>
</section>

<style lang="scss">
</style>
