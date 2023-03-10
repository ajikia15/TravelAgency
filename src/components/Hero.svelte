<script>
	import { tours } from '../utils/tours.ts';
</script>

<header class="grid w-full grid-cols-1 p-6 md:grid-cols-2 ">
	<div
		class="relative box-border aspect-square h-full max-h-[75vh] overflow-hidden rounded-full outline outline-[3px] outline-offset-4 outline-amber-500">
		<div class="layer layers_base bg-[url('/landing/layer-base.webp')] " />
		<div class="layer layers_middle bg-[url('/landing/layer-middle.webp')]" />
		<div class="layer layers_front bg-[url('/landing/layer-front.webp')]" />
	</div>
	<div class="grid place-items-center">
		<div class="text-center">
			<h1 class="text-8xl">Company name</h1>
			<h2 class="text-4xl">Lorem ipsum dolor sit amet.</h2>
		</div>
	</div>
</header>

<style lang="scss">
	:root {
		--scrollTop: 0px;
	}

	.layer {
		@apply absolute z-[2] h-full w-full bg-cover bg-left will-change-transform;
	}
	.layers_base {
		transform: translate3d(0, calc(var(--scrollTop) / 1.5), 0);
		z-index: 0;
	}
	.layers_middle {
		transform: translate3d(0, calc(var(--scrollTop) / 2.2), 0);
		z-index: 0;

	}
	.layers_front {
		transform: translate3d(0, calc(var(--scrollTop) / 5), 0);
	}
</style>
