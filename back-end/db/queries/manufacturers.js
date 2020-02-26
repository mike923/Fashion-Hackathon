const db = require('../config')

const getAllManufacturers = async () => await db.any(`
    SELECT * 
    FROM manufacturers
`)

const getCompanyByID = async (id) => await db.any(`
    SELECT * 
	FROM manufacturers
	WHERE id = $1
`, [id])

const getAllEmployees = async () => await db.any(`
	SELECT
		users.id AS user_id, username, avatar_url, email, account_type, 
		manufacture_id, manufacturer_name, specialty
	FROM users
	INNER JOIN manufacture_employee
	ON employee_id = users.id
	LEFT JOIN manufacturers
	ON manufacturers.id = manufacture_id
`)

const getAllEmployeesByCompany = async (id) => await db.any(`
	SELECT
		users.id AS user_id, username, avatar_url, email, account_type, 
		manufacture_id, manufacturer_name, specialty
	FROM users
	INNER JOIN manufacture_employee
	ON employee_id = users.id
	LEFT JOIN manufacturers
	ON manufacturers.id = manufacture_id
	WHERE manufacture_id = $1
`, [id])

const getEmployeeByID = async (id) => await db.one(`
	SELECT
		users.id AS user_id, username, avatar_url, email, account_type, 
		manufacture_id, manufacturer_name, specialty
	FROM users
	INNER JOIN manufacture_employee
	ON employee_id = users.id
	LEFT JOIN manufacturers
	ON manufacturers.id = manufacture_id
	WHERE manufacture_employee.id = $1
`, [id])

const addNewEmployee = async (employee_id, manufacture_id) => await db.one(`
	INSERT INTO manufacture_employee (employee_id, manufacture_id)
	VALUES ($1, $2)
	RETURNING *
`, [employee_id, manufacture_id])

const addNewManufacturer = async (name, specialty) => await db.one(`
	INSERT INTO manufacturers (manufacturer_name, specialty)
	VALUES ($1, $2)
	RETURNING *
`, [name, specialty])

module.exports = {
	addNewEmployee,
	addNewManufacturer,
    getEmployeeByID,
    getCompanyByID,
    getAllEmployees,
	getAllManufacturers,
    getAllEmployeesByCompany,
}
