const knex = require('./knex')

module.exports = {
    getAll: () => knex('post').select('*'),
}