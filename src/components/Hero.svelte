<script>
	import { base } from '$app/paths';
</script>

<header class="relative grid min-h-screen w-full  place-items-center bg-white dark:bg-gray-900">
	<img
		src="/landing/layered-waves-haikei-light.svg"
		class="pointer-events-none absolute bottom-0 z-0 w-full dark:hidden"
		alt="" />
	<img
		src="/landing/layered-waves-haikei-dark.svg"
		class="pointer-events-none absolute bottom-0 z-0 hidden w-full dark:block"
		alt="" />
	<div class="z-10 grid w-11/12 grid-cols-1 md:grid-cols-[5fr_7fr]">
		<div class="flex flex-col justify-center space-y-6">
			<h1 class="text-6xl font-semibold dark:text-white">Unveil the hidden gem of Georgia!</h1>
			<h2 class="roboto text-xl text-gray-500">
				Travel to the land of mesmerizing sights and rich culture. Book your adventure today and
				discover the best of Georgia's food, music and hospitality. You can view the best deals and
				insider tips, even arrange your own custom tours and for traveling to Georgia.
			</h2>
			<div class="space-x-6 text-2xl">
				<button
					type="button"
					class="group rounded-lg border-2 border-moss-500 bg-moss-500 p-2 px-5 tracking-wide text-white opacity-100 shadow-lg transition-all focus:outline-none focus:ring focus:ring-moss-400 group-hover:shadow-md hover:border-transparent  hover:opacity-70 dark:border-green-400 dark:text-green-400">
					<p>Explore Tours</p>
				</button>
				<button
					type="button"
					class="focus-ring group rounded-lg border-2 border-transparent bg-transparent p-2 px-5  tracking-wide transition-all focus:outline-none	">
					<p
						class=" text-moss-500 opacity-100 transition-all focus:outline-none group-hover:opacity-70 group-focus:underline">
						How It Works
					</p>
				</button>
			</div>
		</div>
		<!-- class="absolute top-1/3 left-1/4 z-0 animate-spin-slow duration-150" xmlns="http://www.w3.org/2000/svg" width="64" height="64"  -->
		<div class="relative flex items-center justify-center text-amber-500">
			<svg
				class="absolute top-1/4 left-1/4 z-0 animate-spin-slow duration-150"
				xmlns="http://www.w3.org/2000/svg"
				width="64"
				height="64"
				viewBox="0 0 24 24"
				><path
					fill="currentColor"
					d="m13 4l-1 2.934L11 4a1.056 1.056 0 1 1 2 0zm-9 7l2.934 1L4 13a1.056 1.056 0 1 1 0-2zm7 9l1-2.934L13 20a1.056 1.056 0 1 1-2 0zm9-7.002l-2.934-1l2.934-1a1.056 1.056 0 1 1 0 2zM7.05 5.636l1.367 2.781L5.636 7.05A1.057 1.057 0 1 1 7.05 5.636zM5.636 16.949l2.781-1.367l-1.367 2.781a1.057 1.057 0 1 1-1.414-1.414zm11.313 1.414l-1.367-2.781l2.781 1.367a1.057 1.057 0 1 1-1.414 1.414zm1.413-11.315L15.58 8.416l1.368-2.782a1.057 1.057 0 1 1 1.414 1.414zM12 16.5c-2.481 0-4.5-2.019-4.5-4.5S9.519 7.5 12 7.5s4.5 2.019 4.5 4.5s-2.019 4.5-4.5 4.5zm0-7c-1.379 0-2.5 1.121-2.5 2.5s1.121 2.5 2.5 2.5s2.5-1.121 2.5-2.5s-1.121-2.5-2.5-2.5z" /></svg>
			<img src="/landing/landing.webp" class="z-10 h-4/5" alt="" loading="lazy" />
		</div>
	</div>
</header>

<!-- font-family: 'IBM Plex Serif', serif; -->
<style lang="scss">
	.roboto {
		font-family: 'Roboto', sans-serif;
	}
</style>
