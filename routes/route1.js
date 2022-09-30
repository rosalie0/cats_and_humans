const router = require('express').Router();

// Don't forget to import any databases, models, or views you need!

// Import views
const form = require('../views/form');

// An example GET req.
// Use async await if you need. Otherwise delete async!
router.get('/', async (req, res, next) => {
	try {
		const html = form();
		res.send(html);
	} catch (error) {
		next(error);
	}
});

module.exports = router;
