const contactDAL = require('./contact.DAL');
require('async');
require('await');

async function contactSearch(search,page) {
	let data= await contactDAL.search(search,page)
 	return data;
}

async function saveNewContact(name,email,mobile) {
 let data= await contactDAL.saveNewContact(name,email,mobile)
 return data;
}
async function editContact(name,email,mobile,id) {
	let data= await contactDAL.updateContact(name,email,mobile,id);
	return data;
}
async function deleteContact(id){
	let data= await contactDAL.contactDelete(id)
	return data;
}

exports.contactSearch=contactSearch;
exports.saveNewContact=saveNewContact;
exports.editContact=editContact;
exports.deleteContact=deleteContact;