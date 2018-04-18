var express = require('express');
var router = express.Router();
var controller = require('../controllers/control.js');


router.route('/bye').get(controller.bye);
router.route('/').get(controller.homepage);
router.route('/users').get(controller.showUsers);
router.route('/users/:id').get(controller.userFind);
router.route('/comingsoon').get(controller.comingSoon);
router.route('/habit').get(controller.habit);




module.exports = router;
