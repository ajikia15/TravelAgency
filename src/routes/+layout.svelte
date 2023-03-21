<script lang="ts">
	import '../app.css';
	import Navigation from '../components/Navigation.svelte';
	import Footer from '../components/Footer.svelte';
</script>

<svelte:head>
	<title>Travel Agency</title>
</svelte:head>
<Navigation />
<slot />
<Footer />
