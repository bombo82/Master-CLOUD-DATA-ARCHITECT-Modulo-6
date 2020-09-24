const chai = require('chai');
const expect = chai.expect
chai.should()

const BookshelfService = require('../src/bookshelfService')

describe('Bookshelf service should', () => {

    let testRepository
    let bookshelfService

    before(() => {
        testRepository = new TestRepository()
        bookshelfService = new BookshelfService(testRepository)
    })

    it(`add a book`, () => {
        bookshelfService
            .add({'title': 'Clean Code', 'author': 'Robert C. Martin'})

        testRepository.lastInsertedBook.should.deep
            .equals({'title': 'Clean Code', 'author': 'Robert C. Martin'})
    })

    it(`get sequence of unique ids`, () => {
        bookshelfService.getNextId().should.equals(1)
        bookshelfService.getNextId().should.equals(2)
    })

    it(`get book by id`, () => {
        const id = 0
        bookshelfService.get(id).should.deep.equals({'title': 'Clean Code', 'author': 'Robert C. Martin', 'id': 0})
    })
})

class TestRepository {
    lastInsertedBook = null

    insert(book) {
        this.lastInsertedBook = book
    }

    find(id) {
        return {'title': 'Clean Code', 'author': 'Robert C. Martin', 'id': 0}
    }
}
