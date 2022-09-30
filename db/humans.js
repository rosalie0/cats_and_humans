const Sequelize = require('sequelize');
const db = require('./db');

// Table define goes here
// EG:
const Humans = db.define(
	'humans',
	{
		name: {
			type: Sequelize.STRING,
			allowNull: false,
			unique: true,
		},
	},
	// Don't want 'createdAt or updatedAt'
	{ timestamps: false }
);

module.exports = Humans;
