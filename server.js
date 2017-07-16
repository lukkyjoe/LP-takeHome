const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const app = express();
const config = require('./client/config/config');
const router = express.Router(); 
let Event = require('./client/model/event.model');

app.use(morgan('dev'));                                         // log every request to the console
app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                                     // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(methodOverride());
app.use('/api', router);

router.get('/hello', function(request, response) {
  response.json({message: 'the router is working'})
})

router.post('/', function (request, response) {
  console.log('what did you get?', request);
  let event = new Event({firstName: 'Bob', lastName: 'Dylan', email: 'bob.dylan@dobbylan.com', date: Date()});
  event.save(function(err) {
    if (err) {
      response.send(err);
    } else {
      response.json({message: 'Event created'});
    }
  })
})

//Connecting MongoDB using mongoose to our application
mongoose.connect(config.db);

//This callback will be triggered once the connection is successfully established to MongoDB
mongoose.connection.on('connected', function () {
  console.log('Mongoose default connection open to ' + config.db);
});

//Express application will listen to port mentioned in our configuration
app.listen(config.port, function(err){
  if(err) throw err;
  console.log("App listening on port "+config.port);
});