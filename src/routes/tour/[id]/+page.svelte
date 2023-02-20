<script>
	import { tours } from '../../../utils/tours';
	import { page } from '$app/stores';
	const id = $page.params.id;
</script>

<!-- <h1>page.params.id === {$page.params.id}</h1> -->
<h1>id = {id}</h1>
<h1>{tours[id].availability ? 'We can' : "We can't"}</h1>
<h1>take {tours[id].peopleCount} people</h1>
<h1>TO {tours[id].destination.toUpperCase()}!!</h1>
<h1>ONLY FOR {tours[id].price}$</h1>
<h1>To {tours[id].description}</h1>
<h1>For {tours[id].daysCount} days</h1>
<h1>{tours[id].startDate} - {tours[id].endDate}</h1>
<img src="" alt="">
