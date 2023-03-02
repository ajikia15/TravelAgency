<script lang="ts">
	const max = 1000;
	export let curMin: number = 0;
	export let curMax = max;
	let temp = 0;
	$: leftPercent = (curMin / max) * 100;
	$: rightPercent = ((max - curMax) / max) * 100;
	$: if (curMin >= curMax) {
		temp = curMin;
		curMin = curMax;
		curMax = temp;
	}
	$: {
		if (curMin.toString() == '') curMin = 0;
		if (curMax.toString() == '') curMax = max;
	}
	// function handleclick() {
	// 	console.log(curMin);
	// }
</script>

<div class="p-3">
	<div class="price-input mb-3 text-gray-600">
		<div class="field">
			<span>Min</span>
			<input
				type="tel"
				class="input-min focus-within:text-black"
				maxlength="3"
				bind:value={curMin} />
		</div>
		<div class="separator">-</div>
		<div class="field">
			<input
				type="tel"
				maxlength="4"
				class="input-max group focus-within:text-gray-700"
				style="margin-left:0; margin-right:12px"
				bind:value={curMax} />
			<span class="">Max</span>
		</div>
	</div>
	<div class="slider">
		<div class="progress" style="left:{leftPercent}%; right:{rightPercent}%" />
	</div>
	<div class="range-input">
		<input type="range" class="range-min" min="0" {max} bind:value={curMin} step="10" />
		<input type="range" class="range-max" min="0" {max} bind:value={curMax} step="10" />
	</div>
</div>

<!-- <input type="button" class="h-12 w-12 bg-green-500" value="" on:click={handleclick} /> -->
<style>
	:root {
		--color: #4b5563;
		/* --color: rgb(6 95 70); */
	}
	::selection {
		color: #fff;
		background: var(--color);
	}
	.price-input {
		width: 100%;
		display: flex;
	}
	.price-input .field {
		display: flex;
		width: 80%;
		align-items: center;
	}
	.field input {
		width: 100%;
		height: 100%;
		outline: none;
		margin-left: 12px;
		border-radius: 5px;
		text-align: center;
		border: 1px solid #999;
		-moz-appearance: textfield;
	}
	input[type='tel']::-webkit-outer-spin-button,
	input[type='tel']::-webkit-inner-spin-button {
		-webkit-appearance: none;
	}
	.price-input .separator {
		width: 20%;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.slider {
		height: 5px;
		position: relative;
		background: #e1e9c4;
		border-radius: 5px;
	}
	.slider .progress {
		height: 100%;
		left: 0%;
		right: 0%;
		position: absolute;
		border-radius: 5px;
		background: var(--color);
	}
	.range-input {
		position: relative;
	}
	.range-input input {
		position: absolute;
		width: 100%;
		height: 5px;
		top: -5px;
		background: none;
		pointer-events: none;
		-webkit-appearance: none;
		-moz-appearance: none;
	}
	input[type='range']::-webkit-slider-thumb {
		height: 17px;
		width: 17px;
		border-radius: 50%;
		background: var(--color);
		pointer-events: auto;
		-webkit-appearance: none;
		box-shadow: 0 0 6px rgba(0, 0, 0, 0.05);
	}
	input[type='range']::-moz-range-thumb {
		height: 17px;
		width: 17px;
		border: none;
		border-radius: 50%;
		background: var(--color);
		pointer-events: auto;
		-moz-appearance: none;
		box-shadow: 0 0 6px rgba(0, 0, 0, 0.05);
	}
</style>
