const productModel = require('../models/products')

const addProducts = async(req, res) =>{
    try {
    let products = await productModel.create(req.body)
    if(!products){
        res.status(400).json({
            status: 'error',
            message: 'product not added'
        })
    }
    res.status(201).json({
        status:'success',
        message : 'Product added successfully.',
        products
    })    
    } catch (error) {
        console.log(error);
        
    }
}
const getAllProducts = async(req, res) =>{
    try{
        let products = await productModel.find()
        if(!products){
            res.status(400).json({
                status: 'error',
                message: 'products not found'
            })
        }
        res.status(200).json({
            status: 'success',
            message: 'products found',
            products
        })
    }
    catch(error){
        console.log(error);
    }
}
const getSingleProduct = async(req, res) =>{
    try{
        const {productId} = req.params
        let products = await productModel.findById(productId)
        if(!products){
            res.status(400).json({
                status: 'error',
                message: 'products not found'
            })
        }
        res.status(200).json({
            status: 'success',
            message: 'products found',
            products
        })
    }
    catch(error){
        console.log(error);
    }
}
const deleteSingleProduct = async(req, res) =>{
    try{
        const {productId} = req.params
        let products = await productModel.findByIdAndDelete(productId)
        if(!products){
            res.status(400).json({
                status: 'error',
                message: 'products not found'
            })
        }
        res.status(200).json({
            status: 'success',
            message: 'products found',
            products
        })
    }
    catch(error){
        console.log(error);
    }
}
const updateSingleProduct = async(req, res) =>{
    try{
        const {productId} = req.params
        let products = await productModel.findByIdAndUpdate(productId, req.body)
        if(!products){
            res.status(400).json({
                status: 'error',
                message: 'products not found'
            })
        }
        res.status(200).json({
            status: 'success',
            message: 'products found',
            products
        })
    }
    catch(error){
        console.log(error);
    }
}

module.exports = {addProducts, getAllProducts, getSingleProduct,deleteSingleProduct, updateSingleProduct}
