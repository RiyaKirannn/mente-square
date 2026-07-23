var mysql = require('mysql2')
const dotenv = require("dotenv");
dotenv.config({
	path: './.env',
});
const hostname = process.env.DATABASE_HOST;
const database = process.env.DATABASE_NAME;
const duser = process.env.DATABASE_USER;
const dpass = process.env.DATABASE_PASS;
var dbs = () => {
	// connection var


	const con = mysql.createPool({
		host: hostname,
		user: duser,
		password: dpass
	})

	// connection
	con.getConnection((err, res) => {
		if (err) throw err;
		console.log("Mysql connected")

		con.query(`CREATE Database if not exists ${database}`, (err, res) => {
			if (err) throw err;
			if (res.warningStatus)
				console.log("Database Exists")
			else
				console.log("Database Created!")

			con.end(() => {
				console.log("Terminating Inital connection")
				authuser();
				admin();
				mentor();
				mentee();
				userplan();
				userorder();
			})
		})

	})

}


var authuser = () => {
	var db = require('./db')
	db.query("SELECT EXISTS (SELECT 1 FROM information_schema.tables WHERE table_schema = ? AND table_name = 'auth_user') as ans;", [database], (err, result) => {
		if (err) throw err;
		var check
		result.forEach((row) => {
			check = row.ans
		});
		if (check == 0) {
			db.query("CREATE TABLE auth_user(" +
				"login_id INT PRIMARY KEY auto_increment not null," +
				"name VARCHAR(50)," +
				"username VARCHAR(20)," +
				"password VARCHAR(100)," +
				"privilege int(5)" +
				");", function (err, result) {
					if (err) throw err;
					else {
						console.log("New Table admin created");
					}

				});
		}
		else {

			console.log("Table admin Exist");

		}
	});
}

var admin = () => {
	var db = require('./db')
	db.query("SELECT EXISTS (SELECT 1 FROM information_schema.tables WHERE table_schema = ? AND table_name = 'admin') as ans;", [database], (err, result) => {
		if (err) throw err;
		var check
		result.forEach((row) => {
			check = row.ans
		});
		if (check == 0) {
			db.query("CREATE TABLE admin(" +
				"Admin_id INT PRIMARY KEY auto_increment not null," +
				"login_id VARCHAR(50)," +
				"Phone_primary VARCHAR(20)," +
				"address VARCHAR(150)," +
				"status int(5)" +
				");", function (err, result) {
					if (err) throw err;
					else {
						console.log("New Table admin created");
					}

				});
		}
		else {

			console.log("Table admin Exist");

		}
	});
}

var mentor = () => {
	var db = require("./db")

	db.query("SELECT EXISTS (SELECT 1 FROM information_schema.tables WHERE table_schema = ? AND table_name = 'mentor') as ans;", [database], (err, result) => {
		if (err) throw err;
		var check
		result.forEach((row) => {
			check = row.ans
		});
		if (check == 0) {
			db.query("CREATE TABLE mentor(" +
				"Mentor_id INT PRIMARY KEY auto_increment not null," +
				"login_id INT(5)," +
				"Phone_primary VARCHAR(20)," +
				"Address VARCHAR(150)," +
				"creation_mode INT(5)," +
				"status INT(5)," +
				"block_reason VARCHAR(150)" +
				");", function (err, result) {
					if (err) throw err;
					else {
						console.log("New Table MENTOR created");

					}

				});
		}
		else {

			console.log("Table MENTOR Exist");

		}
	});
}

var mentee = () => {
	var db = require("./db")
	db.query("SELECT EXISTS (SELECT 1 FROM information_schema.tables WHERE table_schema = ? AND table_name = 'mentee') as ans;", [database], (err, result) => {
		if (err) throw err;
		var check
		result.forEach((row) => {
			check = row.ans
		});
		if (check == 0) {
			db.query("CREATE TABLE mentee(" +
				"mentee_id INT PRIMARY KEY auto_increment not null," +
				"login_id INT(5)," +
				"Phone_primary VARCHAR(20)," +
				"Address VARCHAR(150)," +
				"creation_mode INT(5)," +
				"active_plan INT(5)," +
				"status INT(5)," +
				"block_reason VARCHAR(150)" +
				");", function (err, result) {
					if (err) throw err;
					else {
						console.log("New Table MENTEE created");
					}

				});
		}
		else {

			console.log("Table MENTEE Exist");

		}
	});
}

var userplan = () => {
	var db = require("./db")
	db.query("SELECT EXISTS (SELECT 1 FROM information_schema.tables WHERE table_schema = ? AND table_name = 'user_plan') as ans;", [database], (err, result) => {
		if (err) throw err;
		var check
		result.forEach((row) => {
			check = row.ans
		});
		if (check == 0) {
			db.query("CREATE TABLE user_plan(" +
				"plan_id INT PRIMARY KEY auto_increment not null," +
				"plan_name VARCHAR(20)," +
				"plan_price INT(20)," +
				"description VARCHAR(120)," +
				"total_mentors INT(20)" +
				");", function (err, result) {
					if (err) throw err;
					else {
						console.log("New Table user_plan created");
					}

				});
		}
		else {

			console.log("Table MENTEE Exist");

		}
	});
}

var userorder = () => {
	var db = require("./db")
	db.query("SELECT EXISTS (SELECT 1 FROM information_schema.tables WHERE table_schema = ? AND table_name = 'user_order') as ans;", [database], (err, result) => {
		if (err) throw err;
		var check
		result.forEach((row) => {
			check = row.ans
		});
		if (check == 0) {
			db.query("CREATE TABLE user_order(" +
				"order_id INT PRIMARY KEY auto_increment not null," +
				"mentee_id INT(5)," +
				"plan_id INT(5)," +
				"date VARCHAR(20)," +
				"time VARCHAR(150)," +
				"expiry VARCHAR(150)," +
				"payment_nature INT(10)," +
				"razorpay_order_id VARCHAR(100)," +
				"razorpay_payment_id VARCHAR(100)," +
				"payment_mode VARCHAR(100)," +
				"payment_status INT(5)," +
				"payment_description VARCHAR(150)" +
				");", function (err, result) {
					if (err) throw err;
					else {
						console.log("New Table MENTEE created");
					}

				});
		}
		else {

			console.log("Table MENTEE Exist");

		}
	});
}

module.exports = { dbs };