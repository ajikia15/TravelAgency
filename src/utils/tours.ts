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
		public activities: string[]
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
		['tbilisi-1.jpg', 'tbilisi-2.jpg', 'tbilisi-3.jpg'],
		'Discover the vibrant culture and history of Tbilisi!',
		['City Tour', 'Wine Tasting', 'Cable Car Ride']
	),
	new Tour(
		1,
		'Kazbegi',
		250,
		true,
		4,
		8,
		['kazbegi-1.jpg', 'kazbegi-2.jpg', 'kazbegi-3.jpg'],
		'Explore the beautiful landscapes of Kazbegi!',
		['Hiking', 'Horse riding', 'Cultural Tour', 'Sightseeing']
	),
	new Tour(
		2,
		'Svaneti',
		100,
		true,
		6,
		12,
		['svaneti-1.jpg', 'svaneti-2.jpg', 'svaneti-3.jpg'],
		'Discover the remote villages and stunning peaks of Svaneti!',
		['Hiking', 'Horse riding', 'Cultural Tour', 'Sightseeing']
	),
	new Tour(
		3,
		'Batumi',
		110,
		true,
		2,
		6,
		['batumi-1.jpg', 'batumi-2.jpg', 'batumi-3.jpg'],
		'Enjoy the sun, sea, and sand in Batumi!',
		['Hiking', 'Horse riding', 'Cultural Tour', 'Sightseeing']
	),
	new Tour(
		4,
		'Kutaisi',
		950,
		true,
		2,
		4,
		['kutaisi-1.jpg', 'kutaisi-2.jpg', 'kutaisi-3.jpg'],
		'Discover the ancient history and architecture of Kutaisi!',
		['Hiking', 'Horse riding', 'Cultural Tour', 'Sightseeing']
	),
	new Tour(
		5,
		'Vardzia',
		150,
		true,
		4,
		10,
		['vardzia-1.jpg', 'vardzia-2.jpg', 'vardzia-3.jpg'],
		'Explore the stunning cave city of Vardzia!',
		['Hiking', 'Horse riding', 'Cultural Tour', 'Sightseeing']
	),
	new Tour(
		6,
		'Gudauri',
		130,
		true,
		4,
		7,
		['gudauri-1.jpg', 'gudauri-2.jpg', 'gudauri-3.jpg'],
		"Hit the slopes at Georgia's top ski resort!",
		['Hiking', 'Horse riding', 'Cultural Tour', 'Sightseeing']
	),
	new Tour(
		7,
		'Borjomi',
		800,
		true,
		2,
		3,
		['borjomi-1.jpg', 'borjomi-2.jpg', 'borjomi-3.jpg'],
		'Relax and unwind in the picturesque town of Borjomi!',
		['Hiking', 'Horse riding', 'Cultural Tour', 'Sightseeing']
	),
	new Tour(
		8,
		'Ushguli',
		220,
		true,
		6,
		14,
		['ushguli-1.jpg', 'ushguli-2.jpg', 'ushguli-3.jpg'],
		'Discover the highest permanently inhabited village in Europe!',
		['Hiking', 'Horse riding', 'Cultural Tour', 'Sightseeing']
	),
	new Tour(9, 'Tsalka', 110, true, 6, 14, ['tsalka-1.webp'], 'Hidden Gem Of Europe', [
		'Hiking',
		'Horse riding',
		'Cultural Tour',
		'Sightseeing',
		'Zipline'
	])
];
// sedan 3 jeep minivan 5 sprinter 16-18
// imereti samegrelo
//price starting from
