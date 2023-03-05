<script>
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();
	export let show = true;
	export let tour;
	let carouselNum = 0;
	const close = () => {
		show = false;
		carouselNum = 0;
		dispatch('close');
	};

	import { fade, fly } from 'svelte/transition';
</script>

{#if show}
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<div
		class="fixed top-0 left-0 z-30 grid h-full w-full place-items-center bg-black bg-opacity-90 "
		on:click={close}>
		<div
			class="relative w-2/3"
			on:click|stopPropagation
			in:fly={{ y: 200, duration: 400 }}
			out:fade={{ duration: 200 }}>
			<div
				class="flex w-full items-center justify-between rounded-t-lg bg-white text-moss-500 transition-all dark:bg-gray-800 dark:text-green-400">
				<div class="flex items-center gap-2 rounded-t-md bg-white p-1.5 px-2 dark:bg-gray-800">
					<div class="group grid place-items-center">
						<button
							class="p group rounded-md border-2 border-gray-300 p-0.5  px-3 text-xl text-gray-300 transition-all hover:border-gray-500 hover:text-gray-500 dark:hover:border-white dark:hover:text-white"
							on:click={close}
							>X
						</button>
					</div>
				</div>
				<div class="flex items-center gap-2 rounded-t-md bg-white p-1.5 px-2 dark:bg-gray-800">
					<a class="grid place-items-center" href={`/tour/${tour.id}`}>
						<button
							type="button"
							class="rounded-md border-2 border-moss-500 bg-white p-1  px-2 transition-all  hover:bg-moss-500 hover:text-white dark:border-green-400 dark:bg-gray-800"
							>More Details &rarr;</button>
					</a>
				</div>
			</div>
			<img alt={tour.destination} src={tour.src[carouselNum]} class="h-full w-full rounded-b-md" />
		</div>
	</div>
{/if}
