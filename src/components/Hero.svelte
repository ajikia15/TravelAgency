<script>
	import { tours } from '../utils/tours.ts';
</script>

<header class="relative h-[80vh] w-full overflow-hidden rounded-full">
	<div class="relative flex h-full w-full items-center justify-center overflow-hidden text-center">
		<div class="layers_header  flex w-3/5 justify-end text-4xl text-white">
			<div class="layers_caption">
				<h1>Company Name</h1>
				<div class="layers_title">
					<h2>Lorem ipsum dolor sit amet.</h2>
				</div>
			</div>
		</div>
		<div class="layer layers_base bg-[url('/landing/layer-base.jpg')] " />
		<div class="layer layers_middle bg-[url('/landing/layer-middle.png')]" />
		<div class="layer layers_front  bg-[url('/landing/layer-front.png')]" />
	</div>
</header>

<style lang="scss">
	:root {
		--scrollTop: 0px;
		--transition: transform 0.2s cubic-bezier(0.2, 0.5, 0, 1);
	}
	.layer {
		@apply absolute z-[2] h-full w-full overflow-hidden bg-cover will-change-transform md:bg-center lg:bg-center;
	}
	.layers_base {
		transform: translate3d(0, calc(var(--scrollTop) / 1.6), 0);
		z-index: 0;
		transition: var(--transition);
	}
	.layers_middle {
		transform: translate3d(0, calc(var(--scrollTop) / 2.5), 0);
		transition: var(--transition);

		z-index: 0;
	}
	.layers_front {
		transition: var(--transition);
		transform: translate3d(0, calc(var(--scrollTop) / 5), 0);
	}
	.layers_header {
		transform: translate3d(0, calc(var(--scrollTop) / 2), 0);
		z-index: 2;
		transition: var(--transition);
	}
</style>
