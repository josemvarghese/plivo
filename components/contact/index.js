
const express = require('express');
const router = express.Router();
const contact = require('./contact.api');
const passportConfig = require('../../config/passport');

// router.use('/api/contact',passportConfig.isAuthenticated,contact);
router.use('/api/contact',contact);


module.exports = router;	
