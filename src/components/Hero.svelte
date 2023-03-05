<script>
	import { tours } from '../utils/tours.ts';
	import Card from './Card.svelte';
	let pastState = 0;
	let futureState = 0;
	let activeCard = 0;
	let maxCards = 10; // subject to change
	let trackedCards = 0;
	let plussed = true;
	$: tour = tours.find((tour) => tour.id === activeCard);
	const nextCard = () => {
		plussed = true;
		futureState = futureState == maxCards - 1 ? 0 : futureState + 1;
		pastState = activeCard;
		activeCard = futureState;
	};
	const prevCard = () => {
		plussed = false;
		pastState = pastState == 0 ? maxCards - 1 : pastState - 1;
		futureState = activeCard;
		activeCard = pastState;
	};
</script>

<section
	class="mb-20 grid h-[70vh] bg-white dark:bg-gray-700 dark:text-white md:grid-cols-[1fr_2fr]">
	<header>
		<h1>Hook</h1>
	</header>
	<aside class="grid place-items-center border-2 border-black">
		<div class="grid grid-cols-[2fr_3fr_2fr]">
			<div />
			<div class="group relative min-w-[259px]">
				{#if plussed}
					<div class="pointer-events-none">
						<Card {tour} />
					</div>
				{:else}
					<div class="pointer-events-none">
						<Card {tour} />
					</div>
				{/if}
				<button
					on:click={prevCard}
					class="absolute -bottom-5 -left-5 flex aspect-square w-16 items-center justify-center rounded-full border-4 border-moss-500 bg-white text-moss-400 dark:border-green-400 dark:bg-gray-900 dark:text-green-400"
					><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 256 256"
						><path
							fill="currentColor"
							d="M208.5 191.5a12 12 0 0 1 0 17a12.1 12.1 0 0 1-17 0L128 145l-63.5 63.5a12.1 12.1 0 0 1-17 0a12 12 0 0 1 0-17L111 128L47.5 64.5a12 12 0 0 1 17-17L128 111l63.5-63.5a12 12 0 0 1 17 17L145 128Z" /></svg>
				</button>
				<button
					on:click={nextCard}
					class="absolute -bottom-5 -right-5 flex aspect-square w-16 items-center justify-center rounded-full border-4 border-moss-500 bg-white text-moss-400 dark:border-green-400 dark:bg-gray-900 dark:text-green-400"
					><svg
						class="text-pink-400"
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						><path
							fill="currentColor"
							d="m12 21.35l-1.45-1.32C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5c0 3.77-3.4 6.86-8.55 11.53L12 21.35Z" /></svg>
				</button>
			</div>
			<div />
		</div>
	</aside>
</section>
