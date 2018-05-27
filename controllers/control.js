const userData = require('../models/db.js');
var mongoose = require('mongoose');
var Users = mongoose.model('user');
var Habits = mongoose.model('habit');



var moment = require('moment');
moment().format();


module.exports = {

      homepage: function(req, res) {
        var status = {loggedIn: false};

        if(req.session.user){
          status.loggedIn = true;
          res.render('index.ejs', {status});

        } else {

          res.render('index.ejs', {status});

        }

      },

      habit: function(req, res) {

          if(!req.session.user){

            res.redirect('/login');

          } else {
            var userinfo = req.session.user;
            res.render('habit.ejs', {userinfo});

          };


      },

      signStart: function(req, res){

          res.render('signup.ejs', {userData});

      },
      success: function(req, res){

          res.render('signLanding.ejs');

      },
      login: function(req, res){
        if(!req.session.user){
          res.render('login.ejs');
        }else{
          res.redirect('/habit');
        }
      },
      logout: function(req, res){
          req.session.destroy();
          res.redirect("./login");
      },
      authenticate: function(req, res){
        Users.findOne({userName: req.body.userName, password: req.body.password},function(err, userinfo){
          if(userinfo && !err){
            //this is what it does after
            res.send(true);

          } else {
            res.send(false);
          }
        });
      },
      loginUser: function(req, res){
        Users.findOne({userName: req.body.userName, password: req.body.password},function(err, userinfo){
          if(userinfo && !err){
            //this is what it does after
            req.session.user = userinfo;
            res.redirect('/habit');
          } else {

          }

        });


      },
      signup: function(req, res){
          var adduser = new Users({

            "fname": req.body.fname,
            "lname": req.body.lname,
            "email": req.body.email,
            "userName": req.body.userName,
            "password": req.body.password,
            "points": 0,
            "level": 1


          });

          //.save saves it to the database

          adduser.save(function(err, adduser){

            if(!err){
              //this is what it does after
              res.render('signLanding.ejs');

            } else {

              res.sendStatus(404);

            }

          });



      },

      authUser: function(req, res){
        Users.findOne({userName: req.body.userName},function(err, username){
          if(!username && !err){
              res.send(true);
          } else {
            res.send(false);
          }

        });


      },
      authEmail: function(req, res){
        Users.findOne({email: req.body.email},function(err, email){
          if(!email && !err){
              res.send(true);
          } else {
            res.send(false);
          }

        });


      },

      loadHabit: function(req, res){

          //* updated *//
          Habits.find({userID: req.session.user.userName},function(err, habit){
             var i=0;


             if(habit[0] && !err){

                 var currentDate  = parseInt(moment().format('YYYYMMDD'));
                 var currentWeek  = parseInt(moment().format('YYYYww'));
                 var currentMonth = parseInt(moment().format('YYYYMM'));

                 var lastDate;
                 var lastWeek;
                 var lastMonth;
                 for(var habits in habit){

                    lastDate = parseInt(moment(habit[i].lastModified).format('YYYYMMDD'));
                    lastWeek = parseInt(moment(habit[i].lastModified).format('YYYYww'));
                    lastMonth = parseInt(moment(habit[i].lastModified).format('YYYYMM'));

                         switch(habit[i].timeFrame){
                           case 1:
                           if(currentDate > lastDate){
                                if(currentDate-lastDate>2){
                                  habit[i].streak = 0;
                                } else {
                                habit[i].completed = false;
                              }
                           }
                           break;
                           case 2:
                           if(currentWeek>lastWeek){
                             if(currentWeek-lastWeek>2){
                               habit[i].streak = 0;
                             } else {
                               habit[i].completed = false;
                             }
                           }
                           break;
                           case 3:
                           if(currentMonth>lastMonth) {
                             if(currentMonth-lastMonth>2){
                               habit[i].streak = 0;
                             } else {
                               habit[i].completed = false;
                             }
                           }
                           break;
                           default:
                         	 console.log("default error");

                         }

                         habit[i].save(function(err){
                             if(err){
                                 console.log('ERROR!');
                             }
                         })
                     i++;

                 }

                 res.send(habit);
             }else{
                 res.send(err);
             }
          });
      },

      // updated
      addHabit: function(req, res) {

        var addHabit = new Habits({

          "category": req.body.category,
          "title": req.body.title,
          "timeFrame": req.body.timeFrame,
          "streak": req.body.streak,
          "userID": req.body.userID,
          "lastModified": req.body.habitDate

        });

        //.save saves it to the database

        addHabit.save(function(err, habit){
          if(!err){
            //this is what it does after
            res.send(habit);

          } else {

            res.send(err);

          }

        });

      },
      addStreak: function(req, res){

        Habits.findOneAndUpdate( {_id: req.body.habitID}, {$inc: {"streak": 1}, "lastModified": moment()},function(err, habit){
              if(!err){
                  addpoints();
                  habit.streak++;
                  res.send(habit);

              } else {

                  res.send(err);
              }

          });

        function addpoints(){
          Users.findOneAndUpdate( {userName: req.session.user.userName}, {$inc: {"points": 20}},function(err){
            if(!err){
            } else {
              res.send(err);
            }

          });
        };


        Habits.findById({_id: req.body.habitID}, function(err, habit){
            if(!habit.completed){
                habit.completed = !habit.completed;
                habit.save(function(err){
                    if(err){
                        console.log('Cannot save the data');
                    }
                })
            }
        });

      },
      removeHabit: function(req, res){

        Habits.remove( {_id: req.body.habitID}, function(err){
          if(!err){
            res.send(true);
          } else {
            res.send(err);
          }

        });
      },

      getUserData: function(req, res){

        Users.findOne({userName: req.session.user.userName},function(err, data){
          if(data && !err){
              res.send(data);
          } else {
            res.send(err);
          }
        });


      },
      level: function(req, res){

        Users.findOneAndUpdate( {userName: req.session.user.userName}, {$inc: {"points": -100, "level": 1}},function(err){
          if(!err){
            res.send(true);
          } else {
            res.send(err);
          }

        });


      }


}
