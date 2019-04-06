const express = require('express');
const contact = express.Router();
const contactController = require('./contact.controller');

/**

 * @api {post} /contact/   create contact
 * @apiName create contact
 * @apiParam {String} name   
 * @apiParam {String} email   
 * @apiParam {String} mobile  
 */

contact.post('/' ,(req, res, next)=> {
	contactController.saveContact(req, res, next)
});
/**
 * @api {put} /contact/   update contact
 * @apiName update contact
 * @apiParam {String} name   
 * @apiParam {String} email   
 * @apiParam {String} mobile  
  * @apiParam {String} id 
 */

contact.put('/' ,(req, res, next)=> {
	contactController.editContact(req, res, next)
});
/**
 * @api {delete} /contact/:id   delete contact
 * @apiName delete contact 
 */
contact.delete('/:id' ,(req, res, next)=> {
	contactController.deleteContact(req, res, next)
});
/**
 * @api {get} /contact/   search contact
 * @apiName search contact 
 */
contact.get('/' ,(req, res, next)=> {
	contactController.emailPdf(req, res, next);
});
/**
 * @api {get} /contact/:search/:page   search contact
 * @apiName search contact 
 */
contact.get('/:search/:page' ,(req, res, next)=> {
	contactController.searchContact(req, res, next);
});
module.exports = contact;	
