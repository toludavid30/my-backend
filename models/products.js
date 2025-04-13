const { default: mongoose } = require("mongoose");

const productSchema = new mongoose.Schema({
    name : {
        type: String,
        required : [true, 'name is required']
    },
    type : {
        type: String,
        required : [true, 'type is required']
    },
    id:{
        type: String,
        required : true,
        unique: [true, 'id is required']
    },
    description : {
        type: String,
        required : [true, 'description is required']
    }
    
})

    const productModel = mongoose.model('products', productSchema)
    module.exports = productModel