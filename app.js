const express = require('express')
const hbs = require('hbs')
const app = express()

const PORT = 3000

app.set('view engine', 'hbs')
app.use('/public', express.static(`${__dirname}/public`));

app.get('/', (_, res) => {
    res.render('index.hbs')
})

app.listen(PORT, '127.0.0.1', function(){
    console.log('Сервер запущен на http://localhost:%s', PORT)
})