## // **\*\***\*\***\*\*** SETTING UP SEQUELIZE + MAKING TABLES IN DATABASE **\*\***\***\*\*** //

### Creating a Sequelize connection object:

- Make a new folder called db
- Make a new file inside of it called db.js
- Copy+Paste these contents:
- Don't forget to change the last part of the url to your database's name!

```js
const Sequelize = require('sequelize');

const DB_URL = process.env.DB_URL || 'postgres://localhost:5432/my_database';

const db = new Sequelize(DB_URL);
```

---

### Creating db/index.js:

- Make a new file inside ./db/ called index.js
- Copy paste these contents:

```js
const db = require('./db');

// Model Imports go here

// Model Associations go here

module.exports = {
	db,
};
```

- This will be like a parent node for all your models, which are broken up into individual files.
- This allows you to have one file per model. Else, a file with many tables could get very long!

---

### Creating a Model / Table

- Make a new file inside ./db/ for your first model.
- For this, the model will be called Users
- Copy paste these contents:

```js
const Sequelize = require('sequelize');
const db = require('./db');

const Users = db.define('users', {
	name: {
		type: Sequelize.STRING,
	},
});

module.exports = Users;
```

- Inside the object passed into db.define, we will create our fields (eg username).

- Much more indepth links here:
  - https://sequelize.org/docs/v6/core-concepts/model-basics/
  -

---

### Linking index.js and a Model

- Now go back to ./db/index.js and require it, like so:

```js
// Model Imports go here
const Users = require('./users');
const Tweets = require('./tweets');
```

- Add it to the module.exports

```js
module.exports = {
	db,
	Users,
	Tweets,
};
```

---

## Associations

- Associations go in the index.js file, too.
- Here's what they can look like...

- One-to-One:
  https://sequelize.org/docs/v6/core-concepts/assocs/#one-to-one-relationships

```js
Humans.hasOne(Passports);
Passports.belongsTo(Humans);
```

- One-to-Many
  https://sequelize.org/docs/v6/core-concepts/assocs/#one-to-many-relationships

```js
Tweets.belongsTo(User);
User.hasMany(Tweets);
```

- One-to-many self-referencing:
  - For self referencing you will need to use `as:` for semantic reasons and `foreignKey`

```js
Member.belongsTo(Member, { as: 'sponsor' });
Member.hasMany(Member, { as: 'sponsored', foreignKey: 'sponsorId' });
```

- Many-to-Many
  https://sequelize.org/docs/v6/core-concepts/assocs/#one-to-one-relationships

```js
// Students take many college courses.
// A college course has many students.
Students.hasMany(Courses, {through: 'studentCourses'});
Courses.hasMany(Students, {through: 'studentCourses'});

// A Steam User has many video games.
// A Video Game is played by many Steam Users.
const GameStats = db.define({'gamestats'})
SteamUsers.hasMany(VideoGame, {through: GameStats});
VideoGame.hasMany(SteamUsers, {through: GameStats})
```

- Many-to-Many self referencing:

```js
Users.belongsToMany(Users, {
	through: Follow,
	as: 'Followers',
	//foreignKey: 'FollowerId', // This line is Optional
});

// A user has many followers
Users.belongsToMany(Users, {
	through: Follow,
	as: 'Follows',
	foreignKey: 'FollowsId', // this is NOT optional!
});
```

---
