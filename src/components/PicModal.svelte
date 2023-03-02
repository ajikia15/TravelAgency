<script>
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();
	export let show = true;
	export let tour;
	const close = () => {
		show = false;
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
			class="relative w-2/3 bg-white"
			on:click|stopPropagation
			in:fly={{ y: 200, duration: 400 }}
			out:fade>
			<img alt="" src={tour.src[0]} class="h-full w-full" />
			<div
				class="absolute right-0 -top-12 flex w-full items-center justify-between bg-emerald-900 p-2 text-white">
				<a class="grid place-items-center" href={`/tour/${tour.id}`}>
					<button
						type="button"
						class="rounded-xl border-2 border-amber-500 p-2 px-3 text-amber-500 transition-all hover:bg-amber-500 hover:text-white"
						>More Details &rarr;</button>
				</a>
				<div class="group grid place-items-center">
					<button
						class=" group rounded-md border-2 border-amber-500 group-hover:bg-amber-500"
						on:click={close}
						><svg
							xmlns="http://www.w3.org/2000/svg"
							width="32"
							height="32"
							viewBox="0 0 24 24"
							class="fill-amber-500 transition-all group-hover:fill-white"
							><path fill="" d="m9 7l2 5l-2 5h2l1-2.5l1 2.5h2l-2-5l2-5h-2l-1 2.5L11 7H9Z" /></svg>
					</button>
				</div>
			</div>
		</div>
	</div>
{/if}
