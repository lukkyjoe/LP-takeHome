const mongoose = require('mongoose');
const expect = require('chai').expect;
const config = require('../client/config/config');

const testSchema = mongoose.Schema({
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

const TestEvent = mongoose.model('TestEvent', testSchema);

describe('Database Tests', function() {
  //Before starting the test, create a sandboxed database connection
  //Once a connection is established invoke done()
  before(function (done) {
    mongoose.connect(config.test_db);
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error'));
    db.once('open', function() {
      console.log('We are connected to test database!');
      done();
    });
  });

  //Save object with 'firstName' value of 'Piotr"
  describe('Test the database', function() {
    it('New name saved to test database', function(done) {
      var testName = TestEvent({
        firstName: 'Piotr',
        lastName: 'Kowalski',
        email: 'test@test.com',
        date: Date()
      });
      testName.save(done);
    });
  

    it('Dont save incorrect format to database', function(done) {
      //Attempt to save with wrong info. An error should trigger
      var wrongSave = TestEvent({
        notName: 'Not Piotr'
      });
      wrongSave.save(err => {
        if(err) { return done(); }
        throw new Error('Should generate error!');
      });
    });

    it('Should retrieve data from test database', function(done) {
      //Look up the object previously saved.
      TestEvent.find({firstName: 'Piotr'}, (err, firstName) => {
        if(err) {throw err;}
        if(firstName.length === 0) {throw new Error('No data.');}
        done();
      });
    });
  });

  //After all tests are finished drop database and close connection
  after(function(done){
    mongoose.connection.db.dropDatabase(function(){
      mongoose.connection.close(done);
    });
  });

})