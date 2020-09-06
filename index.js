const express = require('express')
require('dotenv').config()

const routes = require('./network/routes')
const errorHandler = require('./utils/middlewares/errorHandler')
const connect = require('./db')

const app = express()
connect()

//Error Handler
app.use(errorHandler)

//parsers
app.use(express.json())

//Videos
app.use('/mediaSrc', express.static(process.env.MEDIAFILES))

routes(app)

app.listen(process.env.PORT, () => {
    console.log(`Server listening in ${process.env.URL}${process.env.PORT}`)
})