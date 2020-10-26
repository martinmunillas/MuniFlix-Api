const mongoose = require('mongoose')

require('dotenv').config

mongoose.Promise = global.Promise

const connect = async () => {
    await mongoose.connect(
        `mongodb://${process.env.DB_HOST_IP}/${process.env.DB_NAME}`,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
    )
    console.log('DataBase connected succesfully')
}

module.exports = connect    