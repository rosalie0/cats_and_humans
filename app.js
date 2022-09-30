// Express
const express = require('express');
const app = express();

// Volleyball middleware
const volleyball = require('volleyball');
app.use(volleyball);

// Body Parsers
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Define Routes
app.use('/humans', require('./routes/humans'));
app.use('/cats', require('./routes/cats'));

// Import Database + Models
// Make sure the module.exports matches!
const { Humans, Cats } = require('./db');

app.get('/', (req, res, next) => {
	try {
		res.send(`Hello World~`);
	} catch (error) {
		next(error);
	}
});

app.get('/magicMethods', (req, res, next) => {
	try {
		const humansMM = Object.keys(Humans.prototype);
		const catsMM = Object.keys(Cats.prototype);

		console.log(`Human Magic Methods in here: ${humansMM}`);
	} catch (error) {
		next(error);
	}
});
const PORT = 1337;
app.listen(PORT, () => {
	console.log(`Listening to port ${PORT}...`);
});
