const express = require('express')
const userRouter = express.Router()

const getusers = (req, res) => {
   res.json(
    {
        message: 'user retrieved'
    }
   ) 
}

userRouter.get('/', getusers)




module.exports = userRouter