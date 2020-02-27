const db = require('../config')

const ALL_USERS = `
	SELECT 
		users.id AS user_id,
		username, avatar_url, email, account_type,
		design_company_id, company_name,
		manufacture_id, manufacturer_name, specialty,
		designers.id AS designer_id,
		manufacture_employee.id AS employee_id
	FROM users
	LEFT JOIN designers
	ON user_id = users.id
	LEFT JOIN manufacture_employee
	ON employee_id = users.id
	LEFT JOIN manufacturers
	ON manufacture_id = manufacturers.id
	LEFT JOIN design_companies
	ON design_company_id = design_companies.id
`

const getAllUsers = async () => await db.any(ALL_USERS + 'ORDER BY users.id')

const getUserByID = async (id) => await db.oneOrNone(ALL_USERS + `WHERE users.id = $1`, [id])

const getUserByUsername = async (username) => await db.oneOrNone(
`
SELECT 
		users.id AS user_id,
		username, avatar_url, email, account_type,password_digest,
		design_company_id, company_name,
		manufacture_id, manufacturer_name, specialty,
		designers.id AS designer_id,
		manufacture_employee.id AS employee_id
	FROM users
	LEFT JOIN designers
	ON user_id = users.id
	LEFT JOIN manufacture_employee
	ON employee_id = users.id
	LEFT JOIN manufacturers
	ON manufacture_id = manufacturers.id
	LEFT JOIN design_companies
	ON design_company_id = design_companies.id
WHERE username = $1`, [username])

const addNewUser = async (user) => await db.one(`
	INSERT INTO users (username, password_digest, avatar_url, email, account_type)
	VALUES ($/username/, $/password_digest/, $/avatar_url/, $/email/, $/account_type/)
	RETURNING id, username, avatar_url, email, account_type
`, user)

module.exports = {
	addNewUser,
	getAllUsers,
	getUserByID,
	getUserByUsername,
}
