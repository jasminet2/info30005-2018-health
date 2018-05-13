var mongoose  = require('mongoose');

var habitSchema = mongoose.Schema (
  {

  "category": Number,
  "title": String,
  "timeFrame": Number,
  "streak": Number,
  "userID": String

  }
);


mongoose.model('habit', habitSchema);
