const sqlite3 = require("sqlite3")

// connect to database
const db = new sqlite3.Database("practice.db", sqlite3.OPEN_READWRITE, (err) => {
    if (err) return console.error(err)
    console.log("connected to database successfully")
})

const table = `CREATE TABLE friends(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL
)`;

db.run(table)
