<script>
	export let tour;
</script>

<!-- <p>{tour.destination}</p>
	<p>{tour.price}</p>
	<p>{tour.daysCount}</p>
	<p>{tour.description}</p> -->
<div class="flex flex-col rounded-md text-black shadow-md">
	<div class="h-sm max-w-sm rounded-lg bg-emerald-900 ">
		<img class="rounded-t-lg" src="/hero-svaneti.jpg" alt="" />
		<div class="p-5">
			<h5 class="mb-2 text-2xl font-bold tracking-wide text-white">
				{tour.destination}
			</h5>
			<p class="mb-3 font-normal text-white">
				{tour.description}
			</p>
			<a
				href={`/tour/${tour.id}`}
				class="inline-flex items-center rounded-lg bg-amber-500 px-3 py-2 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 focus:ring-amber-500 hover:bg-amber-600
				hover:shadow-md hover:focus:ring-amber-600"
			>
				Read more
				<svg
					aria-hidden="true"
					class="ml-2 -mr-1 h-4 w-4"
					fill="currentColor"
					viewBox="0 0 20 20"
					xmlns="http://www.w3.org/2000/svg"
					><path
						fill-rule="evenodd"
						d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
						clip-rule="evenodd"
					/></svg
				>
			</a>
		</div>
	</div>
</div>
