<script lang="ts">
	import PicModal from './PicModal.svelte';
	import Carousel from 'svelte-carousel';
    import { browser } from '$app/environment';
	let carousel;

	
	export let Location: string;
	export let Price: number;
	export let Pics: Array<string>;
	export let id: string;
	let showModal = false;
	//href={`/tour/${tour.id}`}
</script>

<!-- <PicModal show={showModal} on:close={handleClose} bind:tour /> -->
<div
	class="flex flex-col overflow-hidden duration-500 bg-white border rounded-lg shadow-xl text-moss-900 hover:-translate-y-3 hover:scale-105 hover:shadow-2xl dark:border-gray-900 dark:bg-slate-800 group">
	<div class="relative overflow-hidden transition-all rounded-sm group">
		<!-- <img class="aspect-[3/2] w-full" loading="lazy" alt="tour" src={Pics[0]} /> -->
		{#if browser}
			<Carousel
				bind:this={carousel}
				let:showPrevPage
				let:showNextPage
				let:currentPageIndex
				let:showPage
				let:pagesCount
			>
			<div slot="prev" on:click={showPrevPage} class="custom-arrow left-2">
				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
					<g fill="none" fill-rule="evenodd"><path d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092Z"/><path fill="currentColor" d="M8.293 12.707a1 1 0 0 1 0-1.414l5.657-5.657a1 1 0 1 1 1.414 1.414L10.414 12l4.95 4.95a1 1 0 0 1-1.414 1.414l-5.657-5.657Z"/></g>
				</svg>
			</div>
			<div
			slot="dots"
			class="custom-dots"
			style="display:flex; flex-direction:row; gap:4px; cursor:pointer; position:absolute; bottom: 0.5rem ">
			{#each Array(pagesCount) as _, pageIndex (pageIndex)}
				<div class="grid w-2 text-white  rounded-full aspect-square place-items-center {currentPageIndex === pageIndex ? "bg-white" : "opacity-90 bg-gray-300 "}" on:click={() => showPage(pageIndex)}></div>
			{/each}
			</div>
				{#each Pics as pic}
					<img class="aspect-[3/2] w-full md:pointer-events-none" loading="lazy" alt="tour" src={pic} />
				{/each}
			<div slot="next" on:click={showNextPage} class="custom-arrow right-2">
				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
					<g fill="none" fill-rule="evenodd"><path d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092Z"/><path fill="currentColor" d="M15.707 11.293a1 1 0 0 1 0 1.414l-5.657 5.657a1 1 0 1 1-1.414-1.414l4.95-4.95l-4.95-4.95a1 1 0 0 1 1.414-1.414l5.657 5.657Z"/></g>
				</svg>
			</div>
			</Carousel>
		{/if}


	</div>
	<div class="px-3 py-4 shadow-2xl group/text text-moss-500 dark:text-green-400">
		<a class="flex items-center justify-between cursor-pointer" href={`/tour/${id}`}>
			<h1 class="text-3xl">
				{Location}
			</h1>
			<div class="flex items-center justify-around">
				<p class="text-xl">
					<!-- {peopleCount} -->
				</p>
				<svg
					class="w-6 h-6 text-moss-500 dark:text-green-400"
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					color=""
					viewBox="0 0 24 24"
					><path
						fill="currentColor"
						d="M12 4a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4 8-4Z" /></svg>
			</div>
		</a>
		<p
			class="text-sm font-extrabold text-gray-400 transition-all duration-300 roboto truncated dark:text-gray-300">
			<!-- {#each tour.activities as activity, i}
				{#if i != tour.activities.length - 1}
					{activity},&nbsp;
				{:else}
					{activity}...
				{/if}
			{/each} -->
		</p>
	</div>
	<div class="flex bg-gray-100 text-moss-500 dark:bg-gray-900 dark:text-green-400">
		<ul class="grid w-full grid-cols-3 [&>*]:py-3 [&>*]:text-2xl">
			<li class="flex items-center justify-center group/sun">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="32"
					height="32"
					viewBox="0 0 24 24"
					class="duration-500 text-moss-500 group-hover/sun:rotate-180 dark:text-green-400"
					><path
						fill="currentColor"
						d="M12 2.25a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75ZM7.5 12a4.5 4.5 0 1 1 9 0a4.5 4.5 0 0 1-9 0Zm11.394-5.834a.75.75 0 0 0-1.06-1.06l-1.591 1.59a.75.75 0 1 0 1.06 1.061l1.591-1.59ZM21.75 12a.75.75 0 0 1-.75.75h-2.25a.75.75 0 0 1 0-1.5H21a.75.75 0 0 1 .75.75Zm-3.916 6.894a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 1 0-1.061 1.06l1.59 1.591ZM12 18a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-1.5 0v-2.25A.75.75 0 0 1 12 18Zm-4.242-.697a.75.75 0 0 0-1.061-1.06l-1.591 1.59a.75.75 0 0 0 1.06 1.061l1.591-1.59ZM6 12a.75.75 0 0 1-.75.75H3a.75.75 0 0 1 0-1.5h2.25A.75.75 0 0 1 6 12Zm.697-4.243a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 0 0-1.061 1.06l1.59 1.591Z" /></svg>
				<!-- <p>&nbsp;{tour.daysCount}</p> -->
				&nbsp;<span class="text-sm text-gray-400">Days</span>
			</li>

			<li class="flex items-center justify-center">
				<p class="">
					{Price}$
				</p>
			</li>
			<li class="relative flex items-center justify-center">
				<div>
					<button
						type="button"
						class="p-2 px-3 text-base transition-all bg-transparent border rounded border-moss-500 hover:bg-moss-500 hover:text-white dark:border-green-400"
						>Details</button>
				</div>
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
	.custom-arrow{
		@apply absolute z-20 grid w-6 text-gray-800 transition-all -translate-y-1/2 bg-gray-200 rounded-full opacity-0 cursor-pointer group-hover:opacity-80 hover:opacity-80 top-1/2 place-items-center aspect-square;
	}
</style>
