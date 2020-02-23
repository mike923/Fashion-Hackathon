const pgp = require('pg-promise')()
const cn = 'postgres://localhost:5432/fashionhackathon'
const db = pgp(cn)

module.exports = db