<script lang>
	import { page } from '$app/stores';
	let path;
	$: path = $page.url.pathname;
</script>

<!-- Tablet++ nav -->
<nav
	class="fixed top-0 z-20 hidden w-full place-items-center overflow-hidden bg-white py-4 text-lg text-gray-400 shadow-sm transition-all md:grid">
	<div class="flex w-11/12 flex-row items-center justify-between text-2xl tracking-wide">
		<ul class="flex flex-row items-center justify-between ">
			<li>Logo</li>
		</ul>
		<ul class="flex flex-row items-center justify-between gap-6">
			<li
				class="w-min-content relative transition-all before:absolute before:-bottom-[1px] before:right-0 before:h-1 before:w-0 before:bg-moss-500 before:shadow-2xl before:duration-500 hover:text-moss-500 hover:before:left-0 hover:before:w-full {path ==
				'/'
					? 'text-moss-500 before:w-full'
					: ''}">
				<a href="/" class="">Home</a>
			</li>
			<li
				class="w-min-content relative transition-all before:absolute before:-bottom-[1px] before:right-0 before:h-1 before:w-0 before:bg-moss-500 before:shadow-2xl before:transition-all before:duration-500 hover:text-moss-500 hover:before:left-0 hover:before:w-full {path.includes(
					'/tour'
				)
					? 'text-moss-500 before:w-full'
					: ''}">
				<a href="/#tours" class="">Tours</a>
			</li>
			<li
				class="w-min-content relative transition-all before:absolute before:-bottom-[1px] before:right-0 before:h-1 before:w-0 before:bg-moss-500 before:shadow-2xl before:transition-all before:duration-500 hover:text-moss-500 hover:before:left-0 hover:before:w-full {path ==
				'/about'
					? 'text-moss-500 before:w-full'
					: ''}">
				<a href="/about" class="">About Us</a>
			</li>
		</ul>
		<ul class="flex flex-row items-center justify-between">
			<li class="group relative flex flex-row items-center">
				<button
					type="button"
					class="rounded-lg border-2 border-moss-500 bg-white bg-transparent p-2 px-5 tracking-wide text-moss-500 shadow-lg transition-all focus:outline-none focus:ring focus:ring-moss-400 group-hover:bg-moss-500 group-hover:text-white group-hover:shadow-md  group-hover:focus:ring-moss-500 hover:text-moss-100">
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
	</div>
</nav>
<!-- Mobile Nav -->
<nav
	class="fixed bottom-0 left-0 z-20 grid h-[12%] min-h-max w-full place-items-center bg-white text-gray-400 shadow-2xl transition-all md:hidden">
	<ul class="grid w-11/12 grid-cols-4">
		<li class="relative flex flex-col items-center {path == '/' ? 'text-moss-500' : ''}">
			<a href="/" class="flex cursor-pointer flex-col items-center">
				<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"
					><path
						fill="none"
						stroke="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="32"
						d="M80 212v236a16 16 0 0 0 16 16h96V328a24 24 0 0 1 24-24h80a24 24 0 0 1 24 24v136h96a16 16 0 0 0 16-16V212" /><path
						fill="none"
						stroke="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="32"
						d="M480 256L266.89 52c-5-5.28-16.69-5.34-21.78 0L32 256m368-77V64h-48v69" /></svg>
				<p class="flex justify-center ">Home</p>
			</a>
		</li>
		<li class="relative flex flex-col items-center {path.includes('/tour') ? 'text-moss-500' : ''}">
			<a href="/#tours" class="flex cursor-pointer flex-col items-center">
				<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"
					><path
						fill="currentColor"
						d="M5 22V2.975q0-.425.288-.7T6 2q.425 0 .713.288T7 3v1h12.525q.525 0 .825.438t.1.937L19 9l1.45 3.625q.2.5-.1.938t-.825.437H7v8H5ZM7 6v6v-6Zm5.5 5q.825 0 1.413-.588T14.5 9q0-.825-.588-1.413T12.5 7q-.825 0-1.413.588T10.5 9q0 .825.588 1.413T12.5 11ZM7 12h11.05l-1.2-3l1.2-3H7v6Z" /></svg>
				<p class="">Tours</p>
			</a>
		</li>
		<li class="relative flex flex-col items-center {path == '/about' ? 'text-moss-500' : ''}">
			<a href="/about" class="flex cursor-pointer flex-col items-center">
				<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"
					><path
						fill="currentColor"
						d="M11 17h2v-6h-2v6Zm1-8q.425 0 .713-.288T13 8q0-.425-.288-.713T12 7q-.425 0-.713.288T11 8q0 .425.288.713T12 9Zm0 13q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Zm0-2q3.35 0 5.675-2.325T20 12q0-3.35-2.325-5.675T12 4Q8.65 4 6.325 6.325T4 12q0 3.35 2.325 5.675T12 20Zm0-8Z" /></svg>
				<p class="">About Us</p>
			</a>
		</li>
		<li class="relative flex flex-col items-center {path == '/book' ? 'text-moss-500' : ''}">
			<div class="flex cursor-pointer flex-col items-center">
				<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"
					><path
						fill="currentColor"
						d="M22 10V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v4a2 2 0 1 1 0 4v4c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-4c-1.1 0-2-.9-2-2s.9-2 2-2m-2-1.46c-1.19.69-2 1.99-2 3.46s.81 2.77 2 3.46V18H4v-2.54c1.19-.69 2-1.99 2-3.46c0-1.5-.8-2.77-2-3.46V6h16v2.54M11 15h2v2h-2m0-6h2v2h-2m0-6h2v2h-2Z" /></svg>
				<p>Book</p>
			</div>
		</li>
	</ul>
</nav>

<style lang="scss">
	.popPhone {
		@apply absolute left-0 top-0 flex h-full w-1/2 cursor-pointer flex-col items-center
		justify-center text-moss-500 opacity-0 transition-all duration-500 group-hover:-left-1/2 group-hover:rotate-[360deg] group-hover:opacity-100 hover:text-moss-700;
	}
	.popMessenger {
		@apply absolute right-0 top-0 flex h-full w-1/2 cursor-pointer flex-col items-center
		justify-center  text-moss-500 opacity-0 transition-all duration-500 group-hover:-right-1/2 group-hover:rotate-[360deg] group-hover:opacity-100 hover:text-moss-800;
	}
</style>
