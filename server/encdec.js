var express = require('express');
const bcrypt = require('bcrypt');
const saltRounds = 10;

function enc(pass) {
	return new Promise((resolve, reject) => {
		bcrypt.genSalt(saltRounds, (err, salt) => {
			if (err) {
				reject(err);
			} else {
				bcrypt.hash(pass, salt, (err, hash) => {
					if (err) {
						reject(err);
					} else {
						console.log(hash)
						resolve(hash);
					}
				});
			}
		});
	});
}

function dec(plainpass, hashpass) {
	return new Promise((resolve, reject) => {
		bcrypt.compare(plainpass, hashpass, (err, result) => {
			// console.log(plainpass + " " + hashpass)
			// console.log(result)
			if (err) {
				reject(err);
			} else if (result) {
				resolve("true")
			} else {
				resolve('false')
			}
		});
	})
}


module.exports = { enc, dec };