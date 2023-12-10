const express = require('express')
const router = express.Router()

router.use(express.urlencoded({extended: false}))

const products = require('../models/product_model')

router.get('/', (req, res)=>{
    const data = {products: products}
    res.render('index.ejs', data)
})

router.post('/', (req, res)=>{
    products.push(req.body)
    res.redirect('/products')
})

router.get('/new', (req, res)=>{
    res.render('new.ejs')
})

router.get('/:id', (req, res, next)=>{
    if(products[req.params.id] == undefined){
        next()
    }
    const data = {product: products[req.params.id], id: req.params.id}
    res.render('show.ejs', data)
}, (req, res)=>{
    const data = {error: req.error}
    res.status(404).render('404.ejs', data)
})

router.get('/:id/edit', (req, res)=>{
    const data = {product: products[req.params.id], id: req.params.id}
    res.render('edit.ejs', data)
})

router.delete('/:id', (req, res)=>{
    products.splice(req.params.id, 1)
    res.redirect('/products')
})

module.exports = router
