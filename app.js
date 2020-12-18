const path = require('path')
const express = require('express')
const exphbs = require('express-handlebars')
const app = express()
const port = 3000
const hostname = '127.0.0.1'
const mongoose = require('mongoose')
const bodyParser = require('body-parser')


mongoose.connect('mongodb://127.0.0.1/nodeblog_db', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
});

app.use(express.static('assets'))

app.engine('handlebars', exphbs())
app.set('view engine', 'handlebars')

const main = require('./routes/main')
app.use('/', main)

app.listen(port , hostname, () => {
    console.log(`server working now, http://${hostname}:${port}/`)
})