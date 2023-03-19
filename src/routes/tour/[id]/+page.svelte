<script>
	import { tours } from '../../../utils/tours';
	import { page } from '$app/stores';
	const i = $page.params.id;
	// <h1>page.params.id === {$page.params.id}</h1>
	const tour = tours.find((tour) => tour.id === i);
	function nextSlide() {
		if (imgId < tours[i].src.length-1) 
		imgId++;
		else imgId = 0;
	}
	$: imgId = 0;
</script>

<svelte:head>
	<title>Explore {tours[i].destination}</title>
</svelte:head>

<div class="grid w-full place-items-center py-4 md:pt-24">
	<div class="grid w-11/12 gap-8 md:grid-cols-[7fr_4fr]">
		<div class="flex flex-col">
			<img
				class="aspect-[3/2] w-full rounded-md"
				src={'../../' + tours[i].src[imgId]}
				alt={'Sights of ' + tours[i].destination} />
			<div class="py-6">
				<h1 class="text-4xl">{tours[i].description}</h1>
				<h4 class="text-gray-400">{tours[i].destination}</h4>
				<p>{tours[i].paragraph}</p>
			</div>
		</div>
		<div class="relative">
			<div
				class="top-24 flex flex-col rounded-md border p-4 text-center will-change-transform md:sticky">
				<h1 class="text-4xl">{tours[i].destination}, Georgia</h1>
				<h3 class="text-base text-gray-400">Vacation Package</h3>
				<ul class="grid grid-rows-1">
					<li>For {tours[i].peopleCount}+ People</li>
					<li>Starting from {tours[i].price}$</li>
					<li>Available Vehicles:</li>
					<li>
						<button
							on:click={nextSlide}
							type="button"
							class="w-full rounded-md bg-moss-500 p-2 text-center text-moss-100 hover:opacity-75"
							>Book</button>
					</li>
				</ul>
			</div>
		</div>
	</div>
</div>
