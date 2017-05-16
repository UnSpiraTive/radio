// load the things we need
var mongoose = require('mongoose');

// define the schema for our user model
var chatSchema = mongoose.Schema({
  username : String,
  text: String,
  date: String
});


// create the model for users and expose it to our app
module.exports = mongoose.model('chat', chatSchema, 'chat');
