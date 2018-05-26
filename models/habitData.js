var mongoose  = require('mongoose');
var moment = require('moment');



var habitSchema = mongoose.Schema (
  {

  "category": Number,
  "title": String,
  "timeFrame": Number,
  "streak": Number,
  "userID": String,
  "completed": {type: Boolean, default: false},
  "lastModified": {type: Date, default: new Date()}
  });


mongoose.model('habit', habitSchema);
