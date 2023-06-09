<script lang="ts">
	import Hero from '../components/Hero.svelte';
	import Search from '../components/Search.svelte';
	import Range from '../components/Range.svelte';
	import Sort from '../components/Sort.svelte';
	import { db } from '../lib/firebase';
	import { collection, getDocs } from 'firebase/firestore';
	import { onMount } from 'svelte';
	import Card from '../components/Card.svelte';

	let carousel: any;
	let searchQuery = '';
	let curMin = 0;
	let curMax = 1000;
	let sortOption = 0;
	let tours = [];
	const collectionRef = collection(db, 'tours');
	onMount(async () => {
		const querySnapshot = await getDocs(collectionRef);
		let fbTours = [];
		querySnapshot.forEach((doc) => {
			let tour = { ...doc.data(), id: doc.id };
			fbTours = [tour, ...fbTours];
		});

		tours = fbTours;
		console.table(tours);
	});
</script>

<svelte:head>
	<title>Travel Agency</title>
</svelte:head>
<Hero />

<section class="mb-5 grid min-h-[100px] w-full place-items-center">
	<ul class="grid w-11/12 grid-cols-1 gap-10 md:grid-cols-3 xl:grid-cols-4" id="tours">
		{#if tours.length > 0}
			{#each tours as tour, i}
				<Card Location={tour.Location} Price={tour.Price} Pics={tour.Pics} id={tour.id} />
			{/each}
		{:else}
			<p>Loading tours...</p>
		{/if}
	</ul>
</section>
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

<style lang="scss">
</style>
