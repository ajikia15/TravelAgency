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
		`Welcome to Tbilisi, the capital city of Georgia, is a hidden gem waiting to be explored by travelers. This charming city boasts a mix of ancient and modern architecture, with narrow streets, cozy cafes, and colorful balconies. The old town, with its winding alleys and historic buildings, is a must-visit for those interested in culture and history. The sulfur baths, located in the heart of the city, offer a unique and rejuvenating experience. Visitors can also enjoy the stunning panoramic views of the city from the Narikala Fortress, or indulge in Georgian cuisine at the local restaurants. Tbilisi is a perfect destination for those looking for a unique blend of history, culture, and relaxation.`),
	new Tour(
		1,
		'Kazbegi',
		250,
		true,
		4,
		8,
		['kazbegi-1.webp'],
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
		['svaneti-1.webp'],
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
		['batumi-1.webp'],
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
		['kutaisi-1.webp'],
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
		['vardzia-1.webp'],
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
		['gudauri-1.webp'],
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
		['borjomi-1.webp'],
		'Relax and unwind in the picturesque town of Borjomi!',
		['Hiking', 'Horse riding', 'Cultural Tour', 'Sightseeing']
	,'paragraph'),
	new Tour(
		8,
		'Sighnaghi',
		220,
		true,
		6,
		14,
		['sighnaghi-1.webp'],
		'"We have Paris at Home"',
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
