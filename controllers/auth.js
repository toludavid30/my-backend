const userModel = require('../models/users')


const signUp = async (req,res) =>{
    try {
        const user = await userModel.create(req.body)
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

module.exports = {signUp, getAllUsers, getSingleUser,deleteSingleUser, updateSingleUser}

