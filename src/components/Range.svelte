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
</script>

<div class="p-1">
	<form class="price-input mb-3 flex flex-row text-moss-500">
		<div class="field flex">
			<span class="">Min</span>
			<input
				type="tel"
				class="input-min focus-within:text-gray-700"
				maxlength="3"
				bind:value={curMin} />
		</div>
		<div class="separator">-</div>
		<div class="field">
			<input
				type="tel"
				maxlength="4"
				class="input-max group focus-within:text-gray-700"
				style=""
				bind:value={curMax} />
			<span class="">Max</span>
		</div>
	</form>
	<div class="slider">
		<div class="progress" style="left:{leftPercent}%; right:{rightPercent}%" />
	</div>
	<div class="range-input">
		<input type="range" class="range-min" min="0" {max} bind:value={curMin} step="10" />
		<input type="range" class="range-max" min="0" {max} bind:value={curMax} step="10" />
	</div>
</div>

<style>
	:root {
		--color: #14803c;
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
	}
	.field input {
		min-width: 50px;
		width: 100%;
		height: 100%;
		outline: none;
		border-radius: 5px;
		text-align: center;
		border: 1px solid #13803b;
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
		background: #e8eeeb;
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
