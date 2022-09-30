## // **\*\*\*\***\*\*\*\***\*\*\*\*** SETTING UP NPM **\*\*\*\***\*\*\*\***\*\*\*\*** //

### Initialize npm:

npm init -y

---

### Install relevant node modules:

npm install pg sequelize express volleyball method-override && npm i nodemon --save-dev

---

### In package.json add scripts:

"start:dev": "nodemon app.js",
"seed": "nodemon seed.js"

---

## // **\*\*\*\***\*\*\*\***\*\*\*\*** SETTING UP GIT **\*\*\*\***\*\*\*\***\*\*\*\*** //

### Initialize Git:

git init

---

### .gitignore file:

- Make a new file called .gitignore
- Open it and give it contents:

  node_modules/
  .DS_Store

- This prevents these files from being pushed to GitHub.

---

## // **\*\*\*\***\*\*\*\***\*\*\*\*** SETTING UP DATABASE **\*\*\*\***\*\*\*\***\*\*\*\*** //

### Creating the database:

createdb my_database

- What you want you database to be called is 'my_database' here.

---

Connect to the database any time to look around using:

psql my_database

---

Useful PSQL commands:

\l
--> lists all databases

\c my_database
--> connects you to the database called my_database.
--> Use if you entered 'psql' instead of 'psql my_database' at the start.

\dt
--> Once connected to a database, lists all tables in current database

`select * from my_table;`
--> see a given table's data

\q
--> quits

---
