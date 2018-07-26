process.env.NODE_ENV = 'test'

const chai = require('chai')
const should = chai.should()
const chaiHttp = require('chai-http')
const app = require('../app')

chai.use(chaiHttp)

describe('post routes work as expected', () => {
    after((done) => {
        app.server.close()
        done()
    })
    it('responds with status 200', (done) => {
        chai.request(app.app)
            .get('/posts')
            .end((err, res) => {
                res.should.have.status(200)
                done()
            })
    })
    it('responds with all posts', (done) => {
        chai.request(app.app)
            .get('/posts')
            .end((err, res) => {
                res.body[0].should.have.property('id')
                res.body[0].should.have.property('title')
                res.body[0].should.have.property('createdOn')
                res.body[0].should.have.property('content')
                done()
            })
    })
})
