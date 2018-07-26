// tests!!
process.env.NODE_ENV = 'test'

const chai = require('chai')
const should = chai.should()
const chaiHttp = require('chai-http')
const app = require('../app.js')

chai.use(chaiHttp)


describe('server spins up correctly', () => {
    after((done) => {
        app.server.close()
        done()
    })
    it(`it spins up with status 200`, (done) => {
        chai.request(app.app)
            .get('/welcome')
            .end((err, res) => {
                res.should.have.status(200)
                done()
            })
    })
    it(`should throw 404 error msg`, (done) => {
        chai.request(app.app)
            .get('/')
            .end((err, res) => {
                res.should.have.status(404)
                done()
            })
    })
})
