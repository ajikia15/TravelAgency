<script>
	import { tours } from '../utils/tours';
	export let tour;
</script>

<div
	class="group flex flex-col overflow-hidden rounded bg-emerald-800 text-white shadow-xl transition-all hover:scale-105 hover:shadow-2xl">
	<div class="overflow-hidden">
		<img
			class="w-full transition-all duration-500 ease-in-out hover:scale-105 "
			src={tour.src[0]}
			alt="Sunset in the mountains" />
	</div>
	<div class="px-6 py-4 shadow-2xl">
		<a
			href="https://en.wikipedia.org/wiki/Svaneti"
			class="inline-block text-3xl  transition-all duration-500 ease-in-out group-hover:text-amber-500"
			>{tour.destination}</a>
		<p class="truncate text-xl text-gray-300 transition-all duration-300 lg:text-xl">
			{tour.description}
		</p>
	</div>
	<div class=" flex bg-emerald-900">
		<ul class="grid w-full grid-cols-3 [&>*]:py-3 [&>*]:text-2xl">
			<li class="group/popConfetti relative flex items-center justify-center">
				<svg
					class="h-7 w-7"
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					color=""
					viewBox="0 0 24 24"
					><path
						fill="currentColor"
						d="M12 4a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4 8-4Z" /></svg>
				<p>
					{tour.peopleCount}
				</p>
				<div class="popConfetti">
					<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"
						><g fill="currentColor"
							><path
								d="M3.95 20.36c-2.6-2.6-2.6-6.81 0-9.41c2.6-2.6 6.81-2.6 9.41 0l1.22 1.22l-.001.001c.758.817.148 2.773-1.385 4.82c.573.136 1.11.442 1.516.889c.58.64.85 1.49.75 2.35l-.24 1.93c-.06.53.22 1.04.7 1.27c.43.21.61.72.4 1.14c-.14.32-.45.5-.78.5c-.12 0-.25-.02-.37-.08a2.956 2.956 0 0 1-1.68-3.04l.24-1.93c.05-.36-.06-.71-.31-.98s-.57-.4-.95-.4l-.54.01a2.774 2.774 0 0 1-.175 0l-.053.054c-.916.916-1.875 1.667-2.777 2.211A9.669 9.669 0 0 1 5.55 27.79c-.16.14-.36.21-.56.21c-.25 0-.49-.1-.66-.3a.868.868 0 0 1 .09-1.22a7.92 7.92 0 0 0 2.671-4.726c-.856.247-1.555.2-1.959-.2a1.173 1.173 0 0 1-.092-.104l-1.09-1.09Zm8.028-3.442c.727-.88 1.267-1.742 1.59-2.485c.227-.526.325-.943.335-1.235a.869.869 0 0 0-.027-.285c-.015-.047-.029-.06-.03-.062c-.003-.002-.017-.017-.064-.032a.88.88 0 0 0-.288-.028c-.293.01-.712.107-1.239.333c-.717.31-1.545.82-2.391 1.506l.906 1.65c.23.41.65.67 1.12.64l.088-.002ZM8.55 15.831c-.175.18-.343.36-.504.54a9.645 9.645 0 0 1 .866 3.364a14.088 14.088 0 0 0 1.69-1.36A3.005 3.005 0 0 1 9.26 17.12l-.71-1.29Zm-2.434 3.424c-.228.526-.326.944-.336 1.238a.884.884 0 0 0 .028.29a.174.174 0 0 0 .03.063a.187.187 0 0 0 .064.03a.884.884 0 0 0 .29.029c.249-.009.588-.08 1.006-.242a7.94 7.94 0 0 0-.38-2.691a8.851 8.851 0 0 0-.702 1.283Zm17.601 1.988c-.92-.478-1.927-1.198-2.906-2.108a6.179 6.179 0 0 1-.716.562a6.035 6.035 0 0 1-.765 1.693c-.22.33-.67.43-1 .21a.726.726 0 0 1-.21-1c.056-.085.108-.173.158-.262a2.049 2.049 0 0 1-1.198-.468a1.898 1.898 0 0 1 1.43-3.386c-1.28-1.88-1.732-3.608-.998-4.342c.07-.07.15-.13.24-.183a1.07 1.07 0 0 0-.276.217l-.006-.006l1.22-1.22c2.6-2.6 6.82-2.6 9.41 0c2.6 2.6 2.6 6.81 0 9.41l-1.08 1.08a.958.958 0 0 1-.098.112c-.333.334-.866.425-1.522.308a5.421 5.421 0 0 0 1.43 4.15c.32.35.3.89-.05 1.22c-.17.15-.38.23-.59.23c-.23 0-.46-.1-.63-.28a7.194 7.194 0 0 1-1.843-5.937Zm2.43-.364c.049-.015.064-.03.068-.034a.161.161 0 0 0 .034-.067a.864.864 0 0 0 .029-.285a3.005 3.005 0 0 0-.194-.873c-.224.4-.395.821-.512 1.255c.108.02.204.03.29.033a.864.864 0 0 0 .286-.029Zm-2.782-5.18l-.052-.052a.634.634 0 0 1-.013.033c-.395 1.019-1.489 2.358-1.805 2.726c.837.778 1.681 1.393 2.444 1.82a7.186 7.186 0 0 1 1.216-2.373a14.574 14.574 0 0 0-1.79-2.154Zm-4.868-1.267c.377.87 1.053 1.904 1.98 2.938c.42-.503 1.225-1.544 1.483-2.22a.703.703 0 0 1 .374-.394c-.896-.748-1.776-1.301-2.532-1.629c-.526-.228-.943-.326-1.235-.336a.869.869 0 0 0-.286.028c-.046.014-.06.028-.062.03c-.002.002-.016.016-.03.062a.869.869 0 0 0-.028.286c.01.292.108.709.336 1.235Zm-.47 4.345c.17.12.382.193.793.001c.058-.474-.104-.642-.28-.768l-.02-.02a.458.458 0 0 0-.73.44c.02.12.08.23.18.3c.02.015.039.03.056.047Z" /><path
								d="M10.22 29.88c.13.1.29.15.45.15c.24 0 .47-.11.63-.32c1.33-1.84 1.61-4.18.73-6.27a.771.771 0 0 0-1.01-.41a.78.78 0 0 0-.41 1.01a4.87 4.87 0 0 1-.56 4.76c-.25.35-.17.83.17 1.08Zm10.14-5.341a.85.85 0 1 1-1.7 0a.85.85 0 0 1 1.7 0ZM23 29a1 1 0 1 0 0-2a1 1 0 0 0 0 2ZM9.22 27.46a.71.71 0 1 1-1.42 0a.71.71 0 0 1 1.42 0Zm2.299-5.279a.71.71 0 1 0 0-1.42a.71.71 0 0 0 0 1.42ZM17.01 29c0 .552-.45 1-1.005 1A1.003 1.003 0 0 1 15 29c0-.552.45-1 1.005-1c.555 0 1.005.448 1.005 1Z" /></g
						></svg>
				</div>
			</li>
			<li class="flex items-center justify-center bg-emerald-900 shadow-inner">
				<p>
					${tour.price}<span class="text-[0.75em] text-gray-300">/each</span>
				</p>
			</li>
			<li class="flex items-center justify-center ">
				<p class="text-amber-400">{tour.daysCount}&nbsp;&nbsp;</p>

				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					class="h-8 w-8 text-amber-400 duration-500 group-hover:rotate-180"
					><path
						fill="currentColor"
						d="M12 2.25a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75ZM7.5 12a4.5 4.5 0 1 1 9 0a4.5 4.5 0 0 1-9 0Zm11.394-5.834a.75.75 0 0 0-1.06-1.06l-1.591 1.59a.75.75 0 1 0 1.06 1.061l1.591-1.59ZM21.75 12a.75.75 0 0 1-.75.75h-2.25a.75.75 0 0 1 0-1.5H21a.75.75 0 0 1 .75.75Zm-3.916 6.894a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 1 0-1.061 1.06l1.59 1.591ZM12 18a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-1.5 0v-2.25A.75.75 0 0 1 12 18Zm-4.242-.697a.75.75 0 0 0-1.061-1.06l-1.591 1.59a.75.75 0 0 0 1.06 1.061l1.591-1.59ZM6 12a.75.75 0 0 1-.75.75H3a.75.75 0 0 1 0-1.5h2.25A.75.75 0 0 1 6 12Zm.697-4.243a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 0 0-1.061 1.06l1.59 1.591Z" /></svg>
			</li>
		</ul>
	</div>
</div>

<style lang="scss">
	.popConfetti {
		@apply absolute left-[3px] top-0 flex h-full w-full cursor-pointer
		 flex-col items-center justify-center opacity-0 transition-all
		duration-500 ease-in-out group-hover/popConfetti:-top-1/2 group-hover/popConfetti:animate-[shakeConfetti_ease-in-out_300ms_1_300ms] group-hover/popConfetti:opacity-100;
	}
	@keyframes shakeConfetti {
		0% {
			transform: translate(0, 0);
		}
		25% {
			transform: translate(-5px, 0);
		}
		50% {
			transform: translate(5px, 0);
		}
		75% {
			transform: translate(-5px, 0);
		}
		100% {
			transform: translate(0, 0);
		}
	}
</style>
