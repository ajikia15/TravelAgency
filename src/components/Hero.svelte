<script>
	import { tours } from '../utils/tours.ts';
</script>

<header class="h-[80vh] w-full relative">
	<div class="layers ">
		<div class="layer_header">
			<div class="layers_caption">
				<h1>Company Name</h1>
				<div class="layers_title">
					<h2>Lorem ipsum dolor sit amet.</h2>
				</div>
				
			</div>
		</div>
		<div class="layer layers_base bg-[url('/landing/layer-base.jpg')] ">
		</div>
		<div class="layer layers_middle bg-[url('/landing/layer-middle.jpg')]">
		</div>
		<div class="layer layers_front bg-[url('/landing/layer-front.jpg')]">
		</div>
	</div>
</header>

<style>
	:root {
		--scrollTop: 0px;
	}
	.layers{
		@apply h-full w-full flex items-center text-center justify-center;
	}
	.layer{
		@apply h-full w-full absolute bg-cover bg-center;
	}
	.layers_base{
		transform:translate3d(0, calc(var(--scrollTop)), 0);
	}
	.layers_middle{
		transform:translate3d(0, calc(var(--scrollTop)), 0);
	}
	.layers_front{
		transform:translate3d(0, calc(var(--scrollTop)), 0);
	}
</style>
