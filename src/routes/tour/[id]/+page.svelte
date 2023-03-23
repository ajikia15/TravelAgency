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
				class="top-24 flex flex-col justify-center space-y-5 rounded border bg-white p-7 py-10 text-center shadow-lg will-change-transform md:sticky">
				<div class="space-y-4">
					<h1 class="text-4xl">{tours[i].destination}, Georgia</h1>
					<h3 class="roboto text-sm text-gray-400">Vacation Package</h3>
				</div>
				<ul
					class="roboto grid border-collapse grid-rows-1 rounded border border-gray-100 text-left shadow-sm">
					<li class="flex items-center bg-gray-100 p-2 shadow">
						<h2 class="roboto text-left text-xl font-bold">Details:</h2>
					</li>
					<li class="flex flex-row items-center gap-2 border-t p-2">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="text-gray-800"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							><path
								fill="currentColor"
								d="M12 4a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4 8-4Z" /></svg>
						For {tours[i].peopleCount}+ People
					</li>
					<li class="flex flex-row items-center gap-2 border-t p-2">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="text-gray-800"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							><path
								fill="currentColor"
								d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10zm-3.5-8v2H11v2h2v-2h1a2.5 2.5 0 1 0 0-5h-4a.5.5 0 1 1 0-1h5.5V8H13V6h-2v2h-1a2.5 2.5 0 0 0 0 5h4a.5.5 0 1 1 0 1H8.5z" /></svg>
						Starting from {tours[i].price}$
					</li>
					<li class="flex flex-row items-center gap-2 border-t p-2">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="text-gray-800"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							><path
								fill="currentColor"
								d="M12 14q-.425 0-.713-.288T11 13q0-.425.288-.713T12 12q.425 0 .713.288T13 13q0 .425-.288.713T12 14Zm-4 0q-.425 0-.713-.288T7 13q0-.425.288-.713T8 12q.425 0 .713.288T9 13q0 .425-.288.713T8 14Zm8 0q-.425 0-.713-.288T15 13q0-.425.288-.713T16 12q.425 0 .713.288T17 13q0 .425-.288.713T16 14Zm-4 4q-.425 0-.713-.288T11 17q0-.425.288-.713T12 16q.425 0 .713.288T13 17q0 .425-.288.713T12 18Zm-4 0q-.425 0-.713-.288T7 17q0-.425.288-.713T8 16q.425 0 .713.288T9 17q0 .425-.288.713T8 18Zm8 0q-.425 0-.713-.288T15 17q0-.425.288-.713T16 16q.425 0 .713.288T17 17q0 .425-.288.713T16 18ZM5 22q-.825 0-1.413-.588T3 20V6q0-.825.588-1.413T5 4h1V3q0-.425.288-.713T7 2q.425 0 .713.288T8 3v1h8V3q0-.425.288-.713T17 2q.425 0 .713.288T18 3v1h1q.825 0 1.413.588T21 6v14q0 .825-.588 1.413T19 22H5Zm0-2h14V10H5v10Z" /></svg>
						For {tours[i].daysCount} Day{#if tours[i].daysCount > 0}s
						{/if} or More
					</li>
					<li class="flex flex-row items-center justify-center gap-2 border-t p-2">
						Available Vehicles:
					</li>
					<ul class="grid grid-cols-3 border-t">
						<li class="drive relative flex items-center border-r">
							<svg
								class="absolute text-gray-800 transition-all "
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								><path
									fill="currentColor"
									d="M16 6H6l-5 6v3h2a3 3 0 0 0 3 3a3 3 0 0 0 3-3h6a3 3 0 0 0 3 3a3 3 0 0 0 3-3h2v-3c0-1.11-.89-2-2-2h-2l-3-4M6.5 7.5h4V10h-6l2-2.5m5.5 0h3.5l1.96 2.5H12V7.5m-6 6A1.5 1.5 0 0 1 7.5 15A1.5 1.5 0 0 1 6 16.5A1.5 1.5 0 0 1 4.5 15A1.5 1.5 0 0 1 6 13.5m12 0a1.5 1.5 0 0 1 1.5 1.5a1.5 1.5 0 0 1-1.5 1.5a1.5 1.5 0 0 1-1.5-1.5a1.5 1.5 0 0 1 1.5-1.5Z" /></svg>
						</li>
						<li class="grid place-items-center py-2">
							<svg
								class="text-gray-800 transition-all  "
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								><path
									fill="currentColor"
									d="M3 6h13l3 4h2c1.11 0 2 .89 2 2v3h-2a3 3 0 0 1-3 3a3 3 0 0 1-3-3H9a3 3 0 0 1-3 3a3 3 0 0 1-3-3H1V8c0-1.11.89-2 2-2m-.5 1.5V10h8V7.5h-8m9.5 0V10h5.14l-1.89-2.5H12m-6 6A1.5 1.5 0 0 0 4.5 15A1.5 1.5 0 0 0 6 16.5A1.5 1.5 0 0 0 7.5 15A1.5 1.5 0 0 0 6 13.5m12 0a1.5 1.5 0 0 0-1.5 1.5a1.5 1.5 0 0 0 1.5 1.5a1.5 1.5 0 0 0 1.5-1.5a1.5 1.5 0 0 0-1.5-1.5Z" /></svg>
						</li>
						<li class="group relative grid place-items-center border-l">
							<svg
								class=" text-gray-800 transition-all "
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 512 512"
								><path
									fill="currentColor"
									d="m240.287 127.394l-23.78-19.145l108.861-13.892l2.751 21.828zM180.746 107.7h-62.91l-17.88 44.576h136.067zm275.78 247.033a62.91 62.91 0 1 0-62.911 62.91a62.91 62.91 0 0 0 62.91-62.91zm-279.205 0a62.91 62.91 0 1 0-62.91 62.91a62.91 62.91 0 0 0 62.91-62.91zM486 347.25a20.548 20.548 0 0 1-7.922 16.216a84.917 84.917 0 1 0-168.362 4.388H198.31a84.903 84.903 0 1 0-168.788-13.686a26.834 26.834 0 0 1-3.329-16.504l16.753-143.165a22.914 22.914 0 0 1 22.762-20.26h241.904a14.992 14.992 0 0 1 11.787 5.736l44.012 56.089l105.383 22.941zM337.815 239.255l-35.856-50.656h-93.265v50.683h129.135z" /></svg>
						</li>
					</ul>
				</ul>
				<button
					type="button"
					class="w-full rounded bg-moss-500 p-2 text-center text-xl text-moss-100 hover:opacity-75"
					>Book</button>
			</div>
		</div>
	</div>
</div>

<style lang="scss">
	.drive {
		&:hover {
			svg {
				left: 80%;
				animation: drive 0.7s 1 forwards;
			}
		}
		svg {
			transform: translate(-50%, -50%);
			left: 50%;
			top: 50%;
		}
	}
	@keyframes drive {
		0% {
			left: 50%;
		}
		35% {
			left: 93%;
		}
		36% {
			left: 5%;
		}
		60% {
			left: 55%;
		}
		80% {
			left: 45%;
		}
		100% {
			left: 50%;
		}
	}
</style>
