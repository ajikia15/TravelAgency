<script>
	import { page } from '$app/stores';
	import { doc, getDoc } from 'firebase/firestore';
	import { db } from '../../../lib/firebase';
	import { onMount } from 'svelte';

	const slug = $page.params.slug;
	let tour = {};
	const docRef = doc(db, 'tours', slug);
	onMount(async () => {
		const docSnap = await getDoc(docRef);
		if (docSnap.exists()) {
			tour = docSnap.data();
		} else {
			console.log('doesnt exist');
		}
	});
	function getImageUrl(number) {
		return tour.Pics[number];
	}
	let galleryState = false;
	function toggleGalleryState() {
		galleryState = !galleryState;
	}
</script>

<svelte:head>
	<title>Explore {tour.Location || ''}</title>
</svelte:head>
<div class="grid w-full place-items-center py-4 md:pt-[4.5rem]">
	{#if !galleryState}
		<div class="grid w-11/12 gap-8 md:grid-cols-[7fr_4fr]">
			{#if !tour.Location}
				<div>Loading...</div>
			{:else}
				<div class="relative mt-6 flex flex-col overflow-hidden rounded-2xl">
					<div class="relative grid aspect-video w-full grid-cols-2 overflow-hidden rounded-2xl">
						<div class="absolute bottom-3 right-3 z-10 cursor-pointer rounded-lg bg-white p-2 px-4">
							<button on:click={toggleGalleryState}>All Photos</button>
						</div>
						<div class="object-fit mr-2 h-full rounded-l-2xl bg-zinc-800">
							<img
								class="h-full rounded-l-2xl object-cover"
								src={tour.Pics[0]}
								alt="Breathtaking view of {tour.Location}" />
						</div>
						<div class="grid h-full grid-cols-2 gap-x-2 gap-y-2">
							<img
								class="h-full bg-zinc-800 object-cover"
								src={tour.Pics[1]}
								alt="Breathtaking view of {tour.Location}" />
							<img
								class="h-full bg-zinc-800 object-cover"
								src={tour.Pics[2]}
								alt="Breathtaking view of {tour.Location}" />
							<img
								class="h-full bg-zinc-800 object-cover"
								src={tour.Pics[3]}
								alt="Breathtaking view of {tour.Location}" />
							<img
								class="h-full bg-zinc-800 object-cover"
								src={tour.Pics[4]}
								alt="Breathtaking view of {tour.Location}" />
						</div>
					</div>
					<div class="space-y-2 py-6 dark:text-white">
						<h4 class="roboto text-lg font-bold text-gray-400">Why {tour.Location}?</h4>
						<div class="roboto text-xl">
							{#each tour.Description.split(/\/(\d+)\//) as segment, index}
								{#if index % 2 === 0}
									<span>{segment}</span> <!-- Regular text segment -->
								{:else}
									{#each [parseInt(segment, 10)] as imageNumber}
										<img src={getImageUrl(imageNumber)} alt={'Image ' + imageNumber} />
										<!-- Image placeholder -->
									{/each}
								{/if}
							{/each}
						</div>
					</div>
				</div>
			{/if}

			<div class="relative flex flex-col space-y-2">
				<div class="top-24 flex flex-col space-y-2 md:sticky">
					<div
						class="flex flex-col justify-center space-y-5 rounded border bg-white p-7 text-center shadow will-change-transform">
						<div class="space-y-4">
							<h1 class="text-4xl">{tour.Location}, Georgia</h1>
							<h3 class="roboto text-sm text-gray-400">Vacation Package</h3>
						</div>
						<ul
							class="roboto grid border-collapse grid-rows-1 rounded border border-gray-100 text-left shadow-sm">
							<li class="hover:rotate- flex flex-row items-center gap-2 border-t p-2">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									class="text-gray-800"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									><path
										fill="currentColor"
										d="M12 4a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4 8-4Z" /></svg>
								For minPeople People
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
								Starting from {tour.Price}$
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
								<!-- For {tours[i].daysCount} Day{#if tours[i].daysCount > 0}s
							{/if} or More -->
							</li>
							<li class="flex flex-row items-center justify-center gap-2 border-t p-2">
								Available Vehicles:
							</li>
							<ul class="grid grid-cols-3 border-t">
								<li class="grid place-items-center border-r shadow-inner">
									<svg
										class="absolute text-gray-800 transition-all"
										xmlns="http://www.w3.org/2000/svg"
										width="24"
										height="24"
										viewBox="0 0 24 24"
										><path
											fill="currentColor"
											d="M16 6H6l-5 6v3h2a3 3 0 0 0 3 3a3 3 0 0 0 3-3h6a3 3 0 0 0 3 3a3 3 0 0 0 3-3h2v-3c0-1.11-.89-2-2-2h-2l-3-4M6.5 7.5h4V10h-6l2-2.5m5.5 0h3.5l1.96 2.5H12V7.5m-6 6A1.5 1.5 0 0 1 7.5 15A1.5 1.5 0 0 1 6 16.5A1.5 1.5 0 0 1 4.5 15A1.5 1.5 0 0 1 6 13.5m12 0a1.5 1.5 0 0 1 1.5 1.5a1.5 1.5 0 0 1-1.5 1.5a1.5 1.5 0 0 1-1.5-1.5a1.5 1.5 0 0 1 1.5-1.5Z" /></svg>
								</li>
								<li class="grid place-items-center py-2 shadow-inner">
									<svg
										class="text-gray-800 transition-all"
										xmlns="http://www.w3.org/2000/svg"
										width="24"
										height="24"
										viewBox="0 0 24 24"
										><path
											fill="currentColor"
											d="M3 6h13l3 4h2c1.11 0 2 .89 2 2v3h-2a3 3 0 0 1-3 3a3 3 0 0 1-3-3H9a3 3 0 0 1-3 3a3 3 0 0 1-3-3H1V8c0-1.11.89-2 2-2m-.5 1.5V10h8V7.5h-8m9.5 0V10h5.14l-1.89-2.5H12m-6 6A1.5 1.5 0 0 0 4.5 15A1.5 1.5 0 0 0 6 16.5A1.5 1.5 0 0 0 7.5 15A1.5 1.5 0 0 0 6 13.5m12 0a1.5 1.5 0 0 0-1.5 1.5a1.5 1.5 0 0 0 1.5 1.5a1.5 1.5 0 0 0 1.5-1.5a1.5 1.5 0 0 0-1.5-1.5Z" /></svg>
								</li>
								<li class="group relative grid place-items-center border-l shadow-inner">
									<svg
										class="text-gray-800 transition-all"
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
							class="bg-moss-500 text-moss-100 w-full rounded p-2 text-center text-xl opacity-100 transition-all hover:opacity-75"
							>Book</button>
					</div>
					<div class="grid w-full grid-cols-3 gap-2 rounded text-gray-500">
						<div
							class="hover:bg-moss-500 group grid place-items-center rounded border bg-white p-2 shadow transition-all hover:text-white">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="28"
								height="28"
								viewBox="0 0 24 24"
								class=""
								><path
									fill="currentColor"
									d="M18 22q-1.25 0-2.125-.875T15 19q0-.175.025-.363t.075-.337l-7.05-4.1q-.425.375-.95.588T6 15q-1.25 0-2.125-.875T3 12q0-1.25.875-2.125T6 9q.575 0 1.1.213t.95.587l7.05-4.1q-.05-.15-.075-.337T15 5q0-1.25.875-2.125T18 2q1.25 0 2.125.875T21 5q0 1.25-.875 2.125T18 8q-.575 0-1.1-.212t-.95-.588L8.9 11.3q.05.15.075.338T9 12q0 .175-.025.363T8.9 12.7l7.05 4.1q.425-.375.95-.587T18 16q1.25 0 2.125.875T21 19q0 1.25-.875 2.125T18 22Zm0-16q.425 0 .713-.288T19 5q0-.425-.288-.713T18 4q-.425 0-.713.288T17 5q0 .425.288.713T18 6ZM6 13q.425 0 .713-.288T7 12q0-.425-.288-.713T6 11q-.425 0-.713.288T5 12q0 .425.288.713T6 13Zm12 7q.425 0 .713-.288T19 19q0-.425-.288-.713T18 18q-.425 0-.713.288T17 19q0 .425.288.713T18 20Zm0-15ZM6 12Zm12 7Z" /></svg>
						</div>
						<a
							href="tel:+995598857374"
							class="hover:bg-moss-500 group grid place-items-center rounded border bg-white p-2 shadow transition-all hover:text-white">
							<p class="text-xl" aria-label="Contact Phone Number">+995 598 85 73 74</p>
						</a>
						<div
							class="hover:bg-moss-500 group flex items-center justify-center gap-1 rounded border bg-white p-2 shadow transition-all hover:text-white">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class=""
								width="28"
								height="28"
								viewBox="0 0 24 24"
								><path
									fill="currentColor"
									d="m14.777 14.038l2.65-3.92c.262-.386-.235-.805-.615-.529l-2.858 2.015a.571.571 0 0 1-.652 0l-2.116-1.477c-.633-.437-1.538-.277-1.963.335l-2.65 3.92c-.262.386.235.806.615.529l2.858-2.015a.571.571 0 0 1 .652 0l2.116 1.452c.633.462 1.538.302 1.963-.31Z" /><path
									fill="currentColor"
									fill-rule="evenodd"
									d="M12 2.25A9.75 9.75 0 0 0 2.25 12a9.724 9.724 0 0 0 3 7.036V21.5a.75.75 0 0 0 .987.712l2.78-.927A9.745 9.745 0 0 0 12 21.75c5.385 0 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM3.75 12a8.25 8.25 0 1 1 5.516 7.787a.75.75 0 0 0-.486-.004l-2.03.676v-1.75a.75.75 0 0 0-.25-.56A8.228 8.228 0 0 1 3.75 12Z"
									clip-rule="evenodd" /></svg>

							<svg
								xmlns="http://www.w3.org/2000/svg"
								class=""
								width="32"
								height="32"
								viewBox="0 0 24 24"
								><path fill="currentColor" d="M16 7a1 1 0 1 1 2 0a1 1 0 0 1-2 0Z" /><path
									fill="currentColor"
									fill-rule="evenodd"
									d="M12 7.25a4.75 4.75 0 1 0 0 9.5a4.75 4.75 0 0 0 0-9.5ZM8.75 12a3.25 3.25 0 1 1 6.5 0a3.25 3.25 0 0 1-6.5 0Z"
									clip-rule="evenodd" /><path
									fill="currentColor"
									fill-rule="evenodd"
									d="M17.258 2.833a47.721 47.721 0 0 0-10.516 0c-2.012.225-3.637 1.81-3.873 3.832a45.922 45.922 0 0 0 0 10.67c.236 2.022 1.86 3.607 3.873 3.832a47.77 47.77 0 0 0 10.516 0c2.012-.225 3.637-1.81 3.873-3.832a45.914 45.914 0 0 0 0-10.67c-.236-2.022-1.86-3.607-3.873-3.832Zm-10.35 1.49a46.22 46.22 0 0 1 10.184 0c1.33.15 2.395 1.199 2.55 2.517a44.421 44.421 0 0 1 0 10.32a2.89 2.89 0 0 1-2.55 2.516a46.217 46.217 0 0 1-10.184 0a2.89 2.89 0 0 1-2.55-2.516a44.421 44.421 0 0 1 0-10.32a2.89 2.89 0 0 1 2.55-2.516Z"
									clip-rule="evenodd" /></svg>
						</div>
					</div>
				</div>
			</div>
		</div>
	{/if}
</div>

<style lang="scss">
</style>
