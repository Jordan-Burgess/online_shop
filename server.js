const express = require('express')
const app = express()
const PORT = 4000

app.set('view_engine', 'ejs')
app.use(express.static('public'))

const productsController = require('./controllers/product_controller')
app.use('/products', productsController)

app.listen(PORT, ()=>{
    console.log(`Listening on port ${PORT}`)
})