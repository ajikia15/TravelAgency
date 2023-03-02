<script lang="ts">
	export let searchQuery: string = '';
</script>

<div class="flex items-center border-b border-b-moss-500 bg-white p-2">
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
		class="flex w-60 bg-white pl-2 text-moss-500 outline-none placeholder:text-moss-500"
		type="text"
		placeholder="Where To?"
		bind:value={searchQuery} />
</div>
