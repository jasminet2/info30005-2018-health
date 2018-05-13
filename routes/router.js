var express = require('express');
var router = express.Router();
var controller = require('../controllers/control.js');


router.route('/').get(controller.homepage);
router.route('/habit').get(controller.habit);
router.route('/signup').get(controller.signStart);
router.route('/login').get(controller.login);
router.route('/signup').post(controller.signup);
router.route('/login').post(controller.loginUser);

router.route('/logout').get(controller.logout);

router.route('/success').get(controller.success);
router.route('/api/authLogin').post(controller.authenticate);
router.route('/api/authUser').post(controller.authUser);
router.route('/api/authEmail').post(controller.authEmail);


router.route('/api/user/data').get(controller.getUserData);

router.route('/api/user/loadHabit').get(controller.loadHabit);
router.route('/api/user/addhabit').post(controller.addHabit);


router.route('/api/user/addStreak').post(controller.addStreak);
router.route('/api/user/removeHabit').post(controller.removeHabit);

router.route('/api/user/levelup').get(controller.level);

module.exports = router;
