class InMemoryRepository {
    books = []

    insert(book) {
        this.books.push(book)
    }

    find(id) {
        return this.books.find( book => book.id === id)
    }

    all() {
        return this.books
    }
}

module.exports = InMemoryRepository