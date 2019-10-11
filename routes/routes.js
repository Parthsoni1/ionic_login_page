const express = require('express');
const router = express.Router();

const collageController = require('../Controllers/CollageController');

router.route('')
.get(collageController.index)
.post(collageController.Collage)

router.route('/dept')
.get(collageController.allStudent)
.post(collageController.newUsers)

router.route('/login')
.post(collageController.userLogin)


module.exports = router; 