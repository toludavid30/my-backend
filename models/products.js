const { default: mongoose } = require("mongoose");

const productSchema = new mongoose.Schema({
    name : {
        type: String,
        required : true
    },
    type : {
        type: String,
        required : true
    },
    id:{
        type: String,
        required : true,
        unique: true
    }
    
})

    const productModel = mongoose.model('products', productSchema)
    module.exports = productModel