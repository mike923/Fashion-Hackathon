const db = require('../config')


const addNewDesign = async (user) => await db.one(`
	INSERT INTO users(username, password_digest, avatar_url)
	VALUES($/username/, $/password/, $/avatar_url/)
	RETURNING id, username, avatar_url
`, user)


module.exports = {
    addNewDesign
}
