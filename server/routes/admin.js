var express = require('express');
const http = require('http');
var router = express.Router();
var db = require("../db")       // import wherever required
var encdec = require("../encdec");

/* GET users listing. */
router.get('/', function (req, res, next) {
	//   res.send('respond with a resource');
	db.query("Show tables", (err, resp) => {
		res.send(resp)
	})
});

//Creating new admin manually

router.get('/newadmin', async (req, res) => {
	const newUser = {
		name: 'ajai',
		phone: '9353512121',
		email: 'akm@gmail.com',
		password: 'akms',
		address: 'banglore christ university',
		status: 1,
		privilege: 1,
		approve: 2,
	};

	const hpass = await encr(newUser.password);

	try {
		const [result] = await db.promise().query('SELECT * FROM auth_user WHERE username=?', newUser.email);

		if (result.length === 0) {
			const [insertResult] = await db.promise().query('INSERT INTO auth_user SET ?', {
				name: newUser.name,
				username: newUser.email,
				Password: hpass,
				privilege: newUser.privilege,

			});

			const last_id = insertResult.insertId;

			try {
				await db.promise().query('INSERT INTO admin SET ?', {
					login_id: last_id,
					Phone_primary: newUser.phone,
					address: newUser.address,
					status: newUser.status
				});

				return res.json({ success: 'success' });
			} catch (error) {
				await db.promise().query('DELETE FROM auth_user WHERE login_id=?', last_id);
				console.log(error);
				return res.json({ success: 'error' });
			}
		} else {
			return res.json({ success: 'exist' });
		}
	} catch (error) {
		console.log(error);
	}
});

// Login
router.post("/login", async (req, res) => {
	const email = req.body.username
	const pass = req.body.pass
	const encMail = await encr(email)

	db.query("select * from auth_user where username=?", [email], async (request, response) => {
		const r = await response
		if (r == '')
			res.send({ status: "failed" })
		else {
			var status = await (decr(pass, response[0].password))
			if (status == "true") {
				let priv = ''
				if (response[0].privilege == 1)
					priv = 'admin'
				else if (response[0].privilege == 2)
					priv = 'mentor'
				else if (response[0].privilege == 3)
					priv = 'mentee'
				if (priv != '') {
					db.query(`select name, ${priv}.status, password, privilege from auth_user join ${priv} where ${priv}.login_id = auth_user.login_id and ${priv}.login_id=${r[0].login_id}`, async (err, results) => {
						const resp = await results
						if (err)
							res.send({ status: "failed" })
						res.send({ status: "success", "uid": encMail, "auth": resp[0].password, "name": resp[0].name, "privilege": resp[0].privilege, "acc_status": resp[0].status })
					})
				}
			}
			else
				res.send({ status: "failed" })
		}
	})
})

//verify
router.post("/verify", async (req, res) => {
	const aname = req.body.aname

	db.query("Select username,password,privilege from auth_user where name = ? ", [aname], async (request, response) => {
		const r = await response
		let stat = req.body.status ? req.body.status : 0

		if (r == "" || r == undefined)
			res.send({ status: "failed" })
		else {
			const decrMail = await decr(r[0].username, req.body.uid)

			if (decrMail) {
				let priv = ''
				if (r[0].privilege == 1)
					priv = 'admin'
				else if (r[0].privilege == 2)
					priv = 'mentor'
				else if (r[0].privilege == 3)
					priv = 'mentee'
				if (priv != '') {
					db.query(`select name, ${priv}.status, password, privilege from auth_user join ${priv} where ${priv}.login_id = auth_user.login_id and name=? and password=?`, [aname, req.body.auth], async (requ, resp) => {
						const re = await resp
						if (re.length == 1 && re[0].status > 0 && re[0].privilege == req.body.privilege && re[0].status == stat)
							res.send({ status: "success" })
						else
							res.send({ status: "failed" })
					})
				}
			}
			else
				res.send({ status: "failed" })

		}
	})
})

//Add mentor by admin
router.post('/addmentor', async (req, res) => {
	const newUser = {
		name: req.body.name,
		phone: req.body.phoneprime,
		email: req.body.email,
		password: req.body.pass,
		address: req.body.address,
		status: 1,
		creationmode: 1,
		privilege: 2,
		approve: 2,
	};
	console.log(newUser.password);

	const hpass = await encr(newUser.password);

	try {
		const [result] = await db.promise().query('SELECT * FROM auth_user WHERE username=? ', [newUser.email]);

		if (result.length === 0) {
			const check2 = await checkMentorphoneprime(newUser.phone);
			if (check2 != 0) {
				const resul = { success: 'phone_exist' };
				return res.json(resul);
			}
			const [insertResult] = await db.promise().query('INSERT INTO auth_user SET ?', {
				name: newUser.name,
				username: newUser.email,
				Password: hpass,
				privilege: newUser.privilege,

			});

			const last_id = insertResult.insertId;

			try {
				await db.promise().query('INSERT INTO mentor SET ?', {
					login_id: last_id,
					Phone_primary: newUser.phone,
					address: newUser.address,
					creation_mode: newUser.creationmode,
					status: newUser.status
				});

				return res.json({ success: 'success' });
			} catch (error) {
				await db.promise().query('DELETE FROM auth_user WHERE login_id=?', last_id);
				console.log(error);
				return res.json({ success: 'error' });
			}
		} else {
			return res.json({ success: 'email_exist' });
		}
	} catch (error) {
		console.log(error);
		return res.json({ success: 'error2' });
	}
});

//API to Fetch all mentors
router.post("/fetchmentorrec", async (req, res) => {


	db.query('select * from mentor a join auth_user b on a.login_id=b.login_id where a.status like "1"', (error, result) => {
		if (error) {
			console.log(error);
		}
		if (result.length > 0) {

			return res.json(result);
		}
		else {
			//for bootstrap datatable
			res.send('{ "sEcho": 1,"iTotalRecords": "0", "iTotalDisplayRecords": "0", "aaData": []}')
		}
	});


});

//API to Fetch particular mentors
router.post("/fetchmentor", async (req, res) => {
	const uid = req.body.uid;


	db.query('select * from mentor a join auth_user b on a.login_id=b.login_id where a.status like "1" and a.Mentor_id=?', [uid], (error, result) => {
		if (error) {
			console.log(error);
		}
		if (result.length > 0) {
			result[0].success = "true"
			return res.json(result);
		}
		else {
			const resul = { success: 'false' };
			return res.json(resul);
		}
	});


});

//Add mentee by admin
router.post('/addmentee', async (req, res) => {



	// generate 8-12 character
	let characters = 8 + Math.round(Math.random() * 4)
	let passwd = ''
	let spl = ['!', '@', '#', '$', '%', '&']
	for (let i = 0; i < characters; i++) {
		let selector = Math.round(Math.random() * 3)
		let char
		if (selector === 0)
			char = String.fromCharCode(65 + Math.round(Math.random() * 25))
		else if (selector === 1)
			char = String.fromCharCode(97 + Math.round(Math.random() * 25))
		else if (selector === 2)
			char = String.fromCharCode(48 + Math.round(Math.random() * 9))
		else
			char = spl[Math.round(Math.random() * 5)]

		passwd += char
	}

	// TODO: Send password generated mail to new mentee email (req.body.email)

	const newUser = {
		name: req.body.name,
		phone: req.body.phoneprime,
		email: req.body.email,
		address: req.body.address,
		status: 2,			// 2 - first time login
		creationmode: 1,
		privilege: 3,
		approve: 2,
	};

	const mailapiparameters = {
		targetmail: req.body.email,
		f_pass: passwd,
		f_name: req.body.name,
		key: 'HEJHFJHDS-SRKJBKRFB-SEKBJRS',
	  };
	console.log(newUser.password);

	const hpass = await encr(passwd);

	try {
		const [result] = await db.promise().query('SELECT * FROM auth_user WHERE username=? ', [newUser.email]);

		if (result.length === 0) {
			var check2 = await checkMenteephoneprime(newUser.phone);
			check2 = await checkMentorphoneprime(newUser.phone);
			if (check2 != 0) {
				const resul = { status: 0, message: 'phone_exist' };
				return res.json(resul);
			}
			const [insertResult] = await db.promise().query('INSERT INTO auth_user SET ?', {
				name: newUser.name,
				username: newUser.email,
				Password: hpass,
				privilege: newUser.privilege,

			});

			const last_id = insertResult.insertId;

			try {
				await db.promise().query('INSERT INTO mentee SET ?', {
					login_id: last_id,
					Phone_primary: newUser.phone,
					address: newUser.address,
					creation_mode: newUser.creationmode,
					active_plan: '0',
					status: newUser.status
					
				});

				const queryString = new URLSearchParams(mailapiparameters).toString();
const url = `http://mails.mentesquare.com/mailapi.php?${queryString}`;

const req = http.get(url, (res) => {
  let data = '';

  res.on('data', (chunk) => {
    data += chunk;
  });

  res.on('end', () => {
    console.log('Response:', data);
  });
});

req.on('error', (error) => {
  console.error('Error:', error);
});

				return res.json({ status: 2 });
			} catch (error) {
				await db.promise().query('DELETE FROM auth_user WHERE login_id=?', last_id);
				console.log(error);
				return res.json({ status: 0, message: 'error' });
			}
		} else {
			return res.json({ status: 0, message: 'email_exist' });
		}
	} catch (error) {
		console.log(error);
		return res.json({ status: 0, message: 'error' });
	}
});

//API to Fetch all mentors
router.post("/fetchmenteerec", async (req, res) => {


	db.query('select * from mentee a join auth_user b on a.login_id=b.login_id where a.status > "1"', (error, result) => {
		if (error) {
			console.log(error);
		}
		if (result.length > 0) {
			return res.send({ "status": 1, "result": result });
		}
		else {
			//for bootstrap datatable
			res.send('{ "sEcho": 1,"iTotalRecords": "0", "iTotalDisplayRecords": "0", "aaData": []}')
		}
	});


});

//API to Fetch particular mentors
router.post("/fetchmentee", async (req, res) => {
	const uid = req.body.uid;


	db.query('select * from mentee a join auth_user b on a.login_id=b.login_id where a.status like "1" and a.Mentee_id=?', [uid], (error, result) => {
		if (error) {
			console.log(error);
		}
		if (result.length > 0) {
			result[0].success = "true"
			return res.json(result);
		}
		else {
			const resul = { success: 'false' };
			return res.json(resul);
		}
	});


});






// Edit Mentee
router.post('/editmentee', async (req, res) => {
	const editUser = {
		name: req.body.name,
		phone: req.body.phoneprime,
		address: req.body.address,
		id : req.body.id,  //pass login id
		
	};
	

	try {
		var check1 = await checkMenteephoneprime2(editUser.phone,editUser.id);
		var	check3 = await checkMentorphoneprime(editUser.phone);
		console.log(check1);
		console.log(check3);
			if (check1!=0 || check3!=0)
			{
				return res.json({ status: 0, message: 'phone_exist' });
			}



		const [result] = await db.promise().query('SELECT * FROM mentee WHERE mentee_id=? ', [editUser.id]);

		if (result.length != 0) {
			const log_id = result[0].login_id;
			console.log(log_id);
			
			
			const [updateResult] = await db.promise().query('UPDATE auth_user SET name = ? WHERE login_id = ?', [editUser.name, log_id]);

			const [updateResult2] = await db.promise().query('UPDATE mentee SET Phone_primary = ? , Address = ? WHERE login_id = ?', [editUser.phone, editUser.address, log_id]);
			if (updateResult.affectedRows > 0 && updateResult2.affectedRows > 0) {
				return res.json({ status: 1, message: 'success' });
			  }
		

			
		} else {
			return res.json({ status: 0, message: 'user_doesnt_exist' });
		}
	} catch (error) {
		console.log(error);
		return res.json({ status: 0, message: 'error' });
	}
});







// Delete Mentee
router.post("/deletementee", async (req, res) => {
	const delUser = {
		uid : req.body.id,  //pass login id
		
	};




	try {
	


		const [result] = await db.promise().query('SELECT * FROM auth_user WHERE login_id=? ', [delUser.uid]);

		if (result.length != 0) {
			
			
			const [updateResult] = await db.promise().query('DELETE from mentee where login_id=?', [delUser.uid]);

			const [updateResult2] = await db.promise().query('DELETE from auth_user where login_id=?', [delUser.uid]);
			if (updateResult.affectedRows > 0 && updateResult2.affectedRows > 0) {
				return res.json({ status: 1, message: 'success' });
			  }

		}
		else{
			return res.json({ status: 0, message: 'user_doesnt_exist' });
		}
		
	}
	catch (error) {
		console.log(error);
		return res.json({ status: 0, message: 'error' });
	}



  

	
});

//Add mentor Functions
//-----------------------------------------------
async function checkMentormail(email) {
	try {
		const query = 'SELECT * FROM auth_user WHERE username=?';
		const result = await new Promise((resolve, reject) => {
			db.query(query, [email], (error, result) => {
				if (error) {
					reject(error);
				} else {
					resolve(result);
				}
			});
		});
		if (result.length !== 0) {
			return 1;
		} else {
			return 0;
		}
	} catch (error) {
		console.error(error);
		return 0;
	}
}

async function checkMentorphoneprime(phoneprimary) {
	try {
		const query = 'SELECT * FROM mentor WHERE Phone_primary=?';
		const result = await new Promise((resolve, reject) => {
			db.query(query, [phoneprimary], (error, result) => {
				if (error) {
					reject(error);
				} else {
					resolve(result);
				}
			});
		});
		if (result.length !== 0) {
			return 2;
		} else {
			return 0;
		}
	} catch (error) {
		console.error(error);
		return 0;
	}
}







//--------------------------------------------------------------






//Add mentee Functions
//-----------------------------------------------
async function checkMenteemail(email) {
	try {
		const query = 'SELECT * FROM mentee WHERE Email=?';
		const result = await new Promise((resolve, reject) => {
			db.query(query, [email], (error, result) => {
				if (error) {
					reject(error);
				} else {
					resolve(result);
				}
			});
		});
		if (result.length !== 0) {
			return 1;
		} else {
			return 0;
		}
	} catch (error) {
		console.error(error);
		return 0;
	}
}

async function checkMenteephoneprime(phoneprimary) {
	try {
		const query = 'SELECT * FROM mentee WHERE Phone_primary=?';
		const result = await new Promise((resolve, reject) => {
			db.query(query, [phoneprimary], (error, result) => {
				if (error) {
					reject(error);
				} else {
					resolve(result);
				}
			});
		});
		if (result.length !== 0) {
			return 2;
		} else {
			return 0;
		}
	} catch (error) {
		console.error(error);
		return 0;
	}
}

async function checkMenteephoneprime2(phoneprimary,ids) {
	try {
		const query = 'SELECT * FROM mentee WHERE Phone_primary=? and mentee_id!=?';
		const result = await new Promise((resolve, reject) => {
			db.query(query, [phoneprimary,ids], (error, result) => {
				if (error) {
					reject(error);
				} else {
					resolve(result);
				}
			});
		});
		if (result.length !== 0) {
			return 2;
		} else {
			return 0;
		}
	} catch (error) {
		console.error(error);
		return 0;
	}
}



//--------------------------------------------------------------




//Bcrypt Functions
//--------------------------------------------------------------
async function encr(pass) {
	const hash = await encdec.enc(pass);
	return hash;
}

async function decr(pass, hashpass) {
	const dhash = await encdec.dec(pass, hashpass);
	return dhash;
}

//--------------------------------------------------------------

module.exports = router;