<script>
	import { tours } from '../utils/tours.ts';
</script>

<header class="h-[80vh] w-full">
	<div class="layers">
		<div class="layer_header">
			<div class="layers_caption">
				<h1>Company Name</h1>
				<div class="layers_title">
					<h2>Lorem ipsum dolor sit amet.</h2>
				</div>
				<div class="layer layers_base"></div>
				<div class="layer layers_middle"></div>
				<div class="layer layers_front"></div>
			</div>
		</div>
	</div>
</header>

<style>
	:root {
		--scrollTop: 0px;
	}
	.layers_base{
		background-image: url("landing/layer-base.jpg");
	}
	.layers_middle{
		background-image:url("landing/layer-middle.png");
	}
	.layers_front{
		background-image:url("landing/layer-front.png");
	}
</style>
