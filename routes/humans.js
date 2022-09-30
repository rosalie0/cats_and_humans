const router = require('express').Router();

// Don't forget to import any databases, models, or views you need!
const { Humans, Cats } = require('../db');

// GET localhost:1337/humans/all
// Returns all humans
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

module.exports = router;
