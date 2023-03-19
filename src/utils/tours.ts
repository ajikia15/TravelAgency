export default class Tour {
		constructor(
			public id: number,
			public destination: string,
			public price: number,
			public availability: boolean,
			public peopleCount: number,
			public daysCount: number,
			public src: string[],
			public description: string,
			public activities: string[],
			public paragraph: string,
		) {
			this.id = id;
			this.destination = destination;
			this.price = price;
			this.availability = availability;
			this.peopleCount = peopleCount;
			this.daysCount = daysCount;
			this.src = src;
			this.description = description;
			this.activities = activities;
			this.paragraph=paragraph;
		}
	}

	export const tours = [
	new Tour(
		0,
		'Tbilisi',
		900,
		true,
		2,
		5,
		['tbilisi-1.webp', 'tbilisi-2.webp', 'tbilisi-3.webp'],	
		'Discover the vibrant culture and history of Tbilisi!',
		['City Tour', 'Wine Tasting', 'Cable Car Ride'],
		'paragraph'),
	new Tour(
		1,
		'Kazbegi',
		250,
		true,
		4,
		8,
		['kazbegi-1.webp', 'kazbegi-2.webp', 'kazbegi-3.webp'],
		'Explore the beautiful landscapes of Kazbegi!',
		['Hiking', 'Horse riding', 'Cultural Tour', 'Sightseeing'],
		'paragraph'),
	new Tour(
		2,
		'Svaneti',
		100,
		true,
		6,
		12,
		['svaneti-1.webp', 'svaneti-2.webp', 'svaneti-3.webp'],
		'Discover the remote villages and stunning peaks of Svaneti!',
		['Hiking', 'Horse riding', 'Cultural Tour', 'Sightseeing']
	,'paragraph'),
	new Tour(
		3,
		'Batumi',
		110,
		true,
		2,
		6,
		['batumi-1.webp', 'batumi-2.webp', 'batumi-3.webp'],
		'Enjoy the sun, sea, and sand in Batumi!',
		['Hiking', 'Horse riding', 'Cultural Tour', 'Sightseeing']
	,'paragraph'),
	new Tour(
		4,
		'Kutaisi',
		950,
		true,
		2,
		4,
		['kutaisi-1.webp', 'kutaisi-2.webp', 'kutaisi-3.webp'],
		'Discover the ancient history and architecture of Kutaisi!',
		['Hiking', 'Horse riding', 'Cultural Tour', 'Sightseeing']
	,'paragraph'),
	new Tour(
		5,
		'Vardzia',
		150,
		true,
		4,
		10,
		['vardzia-1.webp', 'vardzia-2.webp', 'vardzia-3.webp'],
		'Explore the stunning cave city of Vardzia!',
		['Hiking', 'Horse riding', 'Cultural Tour', 'Sightseeing']
	,'paragraph'),
	new Tour(
		6,
		'Gudauri',
		130,
		true,
		4,
		7,
		['gudauri-1.webp', 'gudauri-2.webp', 'gudauri-3.webp'],
		"Hit the slopes at Georgia's top ski resort!",
		['Hiking', 'Horse riding', 'Cultural Tour', 'Sightseeing']
	,'paragraph'),
	new Tour(
		7,
		'Borjomi',
		800,
		true,
		2,
		3,
		['borjomi-1.webp', 'borjomi-2.webp', 'borjomi-3.webp'],
		'Relax and unwind in the picturesque town of Borjomi!',
		['Hiking', 'Horse riding', 'Cultural Tour', 'Sightseeing']
	,'paragraph'),
	new Tour(
		8,
		'Ushguli',
		220,
		true,
		6,
		14,
		['ushguli-1.webp', 'ushguli-2.webp', 'ushguli-3.webp'],
		'Discover the highest permanently inhabited village in Europe!',
		['Hiking', 'Horse riding', 'Cultural Tour', 'Sightseeing']
	,'paragraph'),
	new Tour(9, 'Tsalka', 110, true, 6, 14, ['tsalka-1.webp'], 'Hidden Gem Inside of a Hidden Gem?', [
		'Hiking',
		'Horse riding',
		'Cultural Tour',
		'Sightseeing',
		'Zipline'
	],'paragraph')
];
// sedan 3 jeep minivan 5 sprinter 16-18
// imereti samegrelo
//price starting from
