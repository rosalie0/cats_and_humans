// Import Sequelize-psql connection
const db = require('./db');

// Model Imports go here
const Humans = require('./humans');
const Cats = require('./cats');

// Model Associations go here
Humans.hasMany(Cats, { as: 'owner' });
Cats.belongsTo(Humans);

module.exports = {
	db,
	Humans,
	Cats,
};
