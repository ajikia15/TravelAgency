<script>
	import { tours } from '../utils/tours';

	export let tour;
</script>

<!-- <p>{tour.destination}</p>
	<p>{tour.price}</p>
	<p>{tour.daysCount}</p>
	<p>{tour.description}</p> -->

<div class="group flex flex-col overflow-hidden rounded bg-emerald-800 text-white shadow-lg">
	<div class="overflow-hidden">
		<img
			class="w-full transition-all duration-500 ease-in-out group-hover:scale-[1.05] "
			src={tour.src[0]}
			alt="Sunset in the mountains" />
	</div>
	<div class="px-6 py-4 shadow-2xl">
		<a
			href="#"
			class="inline-block text-2xl  transition-all duration-500 ease-in-out group-hover:text-amber-500 "
			>{tour.destination}</a>
		<p class="truncate text-lg text-gray-300 transition-all duration-300">
			{tour.description}
		</p>
	</div>
	<div class="px-6s flex bg-emerald-900">
		<ul class="[&>*]:text-md grid w-full grid-cols-3 [&>*]:py-3">
			<li class="flex items-center justify-center">
				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" color="" viewBox="0 0 24 24"
					><path
						fill="currentColor"
						d="M12 4a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4 8-4Z" /></svg>
				<p class="">
					{tour.peopleCount}
				</p>
			</li>
			<li class="flex items-center justify-center bg-emerald-900 shadow-inner">
				<p>
					${tour.price}<span class="text-gray-300">/each</span>
				</p>
			</li>
			<li class="flex items-center justify-center ">
				<p class="text-amber-400">{tour.daysCount}&nbsp;&nbsp;</p>

				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					class="text-amber-400 duration-500 group-hover:rotate-180"
					><path
						fill="currentColor"
						d="M12 2.25a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75ZM7.5 12a4.5 4.5 0 1 1 9 0a4.5 4.5 0 0 1-9 0Zm11.394-5.834a.75.75 0 0 0-1.06-1.06l-1.591 1.59a.75.75 0 1 0 1.06 1.061l1.591-1.59ZM21.75 12a.75.75 0 0 1-.75.75h-2.25a.75.75 0 0 1 0-1.5H21a.75.75 0 0 1 .75.75Zm-3.916 6.894a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 1 0-1.061 1.06l1.59 1.591ZM12 18a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-1.5 0v-2.25A.75.75 0 0 1 12 18Zm-4.242-.697a.75.75 0 0 0-1.061-1.06l-1.591 1.59a.75.75 0 0 0 1.06 1.061l1.591-1.59ZM6 12a.75.75 0 0 1-.75.75H3a.75.75 0 0 1 0-1.5h2.25A.75.75 0 0 1 6 12Zm.697-4.243a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 0 0-1.061 1.06l1.59 1.591Z" /></svg>
			</li>
		</ul>
	</div>
</div>
