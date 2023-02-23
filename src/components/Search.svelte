<script>
	export let searchQuery = '';
	const max = 300;
	let curMin = 0;
	let curMax = max;
</script>

<div class="grid w-full -translate-y-1/2 place-items-center">
	<div
		class="relative grid w-11/12 transform grid-cols-1 flex-row items-center gap-3 rounded-xl bg-white p-5 text-2xl shadow-md transition duration-500 after:absolute after:left-0 after:-top-[1px] after:h-2 after:w-full  after:rounded-t-xl hover:scale-105 hover:shadow-lg md:grid-cols-[2fr_1fr] xl:w-1/2">
		<div class="flex rounded-lg bg-gray-100 p-4">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-6 w-6 opacity-30"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor">
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
			</svg>
			<input
				class="w-60 bg-gray-100  outline-none"
				type="text"
				placeholder="Where To?"
				bind:value={searchQuery} />
		</div>
		<!-- SLIDER -->
		<div class="p-3">
			<div class="price-input mb-3">
				<div class="field">
					<span>Min</span>
					<input type="number" class="input-min" value="0" />
				</div>
				<div class="separator">-</div>
				<div class="field">
					<input
						type="number"
						class="input-max"
						style="margin-left:0; margin-right:12px"
						value={curMax} />
					<span>Max</span>
				</div>
			</div>
			<div class="slider">
				<div class="progress" />
			</div>
			<div class="range-input">
				<input type="range" class="range-min" min="0" {max} value={curMin} step="10" />
				<input type="range" class="range-max" min="0" {max} value={curMax} step="10" />
			</div>
		</div>
	</div>
</div>

<style>
	:root {
		--color: rgb(6 95 70);
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
		width: 50%;
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
	input[type='number']::-webkit-outer-spin-button,
	input[type='number']::-webkit-inner-spin-button {
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
		background: #ddd;
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
