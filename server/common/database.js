let mongooseClient = require('mongoose')
const { MONGO_URL } = require('./config')



module.exports = DBConnection = async () => {
    try {
        await mongooseClient.connect(MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            // useCreateIndex: true
        })
        console.log("Mongoose connection is successfull!")
    } catch (error) {
        console.log("🚀 ~ file: app_database.js ~ line 9 ~ DBConnection ~ error", error)
    }
}