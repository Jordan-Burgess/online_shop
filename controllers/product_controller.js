const express = require('express')
const router = express.Router()

const products = require('../models/product_model')

router.get('/', (req, res)=>{
    const data = {products: products}
    res.render('index.ejs', data)
})

router.get('/:id', (req, res)=>{
    const data = {product: products[req.params.id]}
    res.render('show.ejs', data)
})

module.exports = router
