const mongoose = require('mongoose')


const userSchema = new mongoose.Schema({
    name : {
        type: String,
        required : [true, 'name is required']
    },
    email : {
        type: String,
        required : true,
        unique: [true, 'email is required']
    },
    password : {
        type: String,
        required : [true, 'password is required']
    },
    role :{
        type: String,
        enum: ["user", "admin"],
        default : "user"
    }
})


const userModel = mongoose.model('users', userSchema)
module.exports = userModel