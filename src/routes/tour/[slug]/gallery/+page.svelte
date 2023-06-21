<script>
	import { page } from '$app/stores';
	import { doc, getDoc } from 'firebase/firestore';
	import CarouselModal from '$components/CarouselModal.svelte';
	import { db } from '../../../../lib/firebase';
	const slug = $page.params.slug;
	import Carousel from 'svelte-carousel/src/components/Carousel/Carousel.svelte';
	import { browser } from '$app/environment';

	let carousel;
	let tour = {};
	async function fetchTour() {
		try {
			const docRef = doc(db, 'tours', slug);
			const docSnap = await getDoc(docRef);
			if (docSnap.exists()) {
				tour = docSnap.data();
				// console.log(tour);
			} else {
				// console.log('doesnt exist');
			}
		} catch (error) {
			console.error(error);
		}
	}
	// To call the function:
	fetchTour();
	let initialPageIndex = 0;
	let showModal = false;
	const openPic = (index) => {
		showModal = true;
		initialPageIndex = index;
	};
</script>

{#if tour.Location}
	<div>
		{#if browser}
			<CarouselModal bind:showModal>
				<Carousel
					bind:this={carousel}
					let:showPrevPage
					let:showNextPage
					dots={false}
					{initialPageIndex}>
					<!-- svelte-ignore a11y-click-events-have-key-events -->
					<div
						slot="prev"
						on:click={showPrevPage}
						class="appear fixed left-2 top-1/2 aspect-square -translate-y-1/2 p-4 text-white">
						<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"
							><path
								fill="none"
								stroke="currentColor"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="4"
								d="M31 36L19 24l12-12" /></svg>
					</div>

					{#each tour.Pics as pic}
						<img
							class="aspect-[3/2] h-full w-full bg-transparent md:pointer-events-none"
							loading="lazy"
							alt="tour"
							src={pic} />
					{/each}
					<!-- svelte-ignore a11y-click-events-have-key-events -->
					<div
						slot="next"
						on:click={showNextPage}
						class="appear fixed right-2 top-1/2 aspect-square -translate-y-1/2 p-4 text-white">
						<svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 48 48"
							><path
								fill="none"
								stroke="currentColor"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="4"
								d="m19 12l12 12l-12 12" /></svg>
					</div>
				</Carousel>
			</CarouselModal>
		{/if}
		<div class="mx-auto mt-24 w-11/12 gap-3 space-y-3 md:columns-2 xl:w-4/5 2xl:columns-3">
			{#each tour.Pics as pic, index}
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<div class="break-inside-avoid">
					<img
						class="cursor-pointer rounded-sm"
						src={pic}
						loading="lazy"
						key={index}
						style={{ width: '100%' }}
						alt="Adventures in {tour.Location} #{index}"
						on:click={() => openPic(index)} />
				</div>
			{/each}
		</div>
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
