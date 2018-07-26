const express = require('Express')
const app = express()
const morgan = require('Morgan')

//routes
const posts = require('./routes/posts')

// no logger/morgan for production
process.env.NODE_ENV === 'production' ?
null : app.use(morgan('dev'))


// basic route
app.use('/posts', posts)
app.use('/welcome', (req, res) => res.send({
    'msg' : 'success',
    'port' : port
}))


// port 
let port;
process.env.NODE_ENV === 'test' ?
port = (process.env.PORT || '3001') :
port = (process.env.PORT || '3000')


// server
const serverMsg = () => (console.log(`listening on port: ${port}`))
const server = app.listen(port)


// catch the 404
app.use((req, res, next) => {
    const err = new Error('Unfindable, 404, not found, so... see ya!')
    err.status = 404
    next(err)
})

 
// error handler
app.use((err, req, res, next) => {
    res.status(err.status || 500)
    process.env.NODE_ENV === 'production' ?
    (res.json({ 
        msg: err.message, 
        error: {}})) :
    (res.json({ 
        message: err.message, 
        error: err}))
})


module.exports = { app, server }