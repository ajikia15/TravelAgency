<script>
	import Hero from '../components/Hero.svelte';
	import Card from '../components/Card.svelte';
	import { tours } from '../utils/tours.js';
</script>

<Hero />
<section class="grid w-full place-items-center">
	<div class="mt-12 grid w-4/5 grid-cols-3  gap-12" id="tours">
		{#each tours as tour}
			<a href={`/tour/${tour.id}`}>
				<Card {tour} />
			</a>
		{/each}
	</div>
</section>
