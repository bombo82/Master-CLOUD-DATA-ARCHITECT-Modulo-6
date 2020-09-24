const express = require('express')
const bodyParser = require('body-parser');

const HttpBookshelfController = require('./httpBookshelfController');
const BookshelfService = require('./bookshelfService')
const InMemoryRepository = require('../test/inMemoryRepository')

class HttpServer {
    runningInstance

    constructor() {
        const httpServer = express()

        console.log(`Starting HTTP server on port 3000`)
        httpServer.use((req, res, next) => {
            res.header('Access-Control-Allow-Origin', "*")
            res.header('Access-Control-Allow-Methods', 'GET')
            res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
            next()
        })
        httpServer.use(bodyParser.json({ extended: true }));

        const inMemoryRepository = new InMemoryRepository()
        const bookshelfService = new BookshelfService(inMemoryRepository)
        new HttpBookshelfController(httpServer, bookshelfService)

        this.runningInstance = httpServer.listen(3000, () => {
            console.log(`HTTP server started on port 3000`)
        })
    }

    close(callback) {
        this.runningInstance.close(callback)
    }
}

module.exports = HttpServer
