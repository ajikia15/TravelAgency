<script>
	import { tours } from '../utils/tours';
	import PicModal from './PicModal.svelte';
	export let tour;
	let showModal = false;
	//href={`/tour/${tour.id}`}
	const handleClose = () => {
		showModal = false;
	};

	import { fade, fly } from 'svelte/transition';
	import { onMount } from 'svelte';
	let mounted = false;
	onMount(() => (mounted = true));
</script>

<PicModal show={showModal} on:close={handleClose} bind:tour />
{#if mounted}
	<div
		class="flex flex-col overflow-hidden rounded bg-emerald-800 text-white shadow-xl duration-500 hover:-translate-y-3 hover:scale-105 hover:shadow-2xl"
		in:fly={{ y: 200, duration: 400, delay: 500 }}>
		<div class="group relative overflow-hidden transition-all ">
			<img
				class="w-full transition-all duration-500 ease-in-out group-hover:scale-105 "
				src={tour.src[0]}
				alt="Sunset in the mountains" />
			<div
				class="absolute top-0 left-0 z-10 flex h-full w-full items-start justify-end bg-gray-700 bg-opacity-0 duration-500 group-hover:bg-opacity-50">
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<div
					on:click={() => (showModal = true)}
					class="m-2 cursor-pointer rounded-sm bg-gray-800 bg-opacity-30 p-2 opacity-0 duration-500 group-hover:opacity-100 hover:bg-opacity-60">
					<svg
						class=""
						xmlns="http://www.w3.org/2000/svg"
						width="22"
						height="22"
						viewBox="0 0 16 16"
						><path
							fill="currentColor"
							fill-rule="evenodd"
							d="M5.828 10.172a.5.5 0 0 0-.707 0l-4.096 4.096V11.5a.5.5 0 0 0-1 0v3.975a.5.5 0 0 0 .5.5H4.5a.5.5 0 0 0 0-1H1.732l4.096-4.096a.5.5 0 0 0 0-.707zm4.344 0a.5.5 0 0 1 .707 0l4.096 4.096V11.5a.5.5 0 1 1 1 0v3.975a.5.5 0 0 1-.5.5H11.5a.5.5 0 0 1 0-1h2.768l-4.096-4.096a.5.5 0 0 1 0-.707zm0-4.344a.5.5 0 0 0 .707 0l4.096-4.096V4.5a.5.5 0 1 0 1 0V.525a.5.5 0 0 0-.5-.5H11.5a.5.5 0 0 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 0 .707zm-4.344 0a.5.5 0 0 1-.707 0L1.025 1.732V4.5a.5.5 0 0 1-1 0V.525a.5.5 0 0 1 .5-.5H4.5a.5.5 0 0 1 0 1H1.732l4.096 4.096a.5.5 0 0 1 0 .707z" /></svg>
				</div>
			</div>
		</div>
		<div class="group/text px-3 py-4 shadow-2xl">
			<div class="flex items-center justify-between ">
				<a
					href="https://en.wikipedia.org/wiki/Svaneti"
					target="_blank"
					class="text-3xl transition-all duration-500 ease-in-out group-hover/text:text-amber-500"
					rel="noreferrer">{tour.destination}</a>
				<div class="flex items-center justify-around opacity-70">
					<p class="text-xl ">
						{tour.peopleCount}
					</p>
					<svg
						class="h-6 w-6"
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
			<p class="roboto truncate text-[0.5rem] text-gray-300 transition-all duration-300 lg:text-xl">
				{tour.description}
			</p>
		</div>
		<div class=" flex bg-emerald-900">
			<ul class="grid w-full grid-cols-3 [&>*]:py-3 [&>*]:text-2xl">
				<li class="group/sun flex items-center justify-center ">
					<p class="text-amber-400">{tour.daysCount}&nbsp;</p>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						class="h-8 w-8 text-amber-400 duration-500 group-hover/sun:rotate-180"
						><path
							fill="currentColor"
							d="M12 2.25a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75ZM7.5 12a4.5 4.5 0 1 1 9 0a4.5 4.5 0 0 1-9 0Zm11.394-5.834a.75.75 0 0 0-1.06-1.06l-1.591 1.59a.75.75 0 1 0 1.06 1.061l1.591-1.59ZM21.75 12a.75.75 0 0 1-.75.75h-2.25a.75.75 0 0 1 0-1.5H21a.75.75 0 0 1 .75.75Zm-3.916 6.894a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 1 0-1.061 1.06l1.59 1.591ZM12 18a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-1.5 0v-2.25A.75.75 0 0 1 12 18Zm-4.242-.697a.75.75 0 0 0-1.061-1.06l-1.591 1.59a.75.75 0 0 0 1.06 1.061l1.591-1.59ZM6 12a.75.75 0 0 1-.75.75H3a.75.75 0 0 1 0-1.5h2.25A.75.75 0 0 1 6 12Zm.697-4.243a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 0 0-1.061 1.06l1.59 1.591Z" /></svg>
				</li>

				<li class="flex items-center justify-center bg-emerald-900">
					<p>
						<span class=" text-xs text-gray-300" />{tour.price}$
					</p>
				</li>
				<li class=" relative flex items-center justify-center  shadow-inner">
					<a href={`/tour/${tour.id}`}>
						<button
							type="button"
							class="rounded-xl border-2 border-amber-500 bg-transparent p-2  text-base text-amber-500 transition-all hover:bg-amber-500 hover:text-white"
							>Details &rarr;</button>
					</a>
				</li>
			</ul>
		</div>
	</div>
{/if}

<style lang="scss">
	.roboto {
		font-family: 'Roboto', sans-serif;
	}
</style>
