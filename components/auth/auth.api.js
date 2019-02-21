const express = require('express');
const auth = express.Router();
const authController = require('./auth.controller');
/**

 * @api {post} /auth/signup   create user
 * @apiName create user
 * @apiParam {String} email   
 * @apiParam {String} password  
 */

auth.post('/signup' ,(req, res, next)=> {
	authController.saveUser(req, res, next)
});
/**

 * @api {post} /auth/signin   sign in user
 * @apiName singin
 * @apiParam {String} email   
 * @apiParam {String} password  
 */

auth.post('/signin' ,(req, res, next)=> {
	authController.singIn(req, res, next)
});



module.exports = auth;	
