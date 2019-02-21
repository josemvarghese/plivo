
const User = require('./user.model');

function checkUserExists(email) {
	return User.findOne({email:email})
}
function saveUserInfo(email,password) {
	let newUser = new User({
		email:email,
		password:password
	})
	return newUser.save();
}
exports.checkUserExists=checkUserExists;
exports.saveUserInfo=saveUserInfo