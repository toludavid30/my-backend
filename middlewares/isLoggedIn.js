const jwt = require('jsonwebtoken');
const userModel = require('../models/users');
const blackListModel = require('../models/blackListTokens');
const dotenv = require('dotenv')

const isLoggedIn = (req, res, next) => {
    let token;
    // check if token is in the body
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        token = req.headers.authorization.split(" ")[1]
    }
    if (!token) {
        res.status(401).json({
            status: 'error',
            message: 'user not logged in'
        })
        return
    }

    // check if token is valid
    const decoded = jwt.verify(token, process.env.jwt_secret)

    // check if token is blacklisted
    const isBlacklisted = blackListModel.findOne({token})
    if(isBlacklisted){
        res.status(401).json({
            status: 'error',
            message: 'invalid token'
        })
        return
    }

    // get the user from the token
    const {email} = decoded
    const user = userModel.findOne({email}) 
    req.user = user


    next()
}

module.exports = isLoggedIn
