<script>
	import { fade } from 'svelte/transition';
	import { tours } from '../../../utils/tours';
	import { page } from '$app/stores';
	const i = $page.params.id;
	let z = 0;
	// <h1>page.params.id === {$page.params.id}</h1>
	const tour = tours.find((tour) => tour.id === i);
	const len = tours[i].src.length - 1;
	$: imgId = 0;
	function nextSlide() {
		if (imgId < len) imgId++;
		else imgId = 0;
	}
	function previousSlide() {
		if (imgId > 0) imgId--;
		else imgId = len;
	}
	function setSlide(z) {
		imgId = z;
	}
</script>

<svelte:head>
	<title>Explore {tours[i].destination}</title>
</svelte:head>

<div class="grid w-full place-items-center py-4 md:pt-24">
	<div class="grid w-11/12 gap-8 md:grid-cols-[7fr_4fr]">
		<div class="flex flex-col">
			<div class="grid grid-cols-[7fr_2fr] rounded bg-gray-200 p-1">
				<div class="relative w-full">
					<!-- svelte-ignore a11y-click-events-have-key-events -->
					<div
						class="absolute left-0 top-0 grid h-full min-w-[10%] place-items-center text-white"
						on:click={previousSlide}>
						<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"
							><path
								fill="currentColor"
								d="M15.41 7.41L14 6l-6 6l6 6l1.41-1.41L10.83 12l4.58-4.59z" /></svg>
					</div>
					<img
						class="aspect-[3/2] w-full rounded"
						src={'../../' + tours[i].src[imgId]}
						alt={'Sights of ' + tours[i].destination} />
					<!-- svelte-ignore a11y-click-events-have-key-events -->
					<div
						class="absolute right-0 top-0 grid h-full min-w-[10%] place-items-center text-white"
						on:click={nextSlide}>
						<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"
							><path
								fill="currentColor"
								d="M15.41 7.41L14 6l-6 6l6 6l1.41-1.41L10.83 12l4.58-4.59z" /></svg>
					</div>
				</div>
				<div
					class="flex flex-col justify-start space-y-1 rounded pl-1 {len > 2
						? 'overflow-y-scroll'
						: ''}">
					{#each tours[i].src as t, z}
						<!-- svelte-ignore a11y-click-events-have-key-events -->
						<div class={imgId === z ? 'brightness-75' : ''}>
							<img
								on:click={() => setSlide(z)}
								class="aspect-[3/2] rounded "
								src={'../../' + tours[i].src[z]}
								alt="" />
						</div>
					{/each}
				</div>
			</div>

			<div class="space-y-2 py-6">
				<h1 class="text-4xl">{tours[i].description}</h1>
				<h4 class="roboto text-lg font-bold text-gray-400">{tours[i].destination}</h4>
				<p class="roboto text-xl">{tours[i].paragraph}</p>
			</div>
		</div>
		<div class="relative">
			<div
				class="top-24 flex flex-col justify-center space-y-4 rounded border p-6 text-center will-change-transform md:sticky">
				<div>
					<h1 class="text-4xl">{tours[i].destination}, Georgia</h1>
					<h3 class="text-base text-gray-400">Vacation Package</h3>
				</div>
				<ul class="grid grid-rows-1">
					<li>For {tours[i].peopleCount}+ People</li>
					<li>Starting from {tours[i].price}$</li>
					<li>Available Vehicles:</li>
					<button
						type="button"
						class="w-full rounded bg-moss-500 p-2 text-center text-moss-100 hover:opacity-75"
						>Book</button>
				</ul>
			</div>
		</div>
	</div>
</div>
