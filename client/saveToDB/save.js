const Event = require('../model/event.model.js');

module.exports.allEvents = function(req, res) {
  Event.find({}, function(err, events) {
    res.send(events);
  })
};