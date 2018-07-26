const express = require('Express')
const router = express.Router()
const postQueries = require('../queries/post_queries')

router.get('/', async (req, res) => {
    let posts = await postQueries.getAll()
    return res.json(posts)
})

module.exports = router