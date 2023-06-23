<script>
	import {
		Dialog,
		DialogContent,
		DialogDescription,
		DialogHeader,
		DialogTitle,
		DialogTrigger
	} from '$components/ui/dialog';
	import { Textarea } from '$components/ui/textarea';
	import { Button } from '$components/ui/button';
	import { Input } from '$components/ui/input';
	import { Label } from '$components/ui/label';
	import { db } from '../lib/firebase';
	import { getFirestore, collection, addDoc } from 'firebase/firestore';

	const collectionRef = collection(db, 'tours');

	let Location = '';
	let picsInput = '';
	let MinPeople = null;
	let Price = null;
	let Pics = [];
	let Description = '';
	function handlePicsInput(event) {
		picsInput = event.target.value;
		Pics = picsInput.split(',');
	}
	function resetParams() {
		Location = '';
		picsInput = '';
		MinPeople = null;
		Price = null;
		Pics = [];
		Description = '';
	}
	async function addTour() {
		try {
			await addDoc(collectionRef, {
				Location,
				MinPeople,
				Price,
				Pics,
				Description
			});
		} catch (error) {
			console.error('Error adding tour: ', error);
		}
	}
</script>

<div
	class="text-moss-900 group flex items-center justify-center overflow-hidden rounded-lg border bg-gray-100 shadow-xl duration-500 hover:-translate-y-3 hover:scale-105 hover:shadow-2xl dark:border-gray-900 dark:bg-slate-800">
	<Dialog>
		<DialogTrigger>
			<div
				class="grid aspect-square w-16 cursor-pointer place-items-center rounded-full bg-gray-200 transition-all hover:bg-gray-300">
				<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 16 16">
					<path
						fill="none"
						stroke="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="1.5"
						d="M12.75 7.75h-10m5-5v10" />
				</svg>
			</div>
		</DialogTrigger>
		<DialogContent>
			<DialogHeader>
				<DialogTitle class="text-xl font-semibold">Add A Tour</DialogTitle>
				<DialogDescription>
					<div class="grid w-full max-w-sm items-center gap-1.5">
						<Label for="location">Location</Label>
						<Input type="text" id="location" placeholder="Location" bind:value={Location} />
						<p class="text-muted-foreground pb-2 text-sm">Enter the tour location.</p>
						<Label for="min-people">Minimum People</Label>
						<Input
							type="number"
							id="min-people"
							placeholder="Minimum People"
							bind:value={MinPeople} />
						<p class="text-muted-foreground pb-2 text-sm">
							Enter the minimum number of people for the tour.
						</p>
						<Label for="price">Price</Label>
						<Input type="number" id="price" placeholder="Price" bind:value={Price} />
						<p class="text-muted-foreground pb-2 text-sm">Enter the minimum price of the tour.</p>
						<Label for="pics">Pictures</Label>
						<Input
							type="text"
							id="pics"
							placeholder="Pictures"
							bind:value={picsInput}
							on:change={handlePicsInput} />
						<p class="text-muted-foreground pb-2 text-sm">Enter the URL(s) of the tour pictures.</p>
						<Label for="description">Description</Label>
						<Textarea placeholder="Description." bind:value={Description} />
						<p class="text-muted-foreground pb-2 text-sm">Enter the description of the tour.</p>
					</div>
					<div class="flex w-full justify-start gap-x-2">
						<Button variant="" on:click={addTour}>Add Tour</Button>
						<Button variant="secondary" on:click={resetParams}>Reset</Button>
					</div>
				</DialogDescription>
			</DialogHeader>
		</DialogContent>
	</Dialog>
</div>
