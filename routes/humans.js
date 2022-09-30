const express = require('express');
const router = express.Router();

// Body Parser
router.use(express.urlencoded({ extended: false }));

// Import Models
const { Humans, Cats } = require('../db');

// GET localhost:1337/humans/
// Returns all humans with their cats as a property!
router.get('/', async (req, res, next) => {
	try {
		res.send(
			await Humans.findAll({
				include: [Cats],
			})
		);
	} catch (error) {
		next(error);
	}
});

// GET localhost:1337/humans/Mom
// Send back specified human's info, including which cats they have.
router.get('/:name', async (req, res, next) => {
	const name = req.params.name;
	const human = await Humans.findOne({
		where: { name: name },
		include: [Cats],
	});
	res.send(human);
});

// POST localhost:1337/:name/adopt
// Human with a specified name will now be the owner of a cat,
// Whose name will be submitted via POST.
router.post('/:name/adopt/', async (req, res, next) => {
	try {
		// Get the human
		const human = await Humans.findOne({
			where: {
				name: req.params.name,
			},
		});

		if (!human) {
			res.status(404).send('A human with that name was not found.');
			return;
		}

		// Get the cat from the database.
		const catName = req.body.catName;
		const catToAdopt = await Cats.findOne({
			where: {
				name: catName,
			},
		});
		if (!catToAdopt) {
			res.status(404).send('A cat with that name was not found.');
			return;
		}

		human.addCat(catToAdopt);
		res.send('Adopted!');
	} catch (err) {
		next(err);
	}
});

// POST localhost:1337/cats/create
// Creates a cat with the given body in the database.
router.post('/create', async (req, res, next) => {
	try {
		console.log(req.body.name);
		const newHuman = await Humans.create({
			name: req.body.name,
		});

		res.status(201).send(`Cat was succesfully created! ${newHuman}`);
	} catch (err) {
		next(err);
	}
});

module.exports = router;
