class MongoDb {

  static initDb(url) {
    return new Promise((resolve, reject) => {
      let mongoose = require('mongoose')

      mongoose.connect(url, {
        useMongoClient: true
      })

      mongoose.Promise = global.Promise
      let db = mongoose.connection

      db.on('error', err => {
        console.log('MongoDB connection error:')
        reject(err)
      })
      db.on('connected', () => {
        console.log(`Mongo DB is connected : ${url}`)
        resolve()
      })
    })
  }
}

module.exports = MongoDb