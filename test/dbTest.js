const mongoose = require('mongoose');
const expect = require('chai').expect;

const testSchema = new Schema({
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
    mongoose.connect('mongodb://localhost/testDatabase');
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
        date: ISODate("2017-07-17T16:08:41.703Z")
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
  });

  //After all tests are finished drop database and close connection
  after(function(done){
    mongoose.connection.db.dropDatabase(function(){
      mongoose.connection.close(done);
    });
  });

})