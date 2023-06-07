<script lang="ts">
	import PicModal from './PicModal.svelte';
	export let Location: string;
	export let Price: number;
	export let Pics: Array<string>;
	export let id: string;
	let showModal = false;
	//href={`/tour/${tour.id}`}
</script>

<!-- <PicModal show={showModal} on:close={handleClose} bind:tour /> -->
<div
	class="text-moss-900 flex flex-col overflow-hidden rounded-lg border bg-white shadow-xl duration-500 hover:-translate-y-3 hover:scale-105 hover:shadow-2xl dark:border-gray-900 dark:bg-slate-800">
	<div class="group relative overflow-hidden transition-all">
		<img class="aspect-[3/2] w-full" loading="lazy" alt="tour" src={Pics[0]} />
		<!-- Carousel Here -->
	</div>
	<div class="group/text text-moss-500 px-3 py-4 shadow-2xl dark:text-green-400">
		<a class="flex cursor-pointer items-center justify-between" href={`/tour/${id}`}>
			<h1 class="text-3xl">
				{Location}
			</h1>
			<div class="flex items-center justify-around">
				<p class="text-xl">
					<!-- {peopleCount} -->
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
		</a>
		<p
			class="roboto truncated text-sm font-extrabold text-gray-400 transition-all duration-300 dark:text-gray-300">
			<!-- {#each tour.activities as activity, i}
				{#if i != tour.activities.length - 1}
					{activity},&nbsp;
				{:else}
					{activity}...
				{/if}
			{/each} -->
		</p>
	</div>
	<div class="text-moss-500 flex bg-gray-100 dark:bg-gray-900 dark:text-green-400">
		<ul class="grid w-full grid-cols-3 [&>*]:py-3 [&>*]:text-2xl">
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
						class="border-moss-500 hover:bg-moss-500 rounded border bg-transparent p-2 px-3 text-base transition-all hover:text-white dark:border-green-400"
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
</style>
