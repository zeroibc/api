
exports.up = function (knex, Promise) {
  return knex.schema.alterTable('mems', (t) => {
    t.string('iswebker', 5).defaultTo('NO')
  })
}

exports.down = function (knex, Promise) {
}
