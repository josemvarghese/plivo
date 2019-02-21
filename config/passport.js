const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const User = require('../components/auth/user.model');


passport.serializeUser((user, done) => {
	done(null, user.id);
});

passport.deserializeUser((id, done) => {
	User.findById(id, (err, user) => {
		done(err, user);
	});
});

passport.use(new LocalStrategy({ usernameField: 'email' }, (email, password, done) => {
	User.findOne({ email: email.toLowerCase() }, (err, user) => {
		if (err) { return done(err); }
		if (!user) {
			return done(null, false, { msg: `Email ${email} not found.` });
		}
		if(user.password){
			user.comparePassword(password, (err, isMatch) => {
				if (err) { 
					return done(err); 				}
				if (isMatch) {
					return done(null, user);
				}
			});
		}
		else{
			return done(null,false,{msg:'Please check your email or password' });

		}
	});
}));

exports.isAuthenticated = (req, res, next) => {
	if (req.isAuthenticated()) {
		return next();
	}
	else {
		res.status(401).json({ message: 'Unauthorized user' });
	}
};