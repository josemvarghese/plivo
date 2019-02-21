require('dotenv').config();
const contactController = require('./contact.controller');
const contactDAL = require('./contact.DAL');
const contactService = require('./contact.service');
const sinon = require('sinon');
const chai = require('chai');
chai.should();
require('async');
require('await');
describe('saveContact', function(){
	let req={ body:{
			name:"jose",
			email:"jose@mail.com",
			mobile:"987845632310"
		}
	};
	let status,
		json,
		res;
	let next;
	beforeEach(() => {
		status = sinon.stub();
		json = sinon.spy();
		next = sinon.spy();
		res = { json, status };
		status.returns(res);
	});
	afterEach(function () {
		sinon.restore();
	});
	let error ='server error';
  it('should save new user information', async()=>{
  	sinon.stub(contactService, 'saveNewContact');
  	await contactController.saveContact(req,res,next);
  	status.calledWith(200).should.be.ok;
	json.calledWith({message:"contact created successfully"}).should.be.ok;
      
  });
   it.only('should save new user information', async()=>{
  	sinon.stub(contactService, 'saveNewContact').yields(error);;
  	await contactController.saveContact(req,res,next);
  	sinon.assert.calledWith(error);
  });

});