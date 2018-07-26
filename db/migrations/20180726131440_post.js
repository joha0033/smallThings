
exports.up = (knex, Promise) => (
    Promise.all([
        knex.schema.createTable('tag', (table) => {
            table.increments('id').primary()
            table.string('name').notNullable().unique()
        }),
        knex.schema.createTable('post', (table) => {
            table.increments('id').primary()
            table.string('title').notNullable().unique()
            table.timestamp('createdOn').defaultTo(knex.fn.now())
            table.text('content')
        }),
        knex.schema.createTable('post_tag', (table) => {
            table.integer('post_id').notNullable().references('post.id')
            table.integer('tag_id').notNullable().references('tag.id')
        })
    ])
)
  
exports.down = (knex, Promise) => (
    Promise.all([
        knex.schema.dropTableIfExists('post_tag'),
        knex.schema.dropTableIfExists('post'),
        knex.schema.dropTableIfExists('tag')
    ])
)
    
