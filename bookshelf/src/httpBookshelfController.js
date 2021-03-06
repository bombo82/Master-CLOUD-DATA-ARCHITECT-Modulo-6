class HttpBookshelfController {
    constructor(httpServer, bookshelfService) {

        httpServer.post('/', (req, res) => {
            const book = req.body
            book.id = bookshelfService.getNextId()

            bookshelfService.add(book)
            const insertedBook = bookshelfService.get(book.id)
            res.status(201)
                .send(insertedBook)
        })

        httpServer.get('/', (req, res) => {
            res.send(bookshelfService.getAll())
        })
    }
}

module.exports = HttpBookshelfController
