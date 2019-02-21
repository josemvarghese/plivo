
const express = require('express');
const router = express.Router();
const contact = require('./contact.api');
const passportConfig = require('../../config/passport');

router.use('/api/contact',passportConfig.isAuthenticated,contact);

module.exports = router;	
