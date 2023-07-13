<script>
	import { browser } from '$app/environment';
	import {
		Dialog,
		DialogContent,
		DialogDescription,
		DialogHeader,
		DialogTitle,
		DialogTrigger
	} from '$components/ui/dialog';
	import EditPopup from './EditPopup.svelte';
	import Carousel from 'svelte-carousel';
	let carousel;

	export let Location;
	export let Price;
	export let Pics;
	export let MinPeople;
	export let id;

	//href={`/tour/${tour.id}`}
</script>

<div
	class="text-moss-900 group flex flex-col overflow-hidden rounded-lg border bg-white shadow-xl duration-500 hover:-translate-y-3 hover:scale-105 hover:shadow-2xl dark:border-gray-900 dark:bg-slate-800">
	<div class="group relative overflow-hidden rounded-sm transition-all">
		<!-- <img class="aspect-[3/2] w-full" loading="lazy" alt="tour" src={Pics[0]} /> -->
		{#if browser}
			<Carousel
				bind:this={carousel}
				let:showPrevPage
				let:showNextPage
				let:currentPageIndex
				let:showPage
				let:pagesCount>
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<div
					slot="prev"
					on:click={showPrevPage}
					class="absolute left-2 top-1/2 z-20 grid aspect-square w-6 -translate-y-1/2 cursor-pointer place-items-center rounded-full bg-gray-200 text-gray-800 opacity-0 transition-all hover:opacity-80 group-hover:opacity-80">
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
				{#each Pics as pic}
					<img
						class="aspect-[3/2] w-full md:pointer-events-none"
						loading="lazy"
						alt="tour"
						src={pic} />
				{/each}
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<div
					slot="next"
					on:click={showNextPage}
					class="absolute right-2 top-1/2 z-20 grid aspect-square w-6 -translate-y-1/2 cursor-pointer place-items-center rounded-full bg-gray-200 text-gray-800 opacity-0 transition-all hover:opacity-80 group-hover:opacity-80">
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
						<g fill="none" fill-rule="evenodd"
							><path
								d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092Z" /><path
								fill="currentColor"
								d="M15.707 11.293a1 1 0 0 1 0 1.414l-5.657 5.657a1 1 0 1 1-1.414-1.414l4.95-4.95l-4.95-4.95a1 1 0 0 1 1.414-1.414l5.657 5.657Z" /></g>
					</svg>
				</div>
			</Carousel>
		{/if}
	</div>
	<div class="group/text text-moss-500 px-3 py-4 shadow-2xl dark:text-green-400">
		<div class="flex cursor-pointer items-center justify-between">
			<h1 class="text-2xl">
				{Location}
				<Dialog>
					<DialogTrigger
						><button
							class="z-30 aspect-square w-6 text-black opacity-60 transition-all hover:opacity-80">
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
								><g id="feEdit0" fill="none" fill-rule="evenodd" stroke="none" stroke-width="1"
									><g id="feEdit1" fill="currentColor"
										><path
											id="feEdit2"
											d="M5 20h14a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Zm-1-5L14 5l3 3L7 18H4v-3ZM15 4l2-2l3 3l-2.001 2.001L15 4Z" /></g
									></g
								></svg>
						</button>
					</DialogTrigger>
					<DialogContent>
						<DialogHeader>
							<DialogTitle>Change Tour</DialogTitle>
							<DialogDescription>
								<EditPopup {id} />
							</DialogDescription>
						</DialogHeader>
					</DialogContent>
				</Dialog>
			</h1>
			<div class="flex items-center justify-around">
				<p class="text-xl">
					{MinPeople}
				</p>
				<svg
					class="text-moss-500 h-6 w-6 dark:text-green-400"
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					color=""
					viewBox="0 0 24 24"
					><path
						fill="currentColor"
						d="M12 4a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4 8-4Z" /></svg>
			</div>
		</div>
		<p
			class="truncated text-sm font-extrabold text-gray-400 transition-all duration-300 dark:text-gray-300" />
	</div>
	<div class="text-moss-500 flex bg-gray-100 dark:bg-gray-900 dark:text-green-400">
		<ul class="grid w-full grid-cols-3 [&>*]:py-3 [&>*]:text-xl">
			<li class="group/sun flex items-center justify-center">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="32"
					height="32"
					viewBox="0 0 24 24"
					class="text-moss-500 duration-500 group-hover/sun:rotate-180 dark:text-green-400"
					><path
						fill="currentColor"
						d="M12 2.25a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75ZM7.5 12a4.5 4.5 0 1 1 9 0a4.5 4.5 0 0 1-9 0Zm11.394-5.834a.75.75 0 0 0-1.06-1.06l-1.591 1.59a.75.75 0 1 0 1.06 1.061l1.591-1.59ZM21.75 12a.75.75 0 0 1-.75.75h-2.25a.75.75 0 0 1 0-1.5H21a.75.75 0 0 1 .75.75Zm-3.916 6.894a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 1 0-1.061 1.06l1.59 1.591ZM12 18a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-1.5 0v-2.25A.75.75 0 0 1 12 18Zm-4.242-.697a.75.75 0 0 0-1.061-1.06l-1.591 1.59a.75.75 0 0 0 1.06 1.061l1.591-1.59ZM6 12a.75.75 0 0 1-.75.75H3a.75.75 0 0 1 0-1.5h2.25A.75.75 0 0 1 6 12Zm.697-4.243a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 0 0-1.061 1.06l1.59 1.591Z" /></svg>
				<!-- <p>&nbsp;{tour.daysCount}</p> -->
				&nbsp;<span class="text-sm text-gray-400">13C</span>
			</li>

			<li class="flex items-center justify-center">
				<p class="">
					{Price}$
				</p>
			</li>
			<li class="relative flex items-center justify-center">
				<a href={`/tour/${id}`}>
					<button
						type="button"
						class="border-moss-500 hover:bg-moss-500 rounded border bg-transparent p-2 px-3 text-base transition-all hover:text-white dark:border-green-400"
						>Details</button>
				</a>
			</li>
		</ul>
	</div>
</div>

<style lang="scss">
	.truncated {
		--max-lines: 2;
		overflow: hidden;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: var(--max-lines);
	}
</style>
