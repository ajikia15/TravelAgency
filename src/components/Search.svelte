<script lang="ts">
	export let searchQuery = '';
	function scrollToDiv() {
		//@ts-ignore
		searchDiv.scrollIntoView();
	}
</script>

<div
	id="searchDiv"
	class="after:bg-moss-500 group relative box-border flex items-center p-2 after:absolute after:-bottom-0.5 after:h-0.5 after:w-full after:transition-all focus-within:after:h-1 dark:bg-gray-900 dark:after:bg-green-400 md:scroll-mt-32 {searchQuery.length >
		0 && 'after:h-1'} ">
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
	<div
		class="before:text-moss-500 relative w-full transition-all before:pointer-events-none before:absolute before:left-2 before:top-0 before:z-10 before:transition-all before:content-['Where?'] focus-within:before:-top-3.5 focus-within:before:text-sm dark:before:text-green-400 {searchQuery.length >
			0 && 'before:-top-[50%] before:text-sm'} ">
		<input
			class="text-moss-500 relative flex w-full bg-white pl-2 outline-none dark:bg-gray-900 dark:before:bg-green-400"
			type="text"
			bind:value={searchQuery}
			on:click={scrollToDiv} />
	</div>
</div>
