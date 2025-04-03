const express = require('express')
const {signUp, updateSingleUser, deleteSingleUser, getSingleUser, getAllUsers} = require('../controllers/auth')
const isLoggedIn = require('../middlewares/isLoggedIn')
const isAdmin = require('../middlewares/isAdmin')
const userRouter = express.Router()

userRouter.route('/').post(isLoggedIn, signUp).get(getAllUsers)

userRouter.route('/:userId').get(getSingleUser).delete(isLoggedIn, isAdmin, deleteSingleUser).patch(updateSingleUser)

module.exports = userRouter
