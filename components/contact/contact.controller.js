require('async');
require('await');
const fs = require('fs');
const handlebars = require('handlebars');
const contactService = require('./contact.service');
var pdf = require('html-pdf');
// var html = fs.readFileSync('./test/businesscard.html', 'utf8');
var options = { format: 'Letter' };

let saveContact = async(req,res,next)=>{
	try{ 
		let savedData = await contactService.saveNewContact(req.body.name,req.body.email,req.body.mobile);
		res.status(200).json({message:"contact created successfully"})
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
let emailPdf = async(req,res,next)=>{
	try{ 
		createTemplate(req,res,next);
		// res.status(200).json({message:" successfully"})
	}
	catch (err) {
		res.status(500).json({error:err})
	}
};
var readHTMLFile = function(path, callback) {
		console.log(path)	
		fs.readFile(path, {encoding: 'utf-8'}, function (err, html) {
			if (err) {
			}
			else {
				callback(null, html);
			}
		});
	};

async function readHTMLFile(path) {
	try{ 
		
	}
	catch (err) {
		console.log('err',err)
	}
}

async function createTemplate(req,res,next) {
			 console.log("htmlToSend")
    let templateHtml = fs.readFileSync(__dirname + '/../../public/email_templates/welcome-email.html', "utf-8");

	// readHTMLFile(__dirname + '/../../public/email_templates/welcome-email.html', function(err, html) {
	console.log("htmlToSend1")
	var template =await  handlebars.compile(templateHtml);
	var replacements={};
	replacements = {
	username: "jose m varghesee"
	};
	var htmlToSend = await template(replacements);
	// console.log(htmlToSend)

	let pdfLInk = await generatePdf(htmlToSend)
	console.log(pdfLInk)
	res.status(200).json({message:" successfully",pdfLInk:pdfLInk})
	// if(htmlToSend){
	// pdf.create(htmlToSend, options).toFile('./businesscard1.pdf', function(err, res) {
	//   if (err) return console.log(err);
	//   console.log(res); // { filename: '/app/businesscard.pdf' }
	// });
	// }
	// });

}
function generatePdf(htmlToSend) {
	pdf.create(htmlToSend, options).toFile('./businesscard1.pdf', function(err, res) {
	  if (err) {
	  	return null
	  }
	  else{
	  	console.log(res)
	  	return res;

	  } // { filename: '/app/businesscard.pdf' }
	});
	
}

exports.saveContact=saveContact;
exports.editContact=editContact;
exports.searchContact=searchContact;
exports.deleteContact=deleteContact;	
exports.emailPdf=emailPdf;	