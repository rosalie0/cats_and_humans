// Import Sequelize-psql connection
const db = require('./db');

// Model Imports go here
const Humans = require('./humans');
const Cats = require('./cats');

// Model Associations go here
Humans.hasMany(Cats, { foreignKey: 'ownerId' });

Cats.belongsTo(Humans, { as: 'owner' });

// This also works:
// Cats.belongsTo(Humans, {
// 	as: 'owner',
// 	foreignKey: 'ownerId', // This line is optional
// });

module.exports = {
	db,
	Humans,
	Cats,
};
