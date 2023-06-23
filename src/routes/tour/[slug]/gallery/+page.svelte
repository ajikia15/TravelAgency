<script>
	import { page } from '$app/stores';
	import { doc, getDoc } from 'firebase/firestore';
	import { onMount } from 'svelte';
	import CarouselModal from '../../../../components/CarouselModal.svelte';
	import { db } from '../../../../lib/firebase';
	const slug = $page.params.slug;
	import Carousel from 'svelte-carousel/src/components/Carousel/Carousel.svelte';
	import { browser } from '$app/environment';

	let carousel;
	let tour = {};
	const docRef = doc(db, 'tours', slug);
	onMount(async () => {
		const docSnap = await getDoc(docRef);
		if (docSnap.exists()) {
			tour = docSnap.data();
			// console.log(tour);
		} else {
			// console.log('doesnt exist');
		}
	});
	let initialPageIndex = 0;
	let showModal = false;
	const openPic = (index) => {
		showModal = true;
		initialPageIndex = index;
	};
</script>

{#if tour.Location}
	{#if browser && showModal}
		<div>asd</div>
	{/if}s
	<div class="w-11/12 gap-3 mx-auto mt-24 space-y-3 md:columns-2 xl:w-4/5 2xl:columns-3">
		{#each tour.Pics as pic, index}
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<div class="break-inside-avoid">
				<img
					class="rounded-sm cursor-pointer"
					src={pic}
					loading="lazy"
					key={index}
					style={{ width: '100%' }}
					alt="Adventures in {tour.Location} #{index}"
					on:click={() => openPic(index)} />
			</div>
		{/each}
	</div>
{/if}

<style>
	.appear {
		opacity: 0;
		animation: fadeAnimation 0.6s forwards;
	}
	@keyframes fadeAnimation {
		0% {
			opacity: 0;
		}
		50% {
			opacity: 0;
		}
		100% {
			opacity: 0.7;
		}
	}
</style>
