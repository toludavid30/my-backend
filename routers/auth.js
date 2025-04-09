const express = require('express')
const {signUp, updateSingleUser, deleteSingleUser, getSingleUser, getAllUsers, signIn, isLoggedOut} = require('../controllers/auth')
const isLoggedIn = require('../middlewares/isLoggedIn')
const isAdmin = require('../middlewares/isAdmin')
const userRouter = express.Router()

userRouter.route('/').post(signUp).get(getAllUsers)
userRouter.route('/login').post(signIn)
userRouter.route('/logout').post(isLoggedOut)

userRouter.route('/:userId').get(getSingleUser).delete(isLoggedIn, isAdmin, deleteSingleUser).patch(updateSingleUser)

module.exports = userRouter
