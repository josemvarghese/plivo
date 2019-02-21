const Contact = require('./contact.model');


function saveNewContact(name,email,mobile) {
	let newContact = new Contact({
		name:name,
		email:email,
		phoneNumber:mobile
	})
	return newContact.save();
}
function contactDelete(id) {
	return Contact.deleteOne({_id:id})
}
function updateContact(name,email,mobile,id) {
	let data = {};
	if(name){
		Object.assign(data,{name:name});
	}
	if(email){
	Object.assign(data,{email:email});
	}
	if(mobile){
		Object.assign(data,{mobileNumber:mobile})
	}
	return  Contact.updateOne({_id:id},{$set:data})
}
function search(searchText,pagination) {
	let page = parseInt(pagination);
	let mQuery= Contact.find({name:{$regex: new RegExp(searchText, 'i')},email:{$regex: new RegExp(searchText, 'i')}}).skip((page-1)*parseInt(process.env.PAGINATION_LIMIT)).limit(parseInt(process.env.PAGINATION_LIMIT));
	return mQuery.exec();
}

exports.saveNewContact=saveNewContact;
exports.contactDelete=contactDelete;
exports.updateContact=updateContact;
exports.search=search;