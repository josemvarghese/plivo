const authDAL = require('./auth.DAL');
require('async');
require('await');

async function saveNewUser(email,password) {
	let userExists= await authDAL.checkUserExists(email);
	if(userExists){
		return {userExists:true, newUser:false}
	}
	else{
		let newUser = await authDAL.saveUserInfo(email,password);
		return newUser
	}
}

async function signIn(email,password) {
 let data= await authDAL.logIn(name,email,mobile)
 return data;
}

exports.saveNewUser=saveNewUser;
exports.signIn=signIn;
