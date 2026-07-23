var express = require('express');
const http = require('http');
var router = express.Router();
var db = require("../db")       // import wherever required
var encdec = require("../encdec");

/* GET users listing. */
router.get('/', function (req, res, next) {
	//   res.send('respond with a resource');
	
		res.send("Mnetee route")
	
});



// Edit Mentee
router.post('/updatepassfirst', async (req, res) => {
	const newUser = {
		id: req.body.id,
		mail: req.body.mail,
		currentpass: req.body.currentpass,
		newpass : req.body.newpass,  //pass login id
		
	};

	

	if (newUser.id && newUser.mail && newUser.currentpass && newUser.newpass) {
		console.log("All parameters are not empty");
	  }
	   else {
		return res.json({ status: 0, message: 'post_parameters_empty' });
	  }
	

	try {
		
		


		const [result] = await db.promise().query('SELECT * FROM mentee a join auth_user b on a.login_id=b.login_id WHERE mentee_id=? ', [newUser.id]);

		if (result.length != 0) {
			const result_mail = result[0].username;
			const result_pass = result[0].password;

		console.log(newUser.currentpass);

			var verifymail = await (decr(result_mail,newUser.mail ))
			if(verifymail=="true")
			{
				var verifyoldpass = await (decr(newUser.currentpass,result_pass ))
				if(verifyoldpass=="true")
				{
					const [result3] = await db.promise().query('SELECT * FROM mentee WHERE mentee_id=? ', [newUser.id]);

			            if (result3.length != 0) {
				       const login_id = result[0].login_id;
					   const hpass = await encr(newUser.newpass);
				       const [updateResult1] = await db.promise().query('UPDATE auth_user SET password = ? WHERE login_id = ?', [hpass, login_id]);
					   const [updateResult2] = await db.promise().query('UPDATE mentee SET status = ? WHERE login_id = ?', [1, login_id]);
					   if (updateResult1.affectedRows > 0 && updateResult2.affectedRows > 0) {
						return res.json({ status: 1, message: 'success' });
					  }
			    }

				}
				else{
					res.send({ status: 0, message: 'old_pass_mismatch' })
				}

			}
			else{
				res.send({ status: 0, message: 'Email_mismatch' })
			}
			


			
			
		

			
		} else {
			return res.json({ status: 0, message: 'user_doesnt_exist' });
		}
	} catch (error) {
		console.log(error);
		return res.json({ status: 0, message: 'error' });
	}
});






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