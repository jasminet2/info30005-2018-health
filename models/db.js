var faker = require('faker');

var randomName = faker.name.findName(); // Rowan Nikolaus
var randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz
var randomCard = faker.helpers.createCard(); // random contact card containing many properties
var randomStreak = faker.random.number(30);
var randomGoals = faker.random.number(30);
var randomPoints= faker.random.number({min:500, max:1000});
var mongoose  = require('mongoose');
var mongo = require('mongodb');

mongoose.connect('mongodb://userData:pwd2018@ds117200.mlab.com:17200/user', function(err){

  if(!err){

    console.log('Connected to mongo');

  } else {

    console.log('Failed to connect to mongo');

  }

});
require('./userData.js');
require('./habitData.js');
