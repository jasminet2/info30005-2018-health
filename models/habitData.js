var mongoose  = require('mongoose');



var habitSchema = mongoose.Schema (
  {

  "category": Number,
  "title": String,
  "timeFrame": Number,
  "streak": Number,
  "userID": String,
  "completed": {type: Boolean, default: false},
  "modifiedDate": {type: Date, default: new Date("<2018-05-01>")}
  });


mongoose.model('habit', habitSchema);
