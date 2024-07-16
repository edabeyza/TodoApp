"use strict"

const express = require('express')
const app = express()

// Required modules
require('dotenv').config()
const PORT = process.env.PORT || 8000

require('express-async-errors')

// Configurations
require('./src/configs/dbConnection')()

app.all('/', (req, res) => {
    res.send({
        error: false,
        message: 'Welcome to the backend application'
    })
})

app.use(require('./src/middlewares/errorHandler'))

app.listen(PORT, () => console.log(`listening at http://127.0.0.1:`+ PORT))