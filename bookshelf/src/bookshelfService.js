class BookshelfService {

    constructor(repository) {
        this.repository = repository
        this.currentId = 0
    }

    add(book) {
        this.repository.insert(book)
    }

    getNextId() {
        return ++this.currentId
    }

    get(id) {
        return this.repository.find(id)
    }

    getAll() {
        return this.repository.all()
    }
}

module.exports = BookshelfService
