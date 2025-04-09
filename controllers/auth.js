const userModel = require('../models/users')
const blackListModel = require('../models/blackListTokens')
const bcrypt = require('bcryptjs')
const _jwt = require('jsonwebtoken')
const dotenv = require('dotenv')


const signUp = async (req,res) =>{
    try {
        const {password} = req.body
        const salt = await bcrypt.genSalt(10)
        const hashPassword = await bcrypt.hash(password, salt)
        const user = await userModel.create({...req.body, password: hashPassword})
        if(!user){
            res.status(400).json({
                status: 'error',
                message: 'user not created'
            })
        }
        res.status(201).json({
            status:'staus',
            message : 'User created successfully.',
            user
        })
    } catch (error) {
        console.log(error);
        
    }
}

const signIn = async (req,res) =>{
    const {email, password} = req.body
    try{
        const user = await userModel.findOne({email})
        if(!user){
            res.status(400).json({
                status: 'error',
                message: 'user not found'
            })
        }
       const passwordMatch = await bcrypt.compare(password, user.password)
       if(!passwordMatch){
            res.status(400).json({
                status: 'error',
                message: 'Email or password is incorrect'
            })
        }
        const token = _jwt.sign({userId: user._id,email: user.email}, process.env.jwt_secret, {expiresIn: process.env.jwt_exp})
        res.status(200).json({
            status: 200,
            message: 'user logged in successfully',
            token
        })

        // res.cookie('token', token, {httpOnly: true, secure: false, sameSite: 'strict'})
    }
    catch(error){
        console.log(error);
    } 
}

const getAllUsers = async(req, res) =>{
    try{
        let users = await userModel.find()
        if(!users){
            res.status(400).json({
                status: 'error',
                message: 'users not found'
            })
        }
        res.status(200).json({
            status: 'success',
            message: 'users found',
            users
        })
    }
    catch(error){
        console.log(error);
    }
}
const getSingleUser = async(req, res) =>{
    try{
        const {userId} = req.params
        let users = await userModel.findById(userId)
        if(!users){
            res.status(400).json({
                status: 'error',
                message: 'users not found'
            })
        }
        res.status(200).json({
            status: 'success',
            message: 'users found',
            users
        })
    }
    catch(error){
        console.log(error);
    }
}
const deleteSingleUser = async(req, res) =>{
    try{
        const {userId} = req.params
        let users = await userModel.findByIdAndDelete(userId)
        if(!users){
            res.status(400).json({
                status: 'error',
                message: 'users not found'
            })
        }
        res.status(200).json({
            status: 'success',
            message: 'users found',
            users
        })
    }
    catch(error){
        console.log(error);
    }
}
const updateSingleUser = async(req, res) =>{
    try{
        const {userId} = req.params
        let users = await userModel.findByIdAndUpdate(userId, req.body)
        if(!users){
            res.status(400).json({
                status: 'error',
                message: 'users not found'
            })
        }
        res.status(200).json({
            status: 'success',
            message: 'users found',
            users
        })
    }
    catch(error){
        console.log(error);
    }
}

const isLoggedOut = async (req, res) => {
    const {token} = req.body
    try {
        const blackList = await blackListModel.create({token})
        res.status.json({
            status: 200,
            message: 'user loggedout successfully'
        })
    } catch (error) {
        console.log(error); 
    }
}

module.exports = {signUp, getAllUsers, getSingleUser,deleteSingleUser, updateSingleUser, signIn, isLoggedOut}

