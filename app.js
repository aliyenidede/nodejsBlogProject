const path = require('path')
const express = require('express')
const exphbs = require('express-handlebars')
const app = express()
const port = 3000
const hostname = '127.0.0.1'

app.use(express.static('assets'))

app.engine('handlebars', exphbs())
app.set('view engine', 'handlebars')

app.get('/',(req, res) => {
    res.render('site/index')
})

app.get('/blog',(req, res) => {
    res.render('site/blog')
})

app.get('/contact',(req, res) => {
    res.render('site/contact')
})

app.get('/about',(req, res) => {
    res.render('site/about')
})

app.listen(port, hostname, ()=>{ console.log(`server working now, http://${hostname}:${port}/`)})