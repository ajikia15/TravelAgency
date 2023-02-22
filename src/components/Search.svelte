<script>
	export let searchQuery = '';
</script>

<div class="grid w-full -translate-y-1/2 place-items-center">
	<div
		class="relative grid w-11/12 transform grid-cols-1 flex-row items-center gap-3 rounded-xl bg-white p-6 text-2xl shadow-md transition duration-500 after:absolute after:left-0 after:-top-[1px] after:h-2 after:w-full  after:rounded-t-xl hover:scale-105 hover:shadow-lg md:grid-cols-2 xl:w-1/2">
		<div class="flex rounded-lg bg-gray-100 p-4">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-6 w-6 opacity-30"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor">
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
			</svg>
			<input
				class="w-60 bg-gray-100  outline-none"
				type="text"
				placeholder="Where To?"
				bind:value={searchQuery} />
		</div>
		<div>{searchQuery} we are supposed to have a slider here.</div>
	</div>
</div>
