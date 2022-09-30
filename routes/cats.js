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
module.exports = router;
