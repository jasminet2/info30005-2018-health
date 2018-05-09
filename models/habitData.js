var mongoose  = require('mongoose');

var habitSchema = mongoose.Schema (
  {

  "category": Number,
  "title": String,
  "repes": Number,
  "userName": String,

  }
);


mongoose.model('habit', habitSchema);
