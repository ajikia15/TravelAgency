<script lang="ts">
	import '../app.css';
	import '../app.postcss';
	import Navigation from '../components/Navigation.svelte';
	import Footer from '../components/Footer.svelte';
	// export const ssr = false;
</script>

<svelte:head>
	<title>Travel Agency</title>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" />
	<link
		href="https://fonts.googleapis.com/css2?family=Merriweather:wght@300;400;900&display=swap"
		rel="stylesheet" />
</svelte:head>
<Navigation />
<slot />
<Footer />
