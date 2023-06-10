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
	<div>
		{#if browser}
			<CarouselModal bind:showModal>
				<Carousel
					bind:this={carousel}
					let:showPrevPage
					let:showNextPage
					let:currentPageIndex
					let:showPage
					let:pagesCount
					{initialPageIndex}>
					<!-- svelte-ignore a11y-click-events-have-key-events -->
					<div slot="prev" on:click={showPrevPage} class="custom-arrow left-2">
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
							<g fill="none" fill-rule="evenodd"
								><path
									d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092Z" /><path
									fill="currentColor"
									d="M8.293 12.707a1 1 0 0 1 0-1.414l5.657-5.657a1 1 0 1 1 1.414 1.414L10.414 12l4.95 4.95a1 1 0 0 1-1.414 1.414l-5.657-5.657Z" /></g>
						</svg>
					</div>
					<div
						slot="dots"
						class="custom-dots"
						style="display:flex; flex-direction:row; gap:4px; cursor:pointer; position:absolute; bottom: 0.5rem ">
						{#each Array(pagesCount) as _, pageIndex (pageIndex)}
							<!-- svelte-ignore a11y-click-events-have-key-events -->
							<div
								class="grid aspect-square w-2 place-items-center rounded-full text-white {currentPageIndex ===
								pageIndex
									? 'bg-white'
									: 'bg-gray-300 opacity-90 '}"
								on:click={() => showPage(pageIndex)} />
						{/each}
					</div>
					{#each tour.Pics as pic}
						<img
							class="aspect-[3/2] w-full md:pointer-events-none"
							loading="lazy"
							alt="tour"
							src={pic} />
					{/each}
					<!-- svelte-ignore a11y-click-events-have-key-events -->
					<div slot="next" on:click={showNextPage} class="custom-arrow right-2">
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
							<g fill="none" fill-rule="evenodd"
								><path
									d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092Z" /><path
									fill="currentColor"
									d="M15.707 11.293a1 1 0 0 1 0 1.414l-5.657 5.657a1 1 0 1 1-1.414-1.414l4.95-4.95l-4.95-4.95a1 1 0 0 1 1.414-1.414l5.657 5.657Z" /></g>
						</svg>
					</div>
				</Carousel>
			</CarouselModal>
		{/if}
		<div class="mx-auto mt-24 w-11/12 md:columns-2 xl:w-4/5 2xl:columns-3">
			{#each tour.Pics as pic, index}
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<img
					class="cursor-pointer rounded-md py-2"
					src={pic}
					key={index}
					style={{ width: '100%' }}
					alt="Adventures in {tour.Location} #{index}"
					on:click={() => openPic(index)} />
			{/each}
		</div>
	</div>
{/if}
