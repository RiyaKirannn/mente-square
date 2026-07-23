var express = require('express');
var router = express.Router();
var db = require("../db")

router.get('/', function (req, res, next) {
	//   res.send('respond with a resource');
	db.query("Show tables", (err, resp) => {
		res.send(resp)
	})
});

//API to check if mail id exists within all users
router.post("/emailverify", async (req, res) => {
	const email = req.body.email;
	var state = 0

	function qr1() {
		return new Promise((resolve, reject) => {
			db.query('select * from admin where Email=?', [email], (error, result) => {

				if (error) {
					console.log(error);
					reject(error);
				}
				if (result.length != 0) {
					state = 1
					resolve(state)

				}
				else {
					resolve(state)
				}

			});
		});
	}

	function qr2() {
		return new Promise((resolve, reject) => {
			db.query('select * from mentor where Email=?', [email], (error, result) => {
				if (error) {
					console.log(error);
					reject(error);
				}
				if (result.length != 0) {
					state = 2
					resolve(state)
				}
				else {
					resolve(state)
				}

			});
		});
	}

	function qr3() {
		return new Promise((resolve, reject) => {
			db.query('select * from mentee where Email=?', [email], (error, result) => {
				if (error) {
					console.log(error);
					reject(error);
				}
				if (result.length != 0) {
					state = 3
					resolve(state)
				}
				else {
					resolve(state)
				}

			});
		});
	}


	var ans = await qr1()
	ans = await qr2()
	ans = await qr3()

	if (state == 0) {
		const resul = { success: 'available' };
		return res.json(resul);
	}
	if (state == 1) {
		const resul = { success: 'admin_exist' };
		return res.json(resul);
	}
	if (state == 2) {
		const resul = { success: 'mentor_exist' };
		return res.json(resul);
	}
	if (state == 3) {
		const resul = { success: 'mentee_exist' };
		return res.json(resul);
	}


});

//API to check if Phone Exist within all users
router.post("/phoneverify", async (req, res) => {
	const phone = req.body.phone;
	var state = 0

	function qr1() {
		return new Promise((resolve, reject) => {
			db.query('select * from admin where Phone_primary=? or Phone_secondary=?', [phone, phone], (error, result) => {

				if (error) {
					console.log(error);
					reject(error);
				}
				if (result.length != 0) {
					state = 1
					resolve(state)

				}
				else {
					resolve(state)
				}

			});
		});
	}


	function qr2() {
		return new Promise((resolve, reject) => {
			db.query('select * from mentor where Phone_primary=? or Phone_secondary=?', [phone, phone], (error, result) => {
				if (error) {
					console.log(error);
					reject(error);
				}
				if (result.length != 0) {
					state = 2
					resolve(state)
				}
				else {
					resolve(state)
				}

			});
		});
	}

	function qr3() {
		return new Promise((resolve, reject) => {
			db.query('select * from mentee where Phone_primary=? or Phone_secondary=?', [phone, phone], (error, result) => {
				if (error) {
					console.log(error);
					reject(error);
				}
				if (result.length != 0) {
					state = 3
					resolve(state)
				}
				else {
					resolve(state)
				}

			});
		});
	}


	var ans = await qr1()
	ans = await qr2()
	ans = await qr3()

	if (state == 0) {
		const resul = { success: 'available' };
		return res.json(resul);
	}
	if (state == 1) {
		const resul = { success: 'admin_exist' };
		return res.json(resul);
	}
	if (state == 2) {
		const resul = { success: 'mentor_exist' };
		return res.json(resul);
	}
	if (state == 3) {
		const resul = { success: 'mentee_exist' };
		return res.json(resul);
	}


});


module.exports = router;