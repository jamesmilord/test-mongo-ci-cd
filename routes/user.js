const router = require('express').Router();
const UserController = require('../controllers/user')

router.route('/')
.get(UserController.get)
.post(UserController.create)
.patch(UserController.update)
.delete(UserController.delete)

module.exports = router

