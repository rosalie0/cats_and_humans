// Express
const express = require('express');
const app = express();

// Volleyball middleware
const volleyball = require('volleyball');
app.use(volleyball);

// Method Override: Allows DELETE reqest from an html form
const methodOverride = require('method-override');
app.use(methodOverride('_method'));

// Static Middleware (Public folder)
const path = require('path');
// eslint-disable-next-line no-undef
const staticMiddleware = express.static(path.join(__dirname, 'public'));
app.use(staticMiddleware);

// Body Parsers
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Import Views

// Define Routes
// Define routes
app.use('/route0', require('./routes/route0'));
app.use('/route1', require('./routes/route1'));

// Import Database + Models
// Make sure the module.exports matches!
const { Players, Games, PlayersGames } = require('./db');

app.get('/', (req, res, next) => {
	try {
		res.send(`Hello World~`);
	} catch (error) {
		next(error);
	}
});
const PORT = 3000;
app.listen(PORT, () => {
	console.log(`Listening to port ${PORT}...`);
});
