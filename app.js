// Express
const express = require('express');
const app = express();

// Volleyball middleware
const volleyball = require('volleyball');
app.use(volleyball);

// Define Routes
app.use('/humans', require('./routes/humans'));
app.use('/cats', require('./routes/cats'));

// Body Parsers for POST requests
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

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

app.get('/magic', (req, res, next) => {
	try {
		console.log('Human Magic Methods in here:');
		console.log(Object.keys(Humans.prototype));
		console.log('\nCats Magic Methods in here:');
		console.log(Object.keys(Cats.prototype));

		res.send('Magic methods logged to console.');
	} catch (error) {
		next(error);
	}
});

const PORT = 1337;
app.listen(PORT, () => {
	console.log(`Listening to port ${PORT}...`);
});
