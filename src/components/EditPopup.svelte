<script>
	export let id;
	import { onMount } from 'svelte';
	import { Textarea } from '$components/ui/textarea';
	import { Button } from '$components/ui/button';
	import { Input } from '$components/ui/input';
	import { Label } from '$components/ui/label';

	import { db } from '../lib/firebase';
	import { getFirestore, collection, doc, updateDoc, getDoc } from 'firebase/firestore';

	let tour = {};

	function handlePicsInput(event) {
		picsInput = event.target.value;
		Pics = picsInput.split(',');
	}

	onMount(async () => {
		tour = await getInitialTour();
	});
	async function getInitialTour() {
		const docRef = doc(db, 'tours', id);
		const docSnap = await getDoc(docRef);
		if (docSnap.exists()) {
			return docSnap.data();
		} else {
			console.log('No such document!');
			return null;
		}
	}
	async function resetParams() {
		tour = await getInitialTour();
	}
	async function editTour() {
		const docRef = doc(db, 'tours', id);
		try {
			await updateDoc(docRef, {
				Location: tour.Location,
				MinPeople: tour.MinPeople,
				Price: tour.Price,
				Description: tour.Description
			});
		} catch (error) {
			console.error('Error updating tour: ', error);
		}
	}
</script>

{#if tour.Location}
	<div class="grid w-full max-w-sm items-center gap-1.5">
		<Label for="location">Location</Label>
		<Input type="text" id="location" placeholder="Location" bind:value={tour.Location} />
		<p class="text-muted-foreground pb-2 text-sm">Enter the tour location.</p>
		<Label for="min-people">Minimum People</Label>
		<Input type="number" id="min-people" placeholder="Minimum People" bind:value={tour.MinPeople} />
		<p class="text-muted-foreground pb-2 text-sm">Enter the minimum number of people for the</p>
		<Label for="price">Price</Label>
		<Input type="number" id="price" placeholder="Price" bind:value={tour.Price} />
		<p class="text-muted-foreground pb-2 text-sm">Enter the minimum price of the tour</p>
		<!-- <Label for="pics">Pictures</Label>
	<Input
		type="text"
		id="pics"
		placeholder="Pictures"
		bind:value={picsInput}
		on:change={handlePicsInput} /> -->
		<Label for="activities">Activities</Label>
		<Input type="text" id="activites" placeholder="Activites" bind:value={tour.Activities} />
		<p class="text-muted-foreground pb-2 text-sm">
			Enter the activity numbers, separated by commas.
		</p>
		<p class="text-muted-foreground pb-2 text-sm">Enter the URL(s) of the tour pictures.</p>
		<Label for="description">Description</Label>
		<Textarea placeholder="Description" bind:value={tour.Description} />
		<p class="text-muted-foreground pb-2 text-sm">Enter the description of the tour.</p>
	</div>
	<div class="flex w-full justify-start gap-x-2">
		<Button variant="" on:click={editTour}>Save Changes</Button>
		<Button variant="secondary" on:click={resetParams}>Reset</Button>
	</div>
{/if}
