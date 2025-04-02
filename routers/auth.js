const express = require('express')
const {signUp, updateSingleUser, deleteSingleUser, getSingleUser, getAllUsers} = require('../controllers/auth')
const userRouter = express.Router()

userRouter.route('/').post(signUp).get(getAllUsers)

userRouter.route('/:userId').get(getSingleUser).delete(deleteSingleUser).patch(updateSingleUser)

module.exports = userRouter
