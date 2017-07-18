var expect = require('chai').expect;
var sinon = require('sinon');

var save = require('../client/saveToDB/save');
var Event = require('../client/model/event.model');

describe('save with stub', function() {
	beforeEach(function() {
		sinon.stub(Event, 'find');
  });
  
	afterEach(function() {
		Event.find.restore();
	});

	it('should send all events', function() {
		var a = { name: 'a' };
		var b = { name: 'b' };
		var expectedModels = [a, b];
		Event.find.yields(null, expectedModels);
		var req = { params: { } };
		var res = {
			send: sinon.stub()
		};

		save.allEvents(req, res);

		sinon.assert.calledWith(res.send, expectedModels);
	});

});