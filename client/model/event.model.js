var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// Defining schema for our Event API
var EventSchema = Schema({
  firstName: {
    type: String
  },
  lastName: {
    type: String,
  },
  email: {
    type: String,
  },
  date: {
    type: Date,
  }
});
//Exporting our model
var EventModel = mongoose.model('Event', EventSchema);

module.exports = EventModel;