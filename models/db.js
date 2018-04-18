var faker = require('faker');

var randomName = faker.name.findName(); // Rowan Nikolaus
var randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz
var randomCard = faker.helpers.createCard(); // random contact card containing many properties
var randomStreak = faker.random.number(30);
var randomGoals = faker.random.number(30);
var randomPoints= faker.random.number({min:500, max:1000});


var userArray = function(){

  var uArray = [];
  for(i =0; i < 100; i++){

    uArray.push(
      {
      name: faker.name.findName(),
      email: faker.internet.email(),
      id: i+1,
      streak: faker.random.number(30),
      goals: faker.random.number(30),
      points: faker.random.number({min:500, max:1000})

      }
   )


  }
  return uArray;
};

var user = userArray();

module.exports = user;
