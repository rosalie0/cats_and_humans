const Sequelize = require('sequelize');

const DB_URL =
	process.env.DB_URL || 'postgres://localhost:5432/cats_and_humans';

const db = new Sequelize(DB_URL);
