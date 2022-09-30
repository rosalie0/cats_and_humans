## // **\*\*\*\***\*\*\*\***\*\*\*\*** SEEDING **\*\*\*\***\*\*\*\***\*\*\*\*** //

### Seed.js

- Create a seed.js file in your main folder (not inside the db folder, we are done with that.)
- copy and paste:

```js
// Import Models
const { db, MyTable, AnotherTable } = require('./server');

const seedDb = async () => {
	await db.sync({ force: true, logging: false }); // Drops tables

	// Enter data
};

// Call it or else it never runs!
seedDb();
```

- In the 'Enter data' part, this is where you will `.create` into the Models.

---

- Once all the data is in, using our scripts, we can run in terminal:

npm run seed
