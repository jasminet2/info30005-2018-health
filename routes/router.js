var express = require('express');
var router = express.Router();
var controller = require('../controllers/control.js');


router.route('/').get(controller.homepage);
router.route('/users').get(controller.showUsers);
router.route('/users/:id').get(controller.userFind);
router.route('/comingsoon').get(controller.comingSoon);
router.route('/habit').get(controller.habit);
router.route('/signup').get(controller.signStart);
router.route('/login').get(controller.login);
router.route('/signup').post(controller.signup);
router.route('/login').post(controller.authenticate);
router.route('/success').get(controller.success);


module.exports = router;
