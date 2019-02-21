const mongoose = require('mongoose');
const contactSchema = new mongoose.Schema({
    name:String,
    email: { type: String, unique: true, lowercase: true },
    phoneNumber:String
});

module.exports = mongoose.model('Contact', contactSchema);