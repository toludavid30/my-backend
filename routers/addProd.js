const express = require('express')
const {addProducts,getAllProducts, getSingleProduct,deleteSingleProduct,updateSingleProduct} = require('../controllers/addProd')
const productRouter  = express.Router()

productRouter.route('/').post(addProducts).get(getAllProducts)
productRouter.route('/:productId').get(getSingleProduct).delete(deleteSingleProduct).patch(updateSingleProduct)


module.exports = productRouter
