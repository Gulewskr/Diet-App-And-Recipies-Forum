import conf from "./db_config.json";
const mysql = require('mysql');

const db = mysql.createConnection({
	host     : conf.HOST,
	user     : conf.USER,
	password : conf.PASSWORD,
	database : conf.DATABASE
});

db.connect((error) => {
	if(error) throw error;
	console.log("connected");
});

module.exports = { db }