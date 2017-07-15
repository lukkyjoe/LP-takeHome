var sinon = require('sinon');
var chai = require('chai');
var expect = chai.expect;

var mongoose = require('mongoose');
require('sinon-mongoose');

//Importing our Event model for our unit testing.
var Event = require('../../app/models/event.model');

describe("Get all events", function(){
      // Test will pass if we get all events
    it("should return all events", function(done){
        var EventMock = sinon.mock(Event);
        var expectedResult = {status: true, Event: []};
        EventMock.expects('find').yields(null, expectedResult);
        Event.find(function (err, result) {
            EventMock.verify();
            EventMock.restore();
            expect(result.status).to.be.true;
            done();
        });
    });

    // Test will pass if we fail to get a event
    it("should return error", function(done){
        var EventMock = sinon.mock(Event);
        var expectedResult = {status: false, error: "Something went wrong"};
        EventMock.expects('find').yields(expectedResult, null);
        Event.find(function (err, result) {
            EventMock.verify();
            EventMock.restore();
            expect(err.status).to.not.be.true;
            done();
        });
    });
});