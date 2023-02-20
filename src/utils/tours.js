export default class Tour {
	constructor(
		id,
		destination,
		price,
		availability,
		peopleCount,
		daysCount,
		images,
		description,
		title,
		startDate,
		endDate
	) {
		this.id = id;
		this.destination = destination;
		this.price = price;
		this.availability = availability;
		this.peopleCount = peopleCount;
		this.daysCount = daysCount;
		this.images = images;
		this.description = description;
		this.title = title;
		this.startDate = startDate;
		this.endDate = endDate;
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
		'Exploring Tbilisi',
		'2022/06/01',
		'2022/06/05'
	),
	new Tour(
		1,
		'Kazbegi',
		1200,
		true,
		4,
		8,
		['kazbegi-1.jpg', 'kazbegi-2.jpg', 'kazbegi-3.jpg'],
		'Explore the beautiful landscapes of Kazbegi!',
		'Hiking in Kazbegi',
		'2022/06/15',
		'2022/06/22'
	),
	new Tour(
		2,
		'Svaneti',
		1800,
		true,
		6,
		12,
		['svaneti-1.jpg', 'svaneti-2.jpg', 'svaneti-3.jpg'],
		'Discover the remote villages and stunning peaks of Svaneti!',
		'Adventure in Svaneti',
		'2022/07/01',
		'2022/07/12'
	),
	new Tour(
		3,
		'Batumi',
		1100,
		true,
		2,
		6,
		['batumi-1.jpg', 'batumi-2.jpg', 'batumi-3.jpg'],
		'Enjoy the sun, sea, and sand in Batumi!',
		'Beach holiday in Batumi',
		'2022/08/01',
		'2022/08/06'
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
		'Historic Kutaisi',
		'2022/09/01',
		'2022/09/04'
	),
	new Tour(
		5,
		'Vardzia',
		1500,
		true,
		4,
		10,
		['vardzia-1.jpg', 'vardzia-2.jpg', 'vardzia-3.jpg'],
		'Explore the stunning cave city of Vardzia!',
		'Cave City Adventure',
		'2022/10/01',
		'2022/10/10'
	),
	new Tour(
		6,
		'Gudauri',
		1100,
		true,
		4,
		7,
		['gudauri-1.jpg', 'gudauri-2.jpg', 'gudauri-3.jpg'],
		'Hit the slopes at Georgia\'s top ski resort!',
		'Skiing in Gudauri',
		'2022/12/01',
		'2022/12/08'
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
		'Borjomi Getaway',
		'2023/02/01',
		'2023/02/03'
	),
	new Tour(
		8,
		'Ushguli',
		2200,
		true,
		6,
		14,
		['ushguli-1.jpg', 'ushguli-2.jpg', 'ushguli-3.jpg'],
		'Discover the highest permanently inhabited village in Europe!',
		'Highland Adventure in Ushguli',
		'2023/03/01',
		'2023/03/14'
	),
	new Tour(
		9,
		'Mestia',
		1600,
		true,
		4,
		9,
		['mestia-1.jpg', 'mestia-2.jpg', 'mestia-3.jpg'],
		'Explore the stunning towers and museums of Mestia!',
		'Mestia Heritage Tour',
		'2023/05/01',
		'2023/05/09'
	)
];
