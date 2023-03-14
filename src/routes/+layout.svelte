<script>
	import '../app.css';
	import Navigation from '../components/Navigation.svelte';
	import Footer from '../components/Footer.svelte';
	import { fade } from 'svelte/transition';
</script>

<svelte:head>
	<title>Travel Agency</title>
</svelte:head>
<Navigation />
	<slot />
<Footer />
