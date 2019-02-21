
const express = require('express');
const router = express.Router();
const auth = require('./auth.api');

router.use('/api/auth',auth);

module.exports = router;	
