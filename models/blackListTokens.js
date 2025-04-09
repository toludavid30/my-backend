const mongoose = require('mongoose')

const backlistSchema = new mongoose.Schema({
    token: {
        type: String,
        required : [true, 'token is required']
    }
})

const blackListModel = mongoose.model('blacklistedTokens', backlistSchema)

module.exports = blackListModel