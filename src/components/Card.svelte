<script>
	import { tours } from '../utils/tours';
	import PicModal from './PicModal.svelte';
	export let tour;
	let showModal = false;
	//href={`/tour/${tour.id}`}
	const handleClose = () => {
		showModal = false;
	};
</script>

<PicModal show={showModal} on:close={handleClose} bind:tour />

<div
	class="flex flex-col overflow-hidden rounded-lg border bg-white text-moss-900 shadow-xl duration-500 hover:-translate-y-3 hover:scale-105 hover:shadow-2xl dark:border-gray-900 dark:bg-slate-800 ">
	<div class="group relative overflow-hidden transition-all">
		<img
			class="aspect-[3/2] w-full transition-all duration-500 ease-in-out group-hover:scale-105"
			src={tour.src[0]} loading="lazy"
			alt={tour.description} />
		<div
			class="absolute top-0 left-0 z-10 flex h-full w-full items-start justify-end bg-gray-700 bg-opacity-0 duration-500 group-hover:bg-opacity-20">
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<div
				on:click={() => (showModal = true)}
				class="m-2 cursor-pointer rounded-sm bg-gray-800 bg-opacity-30 p-2 text-gray-200 opacity-0 duration-500 group-hover:opacity-100 hover:bg-opacity-60 ">
				<svg class="" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 16 16"
					><path
						fill="currentColor"
						fill-rule="evenodd"
						d="M5.828 10.172a.5.5 0 0 0-.707 0l-4.096 4.096V11.5a.5.5 0 0 0-1 0v3.975a.5.5 0 0 0 .5.5H4.5a.5.5 0 0 0 0-1H1.732l4.096-4.096a.5.5 0 0 0 0-.707zm4.344 0a.5.5 0 0 1 .707 0l4.096 4.096V11.5a.5.5 0 1 1 1 0v3.975a.5.5 0 0 1-.5.5H11.5a.5.5 0 0 1 0-1h2.768l-4.096-4.096a.5.5 0 0 1 0-.707zm0-4.344a.5.5 0 0 0 .707 0l4.096-4.096V4.5a.5.5 0 1 0 1 0V.525a.5.5 0 0 0-.5-.5H11.5a.5.5 0 0 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 0 .707zm-4.344 0a.5.5 0 0 1-.707 0L1.025 1.732V4.5a.5.5 0 0 1-1 0V.525a.5.5 0 0 1 .5-.5H4.5a.5.5 0 0 1 0 1H1.732l4.096 4.096a.5.5 0 0 1 0 .707z" /></svg>
			</div>
		</div>
	</div>
	<div class="group/text px-3 py-4 text-moss-500 shadow-2xl dark:text-green-400">
		<div class="flex items-center justify-between ">
			<a
				href="https://en.wikipedia.org/wiki/Svaneti"
				target="_blank"
				class="text-3xl transition-all duration-500 ease-in-out group-hover/text:text-amber-400"
				rel="noreferrer">{tour.destination}</a>
			<div class="flex items-center justify-around">
				<p class="text-xl">
					{tour.peopleCount}
				</p>
				<svg
					class="h-6 w-6 text-moss-500 dark:text-green-400"
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
			class="roboto truncated text-sm font-extrabold text-gray-400 transition-all duration-300 dark:text-gray-300">
			{#each tour.activities as activity, i}
				{#if i != tour.activities.length - 1}
					{activity},&nbsp;
				{:else}
					{activity}...
				{/if}
			{/each}
		</p>
	</div>
	<div class=" flex bg-gray-100 text-moss-500 dark:bg-gray-900 dark:text-green-400">
		<ul class="grid w-full grid-cols-3 [&>*]:py-3 [&>*]:text-2xl">
			<li class="group/sun flex items-center justify-center ">
				<p class=" ">{tour.daysCount}&nbsp;</p>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					class="h-8 w-8 text-moss-500 duration-500 group-hover/sun:rotate-180 dark:text-green-400"
					><path
						fill="currentColor"
						d="M12 2.25a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75ZM7.5 12a4.5 4.5 0 1 1 9 0a4.5 4.5 0 0 1-9 0Zm11.394-5.834a.75.75 0 0 0-1.06-1.06l-1.591 1.59a.75.75 0 1 0 1.06 1.061l1.591-1.59ZM21.75 12a.75.75 0 0 1-.75.75h-2.25a.75.75 0 0 1 0-1.5H21a.75.75 0 0 1 .75.75Zm-3.916 6.894a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 1 0-1.061 1.06l1.59 1.591ZM12 18a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-1.5 0v-2.25A.75.75 0 0 1 12 18Zm-4.242-.697a.75.75 0 0 0-1.061-1.06l-1.591 1.59a.75.75 0 0 0 1.06 1.061l1.591-1.59ZM6 12a.75.75 0 0 1-.75.75H3a.75.75 0 0 1 0-1.5h2.25A.75.75 0 0 1 6 12Zm.697-4.243a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 0 0-1.061 1.06l1.59 1.591Z" /></svg>
			</li>

			<li class="flex items-center justify-center ">
				<p class="">
					{tour.price}$
				</p>
			</li>
			<li class=" relative flex items-center justify-center">
				<a href={`/tour/${tour.id}`}>
					<button
						type="button"
						class="rounded-md border border-moss-500 bg-transparent p-2 px-3 text-base transition-all hover:bg-moss-500 hover:text-white dark:border-green-400 "
						>Details</button>
				</a>
			</li>
		</ul>
	</div>
</div>

<style lang="scss">
	.roboto {
		font-family: 'Roboto', sans-serif;
	}
	.truncated {
		--max-lines: 2;
		overflow: hidden;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: var(--max-lines);
	}
</style>
