const express = require('express')
const router = express.Router()

const products = require('../models/product_model')

router.get('/', (req, res)=>{
    const data = {products: products}
    res.render('index.ejs', data)
})

router.get('/:id', (req, res, next)=>{
    if(products[req.params.id] == undefined){
        next()
    }
    const data = {product: products[req.params.id]}
    res.render('show.ejs', data)
}, (req, res)=>{
    const data = {error: req.error}
    res.status(404).render('404.ejs', data)
})

module.exports = router
