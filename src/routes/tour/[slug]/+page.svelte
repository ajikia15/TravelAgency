<script>
	import { page } from '$app/stores';
	import { doc, getDoc } from 'firebase/firestore';
	import { db } from '../../../lib/firebase';
	import { list } from '../../../lib/list';
	import autoAnimate from '@formkit/auto-animate';
	import {
		Accordion,
		AccordionContent,
		AccordionItem,
		AccordionTrigger
	} from '$components/ui/accordion';
	const slug = $page.params.slug;
	let tour = {};
	let activityNumbers = [];
	async function fetchTour() {
		try {
			const docRef = doc(db, 'tours', slug);
			const docSnap = await getDoc(docRef);
			if (docSnap.exists()) {
				tour = docSnap.data();
				// console.log(tour.Activities.split(','));
				activityNumbers = tour.Activities.split(',');
			} else {
				console.log('doesnt exist');
			}
		} catch (error) {
			console.error(error);
		}
	}
	// console.table(list);
	// To call the function:
	fetchTour();
	function getImageUrl(number) {
		return tour.Pics[number];
	}
</script>

<svelte:head>
	<title>Explore {tour.Location || ''}</title>
</svelte:head>
<div class="grid w-full place-items-center py-4 md:pt-[4.5rem]">
	<div class="grid w-11/12 gap-8 md:grid-cols-[7fr_4fr]" use:autoAnimate>
		{#if !tour.Location}
			<div role="status" class="mx-auto w-full animate-pulse">
				<div class="flex w-full flex-col justify-start">
					<div class="mb-2 h-2.5 w-40 rounded-full bg-gray-200 dark:bg-gray-700" />
					<div class="mb-4 h-2.5 w-48 rounded-full bg-gray-200 dark:bg-gray-700" />
					<div
						class="mb-2 flex aspect-video w-full items-center justify-center rounded bg-gray-300 dark:bg-gray-700">
						<svg
							class="h-12 w-12 text-gray-200"
							xmlns="http://www.w3.org/2000/svg"
							aria-hidden="true"
							fill="currentColor"
							viewBox="0 0 640 512">
							<path
								d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" />
						</svg>
					</div>
					<div class="w-full">
						<div class="mb-4 h-2.5 w-48 rounded-full bg-gray-200 dark:bg-gray-700" />
						<div class="mb-2.5 h-2 max-w-[480px] rounded-full bg-gray-200 dark:bg-gray-700" />
						<div class="mb-2.5 h-2 rounded-full bg-gray-200 dark:bg-gray-700" />
						<div class="mb-2.5 h-2 max-w-[440px] rounded-full bg-gray-200 dark:bg-gray-700" />
						<div class="mb-2.5 h-2 max-w-[460px] rounded-full bg-gray-200 dark:bg-gray-700" />
						<div class="h-2 max-w-[360px] rounded-full bg-gray-200 dark:bg-gray-700" />
					</div>

					<span class="sr-only">Loading...</span>
				</div>
			</div>
		{:else}
			<div class="relative mt-6 flex w-full flex-col overflow-hidden rounded-2xl">
				<div class="relative grid aspect-video w-full grid-cols-2 overflow-hidden rounded-2xl">
					<a
						href="/tour/{slug}/gallery"
						class="absolute bottom-3 right-3 z-10 cursor-pointer rounded-lg bg-white p-2 px-4 font-semibold">
						<p>All Photos</p>
					</a>
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
					<h4 class="text-lg font-semibold text-gray-400">Why {tour.Location}?</h4>
					<div class="text-xl">
						{#each tour.Description.split(/\/(\d+)\//) as segment, index}
							{#if index % 2 === 0}
								<span>{segment}</span> <!-- Regular text segment -->
							{:else}
								{#each [parseInt(segment, 10)] as imageNumber}
									<img src={getImageUrl(imageNumber)} alt={'Image ' + imageNumber} />
								{/each}
							{/if}
						{/each}
					</div>
				</div>
			</div>
		{/if}

		<div class="relative flex flex-col space-y-2">
			<div class="top-24 flex flex-col space-y-2 md:sticky">
				{#if tour.Location}
					<div
						class="flex w-full flex-col justify-center space-y-5 rounded border bg-white p-7 text-center shadow will-change-transform">
						<div class="space-y-4">
							<h1 class="text-3xl font-bold">{tour.Location}, Georgia</h1>
							<h3 class="text-sm text-gray-400">Vacation Package</h3>
						</div>
						<ul
							class="grid border-collapse grid-rows-1 rounded border border-gray-100 text-left shadow-sm">
							<li class="flex flex-row items-center gap-x-2 border-t p-3 font-semibold">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									class="text-gray-800"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									><path
										fill="currentColor"
										d="M12 4a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4 8-4Z" /></svg>
								For {tour.MinPeople}+ People
							</li>
							<li class="flex flex-row items-center gap-2 border-t p-3 font-semibold">
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
							<li class="flex flex-row items-center gap-2 border-t p-3 font-semibold">
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
								Days
							</li>
							<Accordion type="single" collapsible class="w-full border-t">
								<AccordionItem value="item-1" class="px-3">
									<AccordionTrigger class="py-3"
										><div class="flex flex-row gap-x-2">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="24"
												height="24"
												viewBox="0 0 24 24"
												><path
													fill="currentColor"
													d="m7 23l3.075-15.55q.15-.725.675-1.088T11.85 6q.575 0 1.063.25T13.7 7l1 1.6q.45.725 1.163 1.313t1.637.862V9H19v14h-1.5V12.85q-1.2-.275-2.225-.875T13.5 10.5l-.6 3l2.1 2V23h-2v-6l-2.1-2l-1.8 8H7Zm.425-9.875l-2.125-.4q-.4-.075-.625-.413t-.15-.762l.75-3.925q.15-.8.85-1.263t1.5-.312l1.15.225l-1.35 6.85ZM13.5 5.5q-.825 0-1.413-.588T11.5 3.5q0-.825.588-1.413T13.5 1.5q.825 0 1.413.588T15.5 3.5q0 .825-.588 1.413T13.5 5.5Z" /></svg
											>Activities
										</div>
									</AccordionTrigger>
									<AccordionContent>
										<h4 class="opacity-40">Included, but not limited To</h4>
										<ul class="grid grid-cols-1 space-y-2 pt-3 font-semibold">
											{#each list as activity}
												{#if activityNumbers.includes(activity.id.toString())}
													<li class="flex flex-row items-center space-x-2.5 text-base">
														<!-- {activity.id} -->
														<img src={`/svgs/${activity.id}.svg `} alt="" width="30" height="30" />
														<p>{activity.name}</p>
													</li>
												{/if}
											{/each}
										</ul>
									</AccordionContent>
								</AccordionItem>
								<AccordionItem value="item-2" class="border-b-0 px-3">
									<AccordionTrigger class="py-3"
										><div class="flex flex-row gap-x-2">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="24"
												height="24"
												viewBox="0 0 1024 1024"
												><path
													fill="currentColor"
													d="M959 413.4L935.3 372a8 8 0 0 0-10.9-2.9l-50.7 29.6l-78.3-216.2a63.9 63.9 0 0 0-60.9-44.4H301.2c-34.7 0-65.5 22.4-76.2 55.5l-74.6 205.2l-50.8-29.6a8 8 0 0 0-10.9 2.9L65 413.4c-2.2 3.8-.9 8.6 2.9 10.8l60.4 35.2l-14.5 40c-1.2 3.2-1.8 6.6-1.8 10v348.2c0 15.7 11.8 28.4 26.3 28.4h67.6c12.3 0 23-9.3 25.6-22.3l7.7-37.7h545.6l7.7 37.7c2.7 13 13.3 22.3 25.6 22.3h67.6c14.5 0 26.3-12.7 26.3-28.4V509.4c0-3.4-.6-6.8-1.8-10l-14.5-40l60.3-35.2a8 8 0 0 0 3-10.8zM264 621c-22.1 0-40-17.9-40-40s17.9-40 40-40s40 17.9 40 40s-17.9 40-40 40zm388 75c0 4.4-3.6 8-8 8H380c-4.4 0-8-3.6-8-8v-84c0-4.4 3.6-8 8-8h40c4.4 0 8 3.6 8 8v36h168v-36c0-4.4 3.6-8 8-8h40c4.4 0 8 3.6 8 8v84zm108-75c-22.1 0-40-17.9-40-40s17.9-40 40-40s40 17.9 40 40s-17.9 40-40 40zM220 418l72.7-199.9l.5-1.3l.4-1.3c1.1-3.3 4.1-5.5 7.6-5.5h427.6l75.4 208H220z" /></svg
											>Available Vehicles
										</div></AccordionTrigger>
									<AccordionContent>
										included, but not limited To
										<ul class="grid grid-cols-1 space-y-2 pt-2 font-semibold">
											<li class="flex flex-row space-x-2">
												<p>i</p>
												<p>Sex</p>
											</li>

											<li class="flex flex-row space-x-2">
												<p>i</p>
												<p>Sex</p>
											</li>

											<li class="flex flex-row space-x-2">
												<p>i</p>
												<p>Sex</p>
											</li>
										</ul>
									</AccordionContent>
								</AccordionItem>
							</Accordion>
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
							<p class="text-md" aria-label="Contact Phone Number">+995 598 85 73 74</p>
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
					<div class="h-[35vh] w-full">asdas</div>
				{:else}
					<div
						role="status"
						class="max-w-full animate-pulse space-y-4 divide-y divide-gray-200 rounded border border-gray-200 p-4 shadow dark:divide-gray-700 dark:border-gray-700 md:p-6">
						<div class="flex items-center justify-between">
							<div>
								<div class="mb-2.5 h-2.5 w-24 rounded-full bg-gray-300 dark:bg-gray-600" />
								<div class="h-2 w-32 rounded-full bg-gray-200 dark:bg-gray-700" />
							</div>
							<div class="h-2.5 w-12 rounded-full bg-gray-300 dark:bg-gray-700" />
						</div>
						<div class="flex items-center justify-between pt-4">
							<div>
								<div class="mb-2.5 h-2.5 w-24 rounded-full bg-gray-300 dark:bg-gray-600" />
								<div class="h-2 w-32 rounded-full bg-gray-200 dark:bg-gray-700" />
							</div>
							<div class="h-2.5 w-12 rounded-full bg-gray-300 dark:bg-gray-700" />
						</div>
						<div class="flex items-center justify-between pt-4">
							<div>
								<div class="mb-2.5 h-2.5 w-24 rounded-full bg-gray-300 dark:bg-gray-600" />
								<div class="h-2 w-32 rounded-full bg-gray-200 dark:bg-gray-700" />
							</div>
							<div class="h-2.5 w-12 rounded-full bg-gray-300 dark:bg-gray-700" />
						</div>
						<div class="flex items-center justify-between pt-4">
							<div>
								<div class="mb-2.5 h-2.5 w-24 rounded-full bg-gray-300 dark:bg-gray-600" />
								<div class="h-2 w-32 rounded-full bg-gray-200 dark:bg-gray-700" />
							</div>
							<div class="h-2.5 w-12 rounded-full bg-gray-300 dark:bg-gray-700" />
						</div>
						<div class="flex items-center justify-between pt-4">
							<div>
								<div class="mb-2.5 h-2.5 w-24 rounded-full bg-gray-300 dark:bg-gray-600" />
								<div class="h-2 w-32 rounded-full bg-gray-200 dark:bg-gray-700" />
							</div>
							<div class="h-2.5 w-12 rounded-full bg-gray-300 dark:bg-gray-700" />
						</div>
						<span class="sr-only">Loading...</span>
					</div>
				{/if}
			</div>
		</div>
	</div>
</div>

<style lang="scss">
</style>
