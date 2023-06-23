<script>
	export let showModal; // boolean

	let dialog; // HTMLDialogElement

	$: if (dialog && showModal) dialog.showModal();
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
{#if showModal}
	<dialog
		bind:this={dialog}
		on:close={() => (showModal = false)}
		on:click|self={() => dialog.close()}
		class="relative">
		<div on:click|stopPropagation>
			<slot name="header" />
			<slot />
			<!-- svelte-ignore a11y-autofocus -->
			<button
				class="appear fixed right-4 top-4 aspect-square p-4 text-white"
				autofocus
				on:click={() => dialog.close()}
				><svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 48 48"
					><path
						fill="none"
						stroke="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="4"
						d="m8 8l32 32M8 40L40 8" /></svg
				></button>
		</div>
	</dialog>
{/if}

<style>
	dialog {
		max-width: 70%;
		border: none;
		padding: 0;
		background-color: transparent;
		position: fixed;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
	dialog::backdrop {
		background: rgba(0, 0, 0, 0.7);
	}

	dialog[open] {
		animation: zoom 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
	}
	@keyframes zoom {
		from {
			transform: scale(0.95);
		}
		to {
			transform: scale(1);
		}
	}
	dialog[open]::backdrop {
		animation: fade 0.2s ease-out;
	}
	@keyframes fade {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
	button {
		display: block;
	}
	.appear {
		opacity: 0;
		animation: fadeAnimation 0.6s forwards;
	}
	@keyframes fadeAnimation {
		0% {
			opacity: 0;
		}
		50% {
			opacity: 0;
		}
		100% {
			opacity: 0.3;
		}
	}
</style>
