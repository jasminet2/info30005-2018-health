const userData = require('../models/db.js');

module.exports = {

      bye: function(req, res) {
          res.send("Goodbye World");
      },

      homepage: function(req, res) {

          res.render('index.ejs', {userData});

      },

      comingSoon: function(req, res) {

          res.render('comingsoon.ejs', {userData});

      },

      showUsers: function(req, res) {

          res.render('users.ejs', {userData});

      },

      helloWorld: function(req, res) {

          res.send("Hello World");

      },

      users: function(req, res) {
        var response;
        var temp_string='';
        for(i=0; i<userData.length; i++){
          temp_string+="Name: " + userData[i].name + " Email: " + userData[i].email + "ID: "+ userData[i].id;
        }
        response = temp_string;
        res.send(response);
      },

      userFind: function(req, res){
        var searchID = req.params.id;
        var userFound = false;
        for(i=0; i<userData.length; i++){
            if(userData[i].id==searchID){
              res.send(userData[i]);
              userFound = true;
              break;
            }
        }
        if(!userFound){
          res.send('User not found in database');
        }

      }


}
