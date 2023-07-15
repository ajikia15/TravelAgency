<script>
	export let id;
	import { onMount } from 'svelte';
	import { Textarea } from '$components/ui/textarea';
	import { Button } from '$components/ui/button';
	import { Input } from '$components/ui/input';
	import { Label } from '$components/ui/label';
	import { db } from '../lib/firebase';
	import { doc, updateDoc, getDoc } from 'firebase/firestore';
	import { list } from '../lib/list';
	import { HoverCard, HoverCardContent, HoverCardTrigger } from '$components/ui/hover-card';
	let tour = {};
	$: sent = false;
	let picsInput;
	function handlePicsInput(event) {
		picsInput = event.target.value;
		tour.Pics = picsInput.split(',');
	}

	onMount(async () => {
		tour = await getInitialTour();
		picsInput = tour.Pics;
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
				Description: tour.Description,
				Pics: tour.Pics,
				Lat: tour.Lat,
				Long: tour.Long
			});
			sent = true;
			setTimeout(() => {
				sent = false;
			}, 1000);
		} catch (error) {
			console.error('Error updating tour: ', error);
		}
	}
	const copysrc = (image) => {
		navigator.clipboard.writeText(image);
	};
</script>

{#if tour.Location}
	<div class="mx-auto flex max-w-md flex-col justify-center gap-1.5">
		<Label for="location">Location</Label>
		<Input type="text" id="location" placeholder="Location" bind:value={tour.Location} />
		<p class="text-muted-foreground pb-2 text-sm">Enter the tour location.</p>
		<Label for="min-people">Minimum People</Label>
		<Input type="number" id="min-people" placeholder="Minimum People" bind:value={tour.MinPeople} />
		<p class="text-muted-foreground pb-2 text-sm">Enter the minimum number of people for the</p>
		<Label for="price">Price</Label>
		<Input type="number" id="price" placeholder="Price" bind:value={tour.Price} />
		<p class="text-muted-foreground pb-2 text-sm">Enter the minimum price of the tour</p>
		<Label for="pics">Pictures</Label>
		<Textarea id="pics" placeholder="Pictures" bind:value={picsInput} on:change={handlePicsInput} />
		<ul class="grid grid-cols-3 gap-2">
			{#each tour.Pics as pic}
				<li class="group relative">
					<img
						src={pic}
						alt=""
						class="aspect-video h-20 object-cover hover:opacity-75"
						on:click={copysrc(pic)} />
				</li>
			{/each}
		</ul>
		<p class="text-muted-foreground pb-2 text-sm">Enter the URL(s) of the tour pictures.</p>
		<Label for="activities">Activities</Label>
		<Input type="text" id="activites" placeholder="Activites" bind:value={tour.Activities} />
		<ul>
			{#each list as activity}
				{#if tour.Activities.includes(activity.id.toString())}
					<li class="flex flex-row items-center space-x-2.5 text-base">
						<!-- {activity.id} -->
						<img src={`/svgs/${activity.id}.svg `} alt="" width="30" height="30" />
						<p>{activity.id}. {activity.name}</p>
					</li>
				{/if}
			{/each}
		</ul>
		<p class="text-muted-foreground pb-2 text-sm">
			Enter the activity numbers, separated by commas.
		</p>
		<Label for="Latitude">Coordinates</Label>
		<div class="grid grid-cols-3">
			<Input type="number" placeholder="Latitude" bind:value={tour.Lat} />
			<Input type="number" placeholder="Longitude" bind:value={tour.Long} />
		</div>
		<p class="text-muted-foreground pb-2 text-sm">
			Enter the latitude and longitude of the tour location
		</p>
		<Label for="description">Description</Label>
		<Textarea placeholder="Description" bind:value={tour.Description} />
		<p class="text-muted-foreground pb-2 text-sm">Enter the description of the tour.</p>
		<div class="flex w-full justify-start gap-x-2">
			<Button variant="" on:click={editTour}>
				{#if sent}
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
						<path fill="currentColor" d="M21 7L9 19l-5.5-5.5l1.41-1.41L9 16.17L19.59 5.59L21 7Z" />
					</svg>
				{:else}
					Apply Changes
				{/if}
			</Button>
			<Button variant="secondary" on:click={resetParams}>Reset</Button>
		</div>
	</div>
{/if}
