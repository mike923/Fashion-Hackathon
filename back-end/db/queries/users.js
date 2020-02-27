const db = require('../config')

const getAllUsers = async () => await db.any(`
	SELECT 
		users.id AS user_id, username, avatar_url, email, account_type,
		manufacture_id, manufacturer_name, specialty,
		design_company_id, company_name
	FROM users
	LEFT JOIN designers
	ON designers.designer_id = users.id
	LEFT JOIN manufacture_employee
	ON manufacture_employee.employee_id = users.id
	LEFT JOIN manufactures
	ON manufactures.id = manufacture_employee.manufacture_id
	LEFT JOIN design_companies
	ON design_companies.id = designers.design_company_id
`)

const addNewUser = async (user) => await db.one(`
	INSERT INTO users (username, password_digest, avatar_url, email, account_type)
	VALUES ($/username/, $/password_digest/, $/avatar_url/, $/email/, $/account_type/)
	RETURNING id, username, avatar_url, email, account_type
`, user)

const getUserByID = async (id) => await db.oneOrNone(`
	SELECT 
		users.id AS user_id, username, avatar_url, email, account_type,
		manufacture_id, manufacturer_name, specialty,
		design_company_id, company_name
	FROM users
	LEFT JOIN designers
	ON designers.designer_id = users.id
	LEFT JOIN manufacture_employee
	ON manufacture_employee.employee_id = users.id
	LEFT JOIN manufactures
	ON manufactures.id = manufacture_employee.manufacture_id
	LEFT JOIN design_companies
	ON design_companies.id = designers.design_company_id
	WHERE users.id = $1
`, [id])

const getUserByUsername = async (username) => await db.oneOrNone(`
	SELECT * 
	FROM users 
	WHERE username = $1
`, [username])

module.exports = {
	addNewUser,
	getAllUsers,
	getUserByID,
	getUserByUsername,
}
