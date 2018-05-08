var mongoose  = require('mongoose');

var userSchema = mongoose.Schema (
  {

  "fname": String,
  "lname": String,
  "email": String,
  "userName": String,
  "password": String

  }
);


mongoose.model('user', userSchema);
