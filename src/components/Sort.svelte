<script lang="ts">
	export let sortOption = 0;
</script>

<div class="relative">
	<select
		bind:value={sortOption}
		class="border-moss-500 text-moss-500 focus-within:border-moss-500 mt-2 w-full rounded border py-2 text-center text-xl shadow-inner outline-none dark:bg-gray-800 dark:text-green-400 md:mt-0 md:w-auto">
		<option value={0} class="text-base font-bold">Sort</option>
		<option value={1} class="text-base font-bold">Price Ascending</option>
		<option value={2} class="text-base font-bold">Price Descending</option>
		<option value={3} class="text-base font-bold">Seats Ascending</option>
		<option value={4} class="text-base font-bold">Seats Descending</option>
	</select>
	<!-- <div class="absolute w-1/4 h-full text-gray-300 pointer-events-none -right-5 top-1">
		<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256"
			><path
				fill="currentColor"
				d="m229.7 173.7l-40 40h-.1c-.1.2-.3.3-.5.5l-.3.2l-.4.3l-.3.2l-.3.2h-.4l-.3.2h-.4l-.4.2h-4.6l-.4-.2h-.4l-.3-.2h-.4l-.3-.2l-.3-.2l-.4-.3l-.3-.2l-.5-.5h-.1l-40-40a8.1 8.1 0 0 1 11.4-11.4l26.3 26.4V112a8 8 0 0 1 16 0v76.7l26.3-26.4a8.1 8.1 0 0 1 11.4 11.4ZM120 120H48a8 8 0 0 0 0 16h72a8 8 0 0 0 0-16ZM48 72h136a8 8 0 0 0 0-16H48a8 8 0 0 0 0 16Zm56 112H48a8 8 0 0 0 0 16h56a8 8 0 0 0 0-16Z" /></svg>
	</div> -->
</div>
