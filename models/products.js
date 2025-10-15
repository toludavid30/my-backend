const { default: mongoose } = require("mongoose");

const productSchema = new mongoose.Schema({
    name : {
        type: String,
        required : [true, 'name is required']
    },
    productImage:{
        type: String,
    },
    id:{
        type: String,
        required : true,
        unique: [true, 'id is required']
    },
    category:{
        type: String,
        required : [true, 'type is required']
    },
    price : {
        type: String,
        required : [true, 'price is required']}
})

    const productModel = mongoose.model('products', productSchema)
    module.exports = productModel