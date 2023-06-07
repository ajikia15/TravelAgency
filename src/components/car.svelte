<script>
	import Carousel from 'svelte-carousel';
	import Color from './Color.svelte';
</script>

<div class="hero" style="position:relative">
	<Carousel
		autoplay
		autoplayDuration={5000}
		let:showPrevPage
		let:showNextPage
		let:currentPageIndex
		let:pagesCount
		let:showPage>
		<div
			slot="dots"
			class="custom-dots"
			style="display:flex; flex-direction:row; gap:2px; cursor:pointer; position:absolute; bottom: 0px;">
			{#each Array(pagesCount) as _, pageIndex (pageIndex)}
				<div style="" on:click={() => showPage(pageIndex)}>a</div>
			{/each}
		</div>
		<div slot="prev" on:click={showPrevPage} class="custom-arrow custom-arrow-prev">g</div>
		<Color color="#85d78b" text="#85d78b" />
		<Color color="#71d077" text="#71d077" />
		<Color color="#5dca64" text="#5dca64" />
		<Color color="#49c351" text="#49c351" />
		<Color color="#35bd3e" text="#35bd3e" />
		<div slot="next" on:click={showNextPage} class="custom-arrow custom-arrow-next">g</div>
	</Carousel>
</div>

<style>
	.custom-arrow-prev {
		width: 20px;
		opacity: 0.3;
		position: absolute;
		top: 0;
		bottom: 0;
		z-index: 1;
		transition: opacity 150ms ease;
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
	}
</style>
