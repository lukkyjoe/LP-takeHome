var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// Defining schema for our Event API
var EventSchema = Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  }
});
//Exporting our model
var EventModel = mongoose.model('Event', EventSchema);

module.exports = EventModel;