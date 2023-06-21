<script>
	import {
		Dialog,
		DialogContent,
		DialogDescription,
		DialogHeader,
		DialogTitle,
		DialogTrigger
	} from '$components/ui/dialog';
	import { Input } from '$components/ui/input';
	import { Label } from '$components/ui/label';
	import { db } from '../lib/firebase';
	import { getFirestore, collection, addDoc } from 'firebase/firestore';
	const collectionRef = collection(db, 'tours');
	async function addTour(location, minPeople, pics, description) {
		try {
			await addDoc(collection(db, 'tours'), {
				location,
				minPeople,
				pics,
				description
			});
		} catch (error) {
			console.error('Error adding tour: ', error);
		}
	}
</script>

<div
	class="text-moss-900 group flex items-center justify-center overflow-hidden rounded-lg border bg-gray-100 shadow-xl duration-500 hover:-translate-y-3 hover:scale-105 hover:shadow-2xl dark:border-gray-900 dark:bg-slate-800">
	<Dialog>
		<DialogTrigger
			><div
				class="grid aspect-square w-16 cursor-pointer place-items-center rounded-full bg-gray-200 transition-all hover:bg-gray-300">
				<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 16 16"
					><path
						fill="none"
						stroke="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="1.5"
						d="M12.75 7.75h-10m5-5v10" /></svg>
			</div></DialogTrigger>
		<DialogContent class="bg-white">
			<DialogHeader>
				<DialogTitle class="text-xl font-semibold">Add A Card</DialogTitle>
				<DialogDescription>
					<div class="grid w-full max-w-sm items-center gap-1.5">
						<Label for="email-2">Email</Label>
						<Input type="email" id="email-2" placeholder="Email" />
						<p class="text-muted-foreground text-sm">Enter your email address.</p>
					</div>
				</DialogDescription>
			</DialogHeader>
		</DialogContent>
	</Dialog>
</div>
