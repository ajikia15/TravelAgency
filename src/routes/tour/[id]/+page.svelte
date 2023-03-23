<script lang="ts">
	import { fade } from 'svelte/transition';
	import { tours } from '../../../utils/tours';
	// @ts-ignore
	import { page } from '$app/stores';
	const one: number = 1; // don't ask me why i had to do this
	const i = $page.params.id;
	let z: number = 0;
	// <h1>page.params.id === {$page.params.id}</h1>
	const tour = tours.find((tour) => tour.id === i);
	const len: number = tours[i].src.length;
	$: imgId = 0;
	function nextSlide() {
		if (imgId < len - 1) imgId++;
		else imgId = 0;
	}
	function previousSlide() {
		if (imgId > 0) imgId--;
		else imgId = len - 1;
	}
	function setSlide(z: number) {
		imgId = z;
	}
</script>

<svelte:head>
	<title>Explore {tours[i].destination}</title>
</svelte:head>

<div class="grid w-full place-items-center py-4 md:pt-24 ">
	<div class="grid w-11/12 gap-8 md:grid-cols-[7fr_4fr] ">
		<div class="flex flex-col">
			<div class="grid grid-cols-[7fr_2fr] rounded border bg-white shadow-lg ">
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<div class="p-2">
					<div class="relative w-full rounded">
						<div
							class="absolute left-0 top-0 grid h-full min-w-[13%] place-items-center rounded-l bg-gradient-to-r from-gray-800 text-white opacity-30 transition-all hover:opacity-80"
							on:click={previousSlide}>
							<svg
								class="cursor-pointer"
								xmlns="http://www.w3.org/2000/svg"
								width="48"
								height="48"
								viewBox="0 0 24 24"
								><path
									fill="currentColor"
									d="M15.41 7.41L14 6l-6 6l6 6l1.41-1.41L10.83 12l4.58-4.59z" /></svg>
						</div>
						<img
							class="aspect-[3/2] w-full cursor-pointer rounded"
							src="../../{tours[i].src[imgId]}"
							alt={'Sights of ' + tours[i].destination} />
						<!-- svelte-ignore a11y-click-events-have-key-events -->
						<div
							class="absolute right-0 top-0 grid h-full min-w-[13%] place-items-center rounded-r bg-gradient-to-l from-gray-800 text-white opacity-30 transition-all hover:opacity-80"
							on:click={nextSlide}>
							<svg
								class="cursor-pointer"
								xmlns="http://www.w3.org/2000/svg"
								width="48"
								height="48"
								viewBox="0 0 24 24"
								><path
									fill="currentColor"
									d="M10 6L8.59 7.41L13.17 12l-4.58 4.59L10 18l6-6l-6-6z" /></svg>
						</div>
					</div>
				</div>
				<!-- {len > 3 ? 'overflow-y-scroll' : ''} -->
				<div class="flex flex-col rounded pr-2">
					<div class="flex justify-end pt-2 pb-1">
						<div class="flex flex-row justify-evenly rounded-xl  p-0.5 px-2.5 text-sm ">
							{#each tours[i].src as t, z}
								<button type="button" on:click={() => setSlide(z)}>
									{#if z != imgId}
										<svg
											xmlns="http://www.w3.org/2000/svg"
											class="text-gray-400 dark:text-gray-400"
											width="16"
											height="16"
											viewBox="0 0 24 24"
											><path
												fill="currentColor"
												d="M12 22q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Z" /></svg>
									{:else}
										<svg
											xmlns="http://www.w3.org/2000/svg"
											class="text-moss-500 dark:text-green-400"
											width="16"
											height="16"
											viewBox="0 0 24 24"
											><path
												fill="currentColor"
												d="M12 22q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Z" /></svg>
									{/if}
								</button>
							{/each}
						</div>
					</div>
					<div class="flex h-full flex-col justify-end pb-[0.5rem]">
						{#each tours[i].src as t, z}
							<!-- svelte-ignore a11y-click-events-have-key-events -->
							<div
								class="rounded border-2 md:rounded-sm lg:border-4 {imgId === z
									? ' border-moss-500 bg-moss-500'
									: 'border-gray-200'}">
								<img
									on:click={() => setSlide(z)}
									class="aspect-[3/2] rounded md:rounded-sm {imgId === z
										? ' '
										: 'brightness-[.80] '}"
									src="/../../{tours[i].src[z]}"
									alt="" />
							</div>
						{/each}
					</div>
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
				class="top-24 flex flex-col justify-center space-y-4 rounded border bg-white p-6 text-center shadow-lg will-change-transform md:sticky">
				<div>
					<h1 class="text-4xl">{tours[i].destination}, Georgia</h1>
					<h3 class="text-base text-gray-400">Vacation Package</h3>
				</div>
				<ul class="grid grid-rows-1">
					<li>For {tours[i].peopleCount}+ People</li>
					<li>Starting from {tours[i].price}$</li>
					<li>Available Vehicles:</li>
					<ul class="flex flex-col justify-evenly">
						<li></li>
						<li></li>
						<li></li>
					</ul>
					<button
						type="button"
						class="w-full rounded bg-moss-500 p-2 text-center text-moss-100 hover:opacity-75"
						>Book</button>
				</ul>
			</div>
		</div>
	</div>
</div>
