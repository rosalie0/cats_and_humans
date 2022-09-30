const router = require('express').Router();

// Don't forget to import any databases, models, or views you need!
const { Humans, Cats } = require('../db');

// GET localhost:1337/cats
// Returns all cats
router.get('/', async (req, res, next) => {
	try {
		res.send(await Cats.findAll());
	} catch (error) {
		next(error);
	}
});

// GET localhost:1337/cats/longhair
// Returns only the cats with long hair.
router.get('/longhair', async (req, res, next) => {
	try {
		res.send(
			await Cats.findAll({
				where: {
					hairlength: 'long',
				},
			})
		);
	} catch (error) {
		next(error);
	}
});

// GET localhost:1337/cats/:name
// Returns the cat with the specified name
router.get('/:name', async (req, res, next) => {
	try {
		const name = req.params.name;
		const foundCat = await Cats.findOne({
			where: {
				name: name,
			},
			include: [
				{
					model: Humans,
					as: 'owner',
				},
			],
		});
		res.send(foundCat);
	} catch (error) {
		next(error);
	}
});

// POST localhost:1337/cats/create
// Creates a cat with the given body in the database.
router.post('/create', async (req, res, next) => {
	try {
		const name = req.body.name;
		const age = req.body.age;
		const hairlength = req.body.hairlength;
		const ownerName = req.body.ownerName;

		const newCat = await Cats.create({
			name,
			age,
			hairlength,
		});

		// Need to query Humans table to get the ID associated with ownerName
		const foundOwner = Humans.findOne({
			where: {
				name: ownerName,
			},
		});

		console.log(newCat);
		res.status(201).send(`Cat was succesfully created! ${newCat}`);
	} catch (error) {
		next(error);
	}
});
module.exports = router;
