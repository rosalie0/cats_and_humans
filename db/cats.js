const Sequelize = require('sequelize');
const db = require('./db');

// Table define goes here
// EG:
const Cats = db.define('cats', {
	name: {
		type: Sequelize.STRING,
	},
	age: {
		type: Sequelize.INTEGER,
	},
	hairlength: {
		type: Sequelize.ENUM(['short', 'long', 'hairless']),
	},
});

module.exports = Cats;
