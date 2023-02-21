<script>
	import Hero from '../components/Hero.svelte';
	import Card from '../components/Card.svelte';
	import { tours } from '../utils/tours.js';
</script>

<Hero />
<section class="mt-12 grid w-full  place-items-center">
	<div class="mx-4 grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3" id="tours">
		{#each tours as tour}
			<a href={`/tour/${tour.id}`}>
				<Card {tour} />
			</a>
		{/each}
	</div>
</section>

<style lang="scss">
	section {
		grid-template-columns: 5fr 2fr;
	}
</style>
