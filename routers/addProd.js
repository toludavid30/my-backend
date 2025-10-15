const express = require('express')
const {addProducts,getAllProducts, getSingleProduct,deleteSingleProduct,updateSingleProduct} = require('../controllers/addProd')
const uploadImage = require('../middlewares/multer')
const productRouter  = express.Router()

productRouter.route('/').post( uploadImage.single("image"),addProducts).get(getAllProducts)
productRouter.route('/:productId').get(getSingleProduct).delete(deleteSingleProduct).patch(updateSingleProduct)


module.exports = productRouter
