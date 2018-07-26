// Update with your config settings.

module.exports = {
  test: {
		client: 	'pg',
		connection: 	'postgres://localhost/smallThings',
		migrations: {
			directory: __dirname + '/db/migrations'
		},
    seeds: {
      directory: __dirname + '/db/seeds/'
    }	
  },
  development: {
    client: 'pg',
    connection: 'postgres://localhost/smallThings',
    migrations: {
      directory: __dirname + '/db/migrations/'
    },
    seeds: {
      directory: __dirname + '/db/seeds/'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
