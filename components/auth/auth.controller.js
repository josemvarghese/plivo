require('async');
require('await');
const authService = require('./auth.service');
const passport = require('passport');


let saveUser = async(req,res,next)=>{
	try{ 
		let data = await authService.saveNewUser(req.body.email,req.body.password);
		if(data.userExists){
			res.status(400).json({message:"user already  alreday exists"})
		}
		else{
			res.status(200).json({message:"user created successfully"})
		}
	}
	catch (err) {
		res.status(500).json({error:err})
	}
};
let singIn =(req,res,next)=>{
	passport.authenticate('local', (err, user, info) => {
		if (err) { 
			res.json({message:'something went wrong'	});
		}
		else if (!user) {
			res.json({info:info});
		}
		else{
			req.logIn(user,(err) => {
				if (err) {
					res.json({message:err});
				}
				else{

					res.json({message:'loggedIn successfully'});
				}
			});
		}
	})(req, res, next);



};
exports.saveUser=saveUser;
exports.singIn=singIn;
