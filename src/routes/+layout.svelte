<script lang="ts">
	import '../app.css';
	import '../app.postcss';
	import Navigation from '../components/Navigation.svelte';
	import Footer from '../components/Footer.svelte';
	// export const ssr = false;
</script>

<svelte:head>
	<title>Travel Agency</title>
</svelte:head>
<Navigation />
<slot />
<Footer />
