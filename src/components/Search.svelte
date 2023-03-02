<script lang="ts">
	export let searchQuery: string = '';
</script>

<div
	class="group relative box-border flex items-center p-2 before:pointer-events-none before:absolute before:top-2.5 before:left-10 before:z-10 before:text-moss-500 before:transition-all before:content-['Where\0020To?'] after:absolute after:-bottom-0.5 after:h-0.5 after:w-full after:bg-moss-500 after:transition-all focus-within:before:-top-3 focus-within:before:text-sm focus-within:after:h-1	 {searchQuery.length >
	0
		? 'before:-top-3 before:text-sm'
		: ''} ">
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
		class="relative flex w-full bg-white pl-2 text-moss-500 outline-none"
		type="text"
		bind:value={searchQuery} />
</div>
