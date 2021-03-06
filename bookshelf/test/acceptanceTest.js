const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect
chai.should()
chai.use(chaiHttp)

const HttpServer = require('../src/httpServer')

describe('The REST API of the bookshelf should', () => {
    const url = `http://localhost:3000`
    let httpServer

    beforeEach(() => {
        httpServer = new HttpServer()
    })

    afterEach((done) => {
        httpServer.close(done)
    })

    it(`insert a book`, done => {
        chai.request(url)
            .post('/')
            .send({'title': 'Clean Code', 'author': 'Robert C. Martin'})
            .end((err, res) => {
                res.should.have.status(201)
                res.body.should.deep.equals({'title': 'Clean Code', 'author': 'Robert C. Martin', 'id': 1})
                done()
            })
    })

    it(`retrieve a list of all books`, done => {
        chai.request(url)
            .post('/')
            .send({'title': 'Clean Code', 'author': 'Robert C. Martin'})
            .end()
        chai.request(url)
            .post('/')
            .send({'title': 'Extreme Programming Explained', 'author': 'Kent Beck'})
            .end()

        chai.request(url)
            .get('/')
            .end((err, res) => {
                res.should.have.status(200)
                res.body.should.deep.equal([
                    {'title': 'Clean Code', 'author': 'Robert C. Martin', 'id': 1},
                    {'title': 'Extreme Programming Explained', 'author': 'Kent Beck', 'id': 2}
                ])
                done()
            })
    })
})
