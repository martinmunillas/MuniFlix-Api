const mongoose = require('mongoose')

require('dotenv').config

mongoose.Promise = global.Promise

const connect = async () => {
    await mongoose.connect(
        `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.i6fzt.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
    )
    console.log('DataBase connected succesfully')
}

module.exports = connect    