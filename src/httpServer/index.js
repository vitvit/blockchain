const express = require('express')
const bodyParser = require('body-parser')
const swaggerUi = require('swagger-ui-express')
//const swaggerDocument = require('./swagger.json')
const HTTPError = require('./httpError')

class HttpServer {
    constructor() {
        this.app = express()
        this.app.use(bodyParser.json())
        //this.app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
    }

    listen(host, port) {
        return new Promise((resolve, reject) => {
            this.server = this.app.listen(port, host, (err) => {
                if (err) reject(err);
                console.info(`Listening http on port: ${this.server.address().port},  `
                           + `API documentation : http://${host}:${this.server.address().port}/api-docs/`)
                resolve(this)
            })
        })
    }
}

module.exports = HttpServer