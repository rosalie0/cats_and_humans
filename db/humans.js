const Sequelize = require('sequelize');
const db = require('./db');

// Table define goes here
// EG:
const Humans = db.define('users', {
	name: {
		type: Sequelize.STRING,
		allowNull: false,
		unique: true,
	},
});

module.exports = Humans;
