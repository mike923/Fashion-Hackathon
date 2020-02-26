const db = require('../config')

const getAllManufacturers = async () => await db.any(`
    SELECT * 
    FROM manufacturers
`)

const getAllManufacturerEmployees = async () => await db.any(`
	SELECT
		users.id AS user_id, username, avatar_url, email, account_type, 
		manufacture_id, manufacturer_name, specialty
	FROM users
	INNER JOIN manufacture_employee
	ON employee_id = users.id
	LEFT JOIN manufacturers
	ON manufacturers.id = manufacture_id
`)

const getAllManufacturerEmployeesByCompany = async (id) => await db.any(`
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

const getManufacturerEmployeeByID = async (id) => await db.one(`
	SELECT
		users.id AS user_id, username, avatar_url, email, account_type, 
		manufacture_id, manufacturer_name, specialty
	FROM users
	INNER JOIN manufacture_employee
	ON employee_id = users.id
	LEFT JOIN manufacturers
	ON manufacturers.id = manufacture_id
	WHERE users.id = $1
`, [id])

const addNewManufacturer = async (employee_id, manufacture_id) => await db.one(`
	INSERT INTO manufacture_employee (employee_id, manufacture_id)
	VALUES ($1, $2/)
	RETURNING *
`, [employee_id, manufacture_id])

module.exports = {
    addNewManufacturer,
    getAllManufacturers,
    getManufacturerEmployeeByID,
    getAllManufacturerEmployees,
    getAllManufacturerEmployeesByCompany,
}
