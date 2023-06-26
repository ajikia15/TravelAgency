<script>
	import IndividualWeatherCard from './IndividualWeatherCard.svelte';
	export let Location;
	export let Lat;
	export let Long;
	import {
		Dialog,
		DialogContent,
		DialogDescription,
		DialogFooter,
		DialogHeader,
		DialogTitle,
		DialogTrigger
	} from '$components/ui/dialog';

	// fetch data using api
	// display forecast for the same day
	// display forecast for next few days
	// use different icons for different weathers

	// https://api.openweathermap.org/data/2.5/weather?lat={Lat}&lon={Long}&appid={42c2387296084d3b8446ec47148ea9a7}
	let data = {};
	const getWeather = async () => {
		const res = await fetch(
			`https://api.openweathermap.org/data/3.0/onecall?lat=${Lat}&lon=${Long}&exclude=current,minutely,alerts,hourly&units=metric&appid=${
				import.meta.env.VITE_WEATHERID
			}`
		);
		data = await res.json();
		// console.log(data);
	};
	getWeather();
</script>

<div class="flex flex-col items-center justify-center text-gray-700">
	<div class="w-full rounded-lg bg-white p-10 shadow-md">
		<!-- <IndividualWeatherCard {Location} /> -->
		{#if data.lat}
			<div class="flex justify-between">
				<div class="flex flex-col">
					<span class="text-5xl font-bold">{Math.round(data.daily[0].temp.day)}°C</span>
					<span class="mt-1 font-semibold text-gray-500">
						{Location}
					</span>
				</div>
				{#if data.daily[0].weather[0].main === 'Rain'}
					<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24"
						><path
							fill="currentColor"
							d="M11 2a6 6 0 0 0-5.986 6.41a5 5 0 0 0-1.322 8.34a1 1 0 1 0 1.324-1.5a3.002 3.002 0 0 1 1.324-5.178a1 1 0 0 0 .757-1.193A4 4 0 1 1 14.92 7.2a1 1 0 0 0 .999.8H16a4 4 0 0 1 2.4 7.2a1 1 0 0 0 1.201 1.6a6 6 0 0 0-2.93-10.762A6.002 6.002 0 0 0 11 2zm1.949 13.316a1 1 0 0 0-1.898-.632l-2 6a1 1 0 0 0 1.898.632l2-6zm3.367-2.265a1 1 0 0 1 .633 1.265l-2 6a1 1 0 0 1-1.898-.632l2-6a1 1 0 0 1 1.265-.633zM9.45 14.316a1 1 0 0 0-1.898-.632l-2 6a1 1 0 0 0 1.898.632l2-6z" /></svg>
				{/if}
				{#if data.daily[0].weather[0].main === 'Clouds'}
					<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24"
						><path
							fill="currentColor"
							d="M16 5a3 3 0 0 1 2.557 4.57a5.96 5.96 0 0 0-1.886-.533a6.019 6.019 0 0 0-2.697-3.25A2.99 2.99 0 0 1 16 5zm-4.055.074a6 6 0 0 0-6.931 6.336A5 5 0 0 0 7 21h9a6 6 0 0 0 4.2-10.285a5 5 0 0 0-8.255-5.64zM7 11a4 4 0 0 1 7.92-.8a1 1 0 0 0 1 .8H16a4 4 0 0 1 0 8H7a3 3 0 0 1-.66-5.927a1 1 0 0 0 .757-1.194A4.017 4.017 0 0 1 7 11z" /></svg>
				{/if}
				{#if data.daily[0].weather[0].main === 'Clear'}
					<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24"
						><path
							fill="currentColor"
							d="M12 2a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1zm7.071 2.929a1 1 0 0 1 0 1.414l-.707.707a1 1 0 1 1-1.414-1.414l.707-.707a1 1 0 0 1 1.414 0zm-14.142 0a1 1 0 0 1 1.414 0l.707.707A1 1 0 0 1 5.636 7.05l-.707-.707a1 1 0 0 1 0-1.414zM12 8a4 4 0 1 0 0 8a4 4 0 0 0 0-8zm-6 4a6 6 0 1 1 12 0a6 6 0 0 1-12 0zm-4 0a1 1 0 0 1 1-1h1a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1zm17 0a1 1 0 0 1 1-1h1a1 1 0 1 1 0 2h-1a1 1 0 0 1-1-1zM5.636 16.95a1 1 0 0 1 1.414 1.414l-.707.707a1 1 0 0 1-1.414-1.414l.707-.707zm11.314 1.414a1 1 0 0 1 1.414-1.414l.707.707a1 1 0 0 1-1.414 1.414l-.707-.707zM12 19a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0v-1a1 1 0 0 1 1-1z" /></svg>
				{/if}
				{#if data.daily[0].weather[0].main === 'Thunderstorm'}
					<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24"
						><path
							fill="currentColor"
							d="M11 2a6 6 0 0 0-5.986 6.41a5 5 0 0 0 .737 9.432a1 1 0 1 0 .498-1.936a3.002 3.002 0 0 1 .09-5.833a1 1 0 0 0 .758-1.194A4 4 0 1 1 14.92 7.2a1 1 0 0 0 .999.8H16a4 4 0 0 1 1.6 7.668a1 1 0 1 0 .8 1.832a6.001 6.001 0 0 0-1.729-11.463A6.002 6.002 0 0 0 11 2zm1.894 11.447a1 1 0 1 0-1.788-.894l-2 4A1 1 0 0 0 10 18h2.382l-1.276 2.553a1 1 0 1 0 1.788.894l2-4A1 1 0 0 0 14 16h-2.382l1.276-2.553z" /></svg>
				{/if}
				{#if data.daily[0].weather[0].main === 'Snow'}
					<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24"
						><path
							fill="currentColor"
							d="M11 2a6 6 0 0 0-5.986 6.41a5 5 0 0 0-1.322 8.34a1 1 0 1 0 1.324-1.5a3.002 3.002 0 0 1 1.324-5.178a1 1 0 0 0 .757-1.193A4 4 0 1 1 14.92 7.2a1 1 0 0 0 .999.8H16a4 4 0 0 1 2.4 7.2a1 1 0 0 0 1.201 1.6a6 6 0 0 0-2.93-10.762A6.002 6.002 0 0 0 11 2zm3.5 15a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3zm-3.5-.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0zm4 3a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0zm-5 1a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0z" /></svg>
				{/if}
			</div>
			<div class="mt-3 flex justify-evenly">
				{#each data.daily as day, i}
					{#if i > 0 && i < 4}
						<IndividualWeatherCard temp={Math.round(day.temp.day)} cond={day.weather[0].main} {i} />
					{/if}
				{/each}
			</div>
			<Dialog>
				<DialogTrigger
					><button type="button" class="line-clamp-1 hover:underline">8 Day Forecast &rarr;</button
					></DialogTrigger>
				<DialogContent>
					<DialogHeader>
						<DialogTitle>8 day forecast for {Location}</DialogTitle>
						<DialogDescription>
							<div class="mt-3 flex justify-between">
								{#each data.daily as day, i}
									<IndividualWeatherCard
										temp={Math.round(day.temp.day)}
										cond={day.weather[0].main}
										{i} />
								{/each}
							</div>
						</DialogDescription>
					</DialogHeader>
				</DialogContent>
			</Dialog>
		{/if}
	</div>
</div>
