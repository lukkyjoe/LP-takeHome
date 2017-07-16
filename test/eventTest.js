var mongoose = require('mongoose');


var expect = require('chai').expect;
 
var Event = require('../client/model/event.model');
 
describe('event', function() {
    it('should be invalid if first name is empty', function(done) {
        var event = new Event();
 
        event.validate(function(err) {
            expect(err.errors.firstName).to.exist;
            done();
        });
    });
});