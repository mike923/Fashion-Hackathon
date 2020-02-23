const db = require('./config')
const { hashPass } = require('../auth/helpers')

const seed = async () => {
    try {
        var passwords = await db.any(`
            SELECT id, password_digest
            FROM users
            WHERE password_digest
            NOT LIKE '$2b$12______________________________________________________'
        `)
        console.log(passwords)
        passwords.forEach(async (p, i) => {
            try {
                let hashed = await hashPass(p.password_digest)
                let res = await db.any(`
                    UPDATE users
                    SET password_digest = $2
                    WHERE id = $1
                    RETURNING *
                `, [p.id, hashed])
                console.log(res, hashed)
            } catch (error) {
                console.log(i, 'hash', error)
            }
        })
    } catch (error) {
        console.log('passwords error', error)
    }
}

module.exports = {seed}