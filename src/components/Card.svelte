<script>
	import { tours } from '../utils/tours';

	export let tour;
</script>

<!-- <p>{tour.destination}</p>
	<p>{tour.price}</p>
	<p>{tour.daysCount}</p>
	<p>{tour.description}</p> -->

<div class="group flex flex-col overflow-hidden rounded bg-emerald-900 text-white shadow-lg">
	<img class="w-full  " src="/hero-svaneti.jpg" alt="Sunset in the mountains" />
	<div class=" px-6 py-4">
		<a
			href="#"
			class="inline-block text-2xl  transition-all duration-500 ease-in-out group-hover:text-amber-500 "
			>{tour.destination}</a>
		<p class="truncate text-lg text-gray-300 transition-all duration-300 group-hover:text-white">
			{tour.description}
		</p>
	</div>
	<div class="flex bg-emerald-800 px-6 py-3">
		<ul class="grid w-full grid-cols-3">
			<li class="grid place-items-center">
				<p>{tour.peopleCount}(peopleicon)</p>
			</li>
			<li class="grid place-items-center">
				<p>{tour.price}$<span>/each</span></p>
			</li>
			<li class="grid place-items-center">
				<p>{tour.daysCount}(days)</p>
			</li>
		</ul>
	</div>
</div>
