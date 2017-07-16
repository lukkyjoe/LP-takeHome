var mongoose = require('mongoose');
 
var eventSchema = new mongoose.Schema({
    firstName: { type: String },
    lastName: { type: String }, 
    email: { type: String }, 
    date: {type: Date}
});
 
module.exports = mongoose.model('Event', eventSchema);