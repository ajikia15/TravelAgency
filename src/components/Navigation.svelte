<script>
	import { page } from '$app/stores';
	let path;
	$: path = $page.url.pathname;
</script>

<header
	class="top-0 z-10 hidden w-full place-items-center overflow-hidden bg-emerald-900  py-4 text-lg text-gray-400 shadow-sm transition-all md:grid [&>*]:font-semibold">
	<nav class="flex w-11/12 flex-row items-center justify-between text-2xl tracking-wide">
		<ul class="flex flex-row items-center justify-between ">
			<li>Logo</li>
		</ul>
		<ul class="flex flex-row items-center justify-between gap-6">
			<li
				class="w-min-content relative transition-all before:absolute before:-bottom-[3px] before:right-0 before:h-1 before:w-0 before:bg-amber-500 before:shadow-2xl before:duration-500 hover:text-gray-200 hover:before:left-0 hover:before:w-full {path ==
				'/'
					? 'text-gray-200 before:w-full'
					: ''}">
				<a href="/" class="">Home</a>
			</li>
			<li
				class="w-min-content relative transition-all before:absolute before:-bottom-[3px] before:right-0 before:h-1 before:w-0 before:bg-amber-500 before:shadow-2xl before:transition-all before:duration-500 hover:text-gray-200 hover:before:left-0 hover:before:w-full {path.includes(
					'/tour'
				)
					? 'text-gray-200 before:w-full'
					: ''}">
				<a href="/#tours" class="">Tours</a>
			</li>
			<li
				class="w-min-content relative transition-all before:absolute before:-bottom-[3px] before:right-0 before:h-1 before:w-0 before:bg-amber-500 before:shadow-2xl before:transition-all before:duration-500 hover:text-gray-200 hover:before:left-0 hover:before:w-full {path ==
				'/about'
					? 'text-gray-200 before:w-full'
					: ''}">
				<a href="/about" class="">About Us</a>
			</li>
		</ul>
		<ul class="flex flex-row items-center justify-between">
			<li class="group relative flex flex-row items-center">
				<button
					type="button"
					class="rounded-lg border-2 border-emerald-800 bg-amber-500 p-2 px-5 tracking-wide text-gray-200 shadow-2xl transition-all focus:outline-none focus:ring focus:ring-amber-500 group-hover:border-emerald-900 group-hover:bg-amber-600 group-hover:shadow-md group-hover:focus:ring-amber-600">
					<p>Book</p>
				</button>
				<div class="popPhone">
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
						><path
							fill="currentColor"
							d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 0 0-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02c-.37-1.11-.56-2.3-.56-3.53c0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99C3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z" /></svg>
				</div>
				<div class="popMessenger">
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
						><path
							fill="currentColor"
							d="M.001 11.639C.001 4.949 5.241 0 12.001 0S24 4.95 24 11.639c0 6.689-5.24 11.638-12 11.638c-1.21 0-2.38-.16-3.47-.46a.96.96 0 0 0-.64.05l-2.39 1.05a.96.96 0 0 1-1.35-.85l-.07-2.14a.97.97 0 0 0-.32-.68A11.39 11.389 0 0 1 .002 11.64zm8.32-2.19l-3.52 5.6c-.35.53.32 1.139.82.75l3.79-2.87c.26-.2.6-.2.87 0l2.8 2.1c.84.63 2.04.4 2.6-.48l3.52-5.6c.35-.53-.32-1.13-.82-.75l-3.79 2.87c-.25.2-.6.2-.86 0l-2.8-2.1a1.8 1.8 0 0 0-2.61.48z" /></svg>
				</div>
			</li>
		</ul>
	</nav>
</header>

<style lang="scss">
	.popPhone {
		@apply absolute left-0 top-0 flex h-full w-1/2 cursor-pointer flex-col items-center
		justify-center text-amber-600 opacity-0 transition-all duration-500 group-hover:-left-1/2 group-hover:rotate-[360deg] group-hover:opacity-100 hover:text-amber-500;
	}
	.popMessenger {
		@apply absolute right-0 top-0 flex h-full w-1/2 cursor-pointer flex-col items-center
		justify-center  text-amber-600 opacity-0 transition-all duration-500 group-hover:-right-1/2 group-hover:rotate-[360deg] group-hover:opacity-100 hover:text-amber-500;
	}
</style>
