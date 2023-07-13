<script lang="ts">
	//@ts-ignore
	import { page } from '$app/stores';

	let path;
	$: path = $page.url.pathname;
	let darkTheme = false;
	const changeTheme = () => {
		if (!darkTheme) {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
		darkTheme = !darkTheme;
	};
	let y: number;
</script>

<svelte:window bind:scrollY={y} />
<!-- Tablet++ nav -->
<nav
	class="fixed top-0 z-20 hidden w-full place-items-center bg-transparent py-4 text-lg text-gray-400 transition-all dark:text-gray-300 md:grid {y >
		1 && 'bg-white shadow-sm dark:bg-gray-900'}">
	<div class="grid w-11/12 grid-cols-2 items-center justify-between text-2xl dark:bg-gray-900">
		<ul class="flex flex-row items-center gap-6">
			<li class="aspect-square">
				<img src="/landing/logo.png" alt="" class="h-14" />
			</li>
			<li
				class="w-min-content before:bg-moss-500 hover:text-moss-500 relative text-lg font-semibold transition-all before:absolute before:-bottom-[1px] before:right-0 before:h-[2.5px] before:w-0 before:shadow-2xl before:duration-500 hover:before:left-0 hover:before:w-full dark:before:bg-green-400 dark:hover:text-green-400 {path ==
					'/' && 'text-moss-500 before:w-full dark:text-green-400'}">
				<a href="/" class="">Home</a>
			</li>
			<li
				class="w-min-content before:bg-moss-500 hover:text-moss-500 relative text-lg font-semibold transition-all before:absolute before:-bottom-[1px] before:right-0 before:h-[2.5px] before:w-0 before:shadow-2xl before:transition-all before:duration-500 hover:before:left-0 hover:before:w-full dark:before:bg-green-400 dark:hover:text-green-400 {path.includes(
					'/tour'
				) && 'text-moss-500 before:w-full dark:text-green-400'}">
				<a href="/#searchDiv" class="">Tours</a>
			</li>
			<li
				class="w-min-content before:bg-moss-500 hover:text-moss-500 relative text-lg font-semibold transition-all before:absolute before:-bottom-[1px] before:right-0 before:h-[2.5px] before:w-0 before:shadow-2xl before:transition-all before:duration-500 hover:before:left-0 hover:before:w-full dark:before:bg-green-400 dark:hover:text-green-400 {path ==
					'/about' && 'text-moss-500 before:w-full dark:text-green-400'}">
				<a href="/about" class="">About Us</a>
			</li>
		</ul>

		<ul class="flex flex-row items-center justify-end gap-10">
			<li>
				<button
					on:click={changeTheme}
					class="hover:text-moss-500 flex items-center text-gray-400 transition-all dark:text-gray-300 dark:hover:text-green-400">
					{#if !darkTheme}
						<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"
							><path
								fill="none"
								stroke="currentColor"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M12 16a4 4 0 1 0 0-8a4 4 0 0 0 0 8zm0-13v1m0 16v1m-9-9h1m16 0h1m-2.636-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m11.314 11.314l.707.707" /></svg>
					{:else}
						<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"
							><path
								fill="currentColor"
								d="M9.37 5.51A7.35 7.35 0 0 0 9.1 7.5c0 4.08 3.32 7.4 7.4 7.4c.68 0 1.35-.09 1.99-.27A7.014 7.014 0 0 1 12 19c-3.86 0-7-3.14-7-7c0-2.93 1.81-5.45 4.37-6.49z"
								opacity=".3" /><path
								fill="currentColor"
								d="M9.37 5.51A7.35 7.35 0 0 0 9.1 7.5c0 4.08 3.32 7.4 7.4 7.4c.68 0 1.35-.09 1.99-.27A7.014 7.014 0 0 1 12 19c-3.86 0-7-3.14-7-7c0-2.93 1.81-5.45 4.37-6.49zM12 3a9 9 0 1 0 9 9c0-.46-.04-.92-.1-1.36a5.389 5.389 0 0 1-4.4 2.26a5.403 5.403 0 0 1-3.14-9.8c-.44-.06-.9-.1-1.36-.1z" /></svg>
					{/if}
				</button>
			</li>
			<li class="group relative flex flex-row items-center">
				<button
					type="button"
					class="border-moss-500 text-moss-500 focus:ring-moss-400 group-hover:bg-moss-500 hover:text-moss-100 rounded-lg border-2 bg-transparent p-2 px-5 text-lg font-semibold tracking-wide shadow-lg transition-all focus:outline-none focus:ring group-hover:text-white group-hover:shadow-md dark:border-green-400 dark:text-green-400">
					<p>Book</p>
				</button>
				<div
					class="text-moss-500 hover:text-moss-700 dark:hover:text-moss-500 absolute left-0 top-0 flex h-full w-1/2
				cursor-pointer flex-col items-center justify-center opacity-0 transition-all duration-500 group-hover:-left-1/2 group-hover:rotate-[360deg] group-hover:opacity-100 dark:text-green-400">
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
						><path
							fill="currentColor"
							d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 0 0-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02c-.37-1.11-.56-2.3-.56-3.53c0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99C3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z" /></svg>
				</div>
				<div
					class="text-moss-500 hover:text-moss-800 dark:hover:text-moss-500 absolute right-0 top-0 flex h-full w-1/2
				cursor-pointer flex-col items-center justify-center opacity-0 transition-all duration-500 group-hover:-right-1/2 group-hover:rotate-[360deg] group-hover:opacity-100 dark:text-green-400">
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
<header
	class="dark:bg-gray-90 fixed left-0 top-0 z-[21] grid w-full place-items-center bg-white py-3 text-black opacity-0 shadow-sm transition-all md:hidden {y >
		1 && 'opacity-100'}">
	<h1 class="flex w-11/12 items-center">Logo</h1>
</header>
<!-- <nav
	class="fixed bottom-0 left-0 z-[21] grid h-[12%] min-h-max w-full place-items-center bg-white text-gray-400 shadow-2xl transition-all dark:bg-gray-900 dark:text-gray-300 md:hidden">
	<ul class="grid w-11/12 grid-cols-4">
		<li
			class="relative flex flex-col items-center {path == '/' &&
				'text-moss-500 dark:text-green-400'}">
			<a href="/" class="flex flex-col items-center cursor-pointer">
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
				<p class="flex justify-center">Home</p>
			</a>
		</li>
		<li
			class="relative flex flex-col items-center {path.includes('/tour') &&
				'text-moss-500 dark:text-green-400'}">
			<a href="/#tours" class="flex flex-col items-center cursor-pointer">
				<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"
					><path
						fill="currentColor"
						d="M5 22V2.975q0-.425.288-.7T6 2q.425 0 .713.288T7 3v1h12.525q.525 0 .825.438t.1.937L19 9l1.45 3.625q.2.5-.1.938t-.825.437H7v8H5ZM7 6v6v-6Zm5.5 5q.825 0 1.413-.588T14.5 9q0-.825-.588-1.413T12.5 7q-.825 0-1.413.588T10.5 9q0 .825.588 1.413T12.5 11ZM7 12h11.05l-1.2-3l1.2-3H7v6Z" /></svg>
				<p class="">Tours</p>
			</a>
		</li>
		<li
			class="relative flex flex-col items-center {path == '/about' &&
				'text-moss-500 dark:text-green-400'}">
			<a href="/about" class="flex flex-col items-center cursor-pointer">
				<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"
					><path
						fill="currentColor"
						d="M11 17h2v-6h-2v6Zm1-8q.425 0 .713-.288T13 8q0-.425-.288-.713T12 7q-.425 0-.713.288T11 8q0 .425.288.713T12 9Zm0 13q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Zm0-2q3.35 0 5.675-2.325T20 12q0-3.35-2.325-5.675T12 4Q8.65 4 6.325 6.325T4 12q0 3.35 2.325 5.675T12 20Zm0-8Z" /></svg>
				<p class="">About Us</p>
			</a>
		</li>
		<li
			class="relative flex flex-col items-center {path == '/book' &&
				'text-moss-500 dark:text-green-400'}">
			<div class="flex flex-col items-center cursor-pointer">
				<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"
					><path
						fill="currentColor"
						d="M22 10V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v4a2 2 0 1 1 0 4v4c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-4c-1.1 0-2-.9-2-2s.9-2 2-2m-2-1.46c-1.19.69-2 1.99-2 3.46s.81 2.77 2 3.46V18H4v-2.54c1.19-.69 2-1.99 2-3.46c0-1.5-.8-2.77-2-3.46V6h16v2.54M11 15h2v2h-2m0-6h2v2h-2m0-6h2v2h-2Z" /></svg>
				<p>Book</p>
			</div>
		</li>
	</ul>
</nav> -->
