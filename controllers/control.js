const userData = require('../models/db.js');
var mongoose = require('mongoose');
var Users = mongoose.model('user');

module.exports = {


      homepage: function(req, res) {

          res.render('index.ejs', {userData});

      },

      comingSoon: function(req, res) {

          res.render('comingsoon.ejs', {userData});

      },

      habit: function(req, res) {

          res.redirect('/login');

      },

      showUsers: function(req, res) {

          res.render('users.ejs', {userData});

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

      },

      signStart: function(req, res){

          res.render('signup.ejs', {userData});

      },
      success: function(req, res){

          res.render('signLanding.ejs');

      },
      login: function(req, res){
          res.render('login.ejs');
      },
      authenticate: function(req, res){

        Users.findOne({userName: req.body.userName, password: req.body.password},function(err, userinfo){

          if(userinfo && !err){
            //this is what it does after
            res.render('habit.ejs', {userinfo});

          } else {

            res.send("Username or password is incorrect");

          }

        });


      },
      signup: function(req, res){
          var adduser = new Users({

            "fname": req.body.fname,
            "lname": req.body.lname,
            "email": req.body.email,
            "userName": req.body.userName,
            "password": req.body.password


          });

          //.save saves it to the database

          adduser.save(function(err, adduser){

            if(!err){
              //this is what it does after
              res.redirect('/login');
            } else {

              res.sendStatus(404);

            }

          });



      }


}
