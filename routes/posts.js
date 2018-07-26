const express = require('Express')
const router = express.Router()
const postQueries = require('../queries/post_queries')
const errorHandler = require('./errorHandler')

router.get('/', async (req, res) => {
    let posts;

    try{
        posts = await postQueries.getAll()
        .then(
            errorHandler
                .throwIf(r => !r, 404, 'not found', 'Posts not found'),
            errorHandler
                .throwError(500, 'database error'))
        .then(
            errorHandler
                .sendSuccess(res, 'success', posts))
    } catch(err) {
        errorHandler
            .sendError(res)(error)
    }

})

module.exports = router