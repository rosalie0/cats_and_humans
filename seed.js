// If you are seeding the database using SEQUELIZE, use this file!
// If you are using raw SQL you must create a .sql file!

// Import Models
const { db, Humans, Cats } = require('./db');

// Anton has a cat named Kafka.
// Erica has two cats named Ava and Misshi.
// Rose has three cats named Abby, Sparky, and Wendy.
// Carmine does not have a cat.

// Create arrays of objects per Model
const humans = [
	{ name: 'Anton' },
	{ name: 'Rose' },
	{ name: 'Erica' },
	{ name: 'Carmine' },
];

const cats = [
	{ name: 'Kafka', hairlength: 'short' },
	{ name: 'Ava', hairlength: 'long' },
	{ name: 'Misshi', hairlength: 'long' },
	{ name: 'Abby', age: 12, hairlength: 'long' },
	{ name: 'Sparky', age: 16, hairlength: 'short' },
	{ name: 'Wendy', age: 16, hairlength: 'short' },
];
const seedDb = async () => {
	await db.sync({ force: true, logging: false }); // Drops tables

	// Make an array of promises for each model, using our arrays above.
	const humanPromises = humans.map((human) => Humans.create(human));
	const catPromises = cats.map((cat) => Cats.create(cat));

	// Now wait for all the promises to finish,
	// and destructure the array into variables.
	// (Not technically necessary, but needed for this setup to create associations.)
	const [anton, rose, erica, carmine] = await Promise.all(humanPromises);
	const [kafka, ava, misshi, abby, sparky, wendy] = await Promise.all(
		catPromises
	);
	// You can set the relationships between the models using magic methods!
	anton.addCat(kafka);

	misshi.setOwner(erica);
	ava.setOwner(erica);

	rose.addCat(abby);
	rose.addCat(sparky);
	rose.addCat(wendy);

	console.log('Human Magic Methods in here:');
	console.log(Object.keys(Humans.prototype));

	console.log('\nCats Magic Methods in here:');
	console.log(Object.keys(Cats.prototype));
};

seedDb();
