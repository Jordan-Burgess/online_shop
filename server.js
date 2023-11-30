const express = require('express')
const app = express()
const PORT = 4000

// Database
const products = [
    {
        name: "Men's Summer Polo Shirt",
        price: 20.62,
        description: 'Soft cotton fabric shirt for the home',
        image: 'https://res.cloudinary.com/rmwdam/image/upload/b_rgb:fffdf5,c_pad,dpr_2.0,f_auto,h_500,q_auto,w_500/c_pad,h_500,w_500/v1/products/images_png/KP210PQ02/KP210PQ4502_Rod-Polo-Shirt_1?pgw=1'
    }, 
    {
        name: 'Canon 5D Camera',
        price: 530.98,
        description: 'Refurbished DSLR Camera with high aperture range',
        image: 'https://m.media-amazon.com/images/I/61s4rRL9MBL.jpg'
    }, 
    {
        name: "Harry Potter and the Socerer's Stone",
        price: 7.99,
        description: 'Fantasy Novel written by the famous J.K. Rowling',
        image: 'https://m.media-amazon.com/images/I/81iqZ2HHD-L._AC_UF1000,1000_QL80_.jpg'
    }, 
    {
        name:'Small Calathea Freddie',
        price: 22.40,
        description: 'Small indoor calathea freddie plant that can be places anywhere inside the home',
        image: 'https://www.plantvine.com/plants/Calathea-Freddy-Main-800x1000.jpg'
    }
]

app.get('/products', (req, res)=>{
    res.send(products)
})

app.get('/products/:id', (req, res)=>{
    res.send(products[req.params.id])
})


app.listen(PORT, ()=>{
    console.log(`Listening on port ${PORT}`)
})