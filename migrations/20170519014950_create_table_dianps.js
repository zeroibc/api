exports.up = function (knex, Promise) {
  return knex.schema.createTableIfNotExists('dianps', function (table) {
    table.increments()
    table.integer('mem_id')
    table.integer('repo_id')
    table.text('con')
    table.integer('favor').defaultTo(0)
    table.integer('comment').defaultTo(0)
    table.timestamps()
  })
}

exports.down = function (knex, Promise) {}
