const router = require('express').Router();
const UserController = require('../controllers/user')

router.route('/get').get(UserController.get)
router.route('/create').post(UserController.create)

module.exports = router

