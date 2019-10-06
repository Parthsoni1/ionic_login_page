const express = require('express');
const router = express.Router();

const collageController = require('../Controllers/CollageController');

router.route('')
.get(collageController.index)
.post(collageController.Collage)

router.route('/:deptId')
.post(collageController.newUsers)
module.exports = router; 