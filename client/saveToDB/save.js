const Event = require('../model/event.model.js');

module.exports.allEvents = function(req, res) {
  Event.find({}, function(err, events) {
    res.send(events);
  })
};

module.exports.saveToDB = function(obj) {
  Event.create({firstName: obj.firstName, lastName: obj.lastName, email: obj.email, date: obj.date}, function(err, event) {
    if (err) {console.error(err)}
    else {console.log(event)}
  })
}

module.exports.deleteFromDB = function(obj) {
  Event.find({firstName: obj.firstName, lastName: obj.lastName, email: obj.email, date: obj.date})
  .remove({})
  .exec()
}