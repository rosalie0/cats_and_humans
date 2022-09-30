const router = require('express').Router();

// Don't forget to import any databases, models, or views you need!

// Import views
const view0 = require('../views/view0');

// An example GET req.
// Use async await if you need. Otherwise delete async!
router.get('/', async (req, res, next) => {
	try {
		res.send(`Route 0 hit!`);
	} catch (error) {
		next(error);
	}
});

module.exports = router;
