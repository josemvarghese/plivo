require('async');
require('await');
const contactService = require('./contact.service');

let saveContact = async(req,res,next)=>{
	try{ 
		let savedData = await contactService.saveContact(req.body.name,req.body.email,req.body.mobile);
		res.status(200).json({message:"contact created successfully", data:savedData})
	}
	catch (err) {
		res.status(500).json({error:err})
	}
};
let editContact = async(req,res,next)=>{
	try{ 
		let updatedData = await contactService.editContact(req.body.name,req.body.email,req.body.mobile,req.body.id);
		res.status(200).json({message:"contact updated successfully"})
	}
	catch (err) {
		res.status(500).json({error:err})
	}
};
let searchContact = async(req,res,next)=>{
	try{ 
		let processedData = await contactService.contactSearch(req.params.search,req.params.page);
		res.status(200).json({data:processedData})
	}
	catch (err) {
		res.status(500).json({error:err})
	}
};
let deleteContact = async(req,res,next)=>{
	try{ 
		let deletionInfo = await contactService.deleteContact(req.params.id);
		res.status(200).json({message:"deleted successfully",deletionInfo:deletionInfo})
	}
	catch (err) {
		res.status(500).json({error:err})
	}
};
exports.saveContact=saveContact;
exports.editContact=editContact;
exports.searchContact=searchContact;
exports.deleteContact=deleteContact;	