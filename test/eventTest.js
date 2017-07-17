const mongoose = require('mongoose');
const expect = require('chai').expect;
const Event = require('../client/model/event.model');
 
describe('event', function() {
    it('should be invalid if first name is empty', function(done) {
        var event = new Event();
 
        event.validate(function(err) {
            expect(err.errors.firstName).to.exist;
            done();
        });
    });
    it('should be invalid if last name is empty', function(done) {
        var event = new Event();
 
        event.validate(function(err) {
            expect(err.errors.lastName).to.exist;
            done();
        });
    });
    it('should be invalid if email is empty', function(done) {
        var event = new Event();
 
        event.validate(function(err) {
            expect(err.errors.email).to.exist;
            done();
        });
    });
    it('should be invalid if date is empty', function(done) {
        var event = new Event();
 
        event.validate(function(err) {
            expect(err.errors.date).to.exist;
            done();
        });
    });
});