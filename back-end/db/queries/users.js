const db = require('../config')

const getAllUsers = async () => await db.any('SELECT id, username FROM users')

const addNewUser = async (user) => await db.one(`
	INSERT INTO users(username, password_digest)
	VALUES($/username/, $/password/)
	RETURNING id, username
`, user)

const getUserByID = async (id) => await db.oneOrNone('SELECT id, username FROM users WHERE id = $1', [id])

const getUserByUsername = async (username) => await db.oneOrNone('SELECT * FROM users WHERE username = $1', [username])

module.exports = {
	getAllUsers,
	addNewUser,
	getUserByID,
	getUserByUsername,
}
