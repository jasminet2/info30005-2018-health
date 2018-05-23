var mongoose  = require('mongoose');

var habitSchema = mongoose.Schema (
  {

  "category": Number,
  "title": String,
  "timeFrame": Number,
  "streak": Number,
  "userID": String,
  "completed": {type: Boolean, default: false}
  });


mongoose.model('habit', habitSchema);
