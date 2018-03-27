var faker = require('faker');

var randomName = faker.name.findName(); // Rowan Nikolaus
var randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz
var randomCard = faker.helpers.createCard(); // random contact card containing many properties



var userArray = function(){

  var uArray = [];
  for(i =0; i < 100; i++){

    uArray.push(
      {
      name: faker.name.findName(),
      email: faker.internet.email(),
      id: i+1

      }
   )


  }
  return uArray;
};

var user = userArray();

module.exports = user;
