const express = require('express');
const { getProducts } = require('../controllers/getProd');
const getProductsRouter = express.Router();

getProductsRouter.route('/all').get(getProducts)


module.exports = getProductsRouter;