const db = require('../config')

const getAllDesignCompanies = async () => await db.any(`
    SELECT *
    FROM design_companies
`)

const getAllDesigners = async () => await db.any(`
    SELECT 
        users.id AS user_id, username, avatar_url, email, account_type, 
        design_company_id, company_name
    FROM users
    INNER JOIN designers 
    ON designer_id = users.id
    LEFT JOIN design_companies
    ON design_companies.id = design_company_id
`)

const getAllDesignersByCompany = async (id) => await db.any(`
    SELECT 
        users.id AS user_id, username, avatar_url, email, account_type, 
        design_company_id, company_name
    FROM users
    INNER JOIN designers 
    ON designer_id = users.id
    LEFT JOIN design_companies
    ON design_companies.id = design_company_id
    WHERE design_company_id = $1
`, [id])

const getDesignerByID = async (id) => await db.one(`
    SELECT 
        users.id AS user_id, username, avatar_url, email, account_type, 
        design_company_id, company_name
    FROM users
    INNER JOIN designers 
    ON designer_id = users.id
    LEFT JOIN design_companies
    ON design_companies.id = design_company_id
    WHERE users.id = $1
`, [id])

const addNewDesigner = async (designer_id, design_company_id) => await db.one(`
    INSERT INTO designers (designer_id, design_company_id)
    VALUES ($1, $2)
    RETURNING *
`, [designer_id, design_company_id])

const addNewCompany = async (name) => await db.one(`
    INSERT INTO design_companies (company_name)
    VALUES ($1)
    RETURNING *
`, [name])

module.exports = {
    addNewCompany,
    addNewDesigner,
    getAllDesigners,
    getDesignerByID,
    getAllDesignCompanies,
    getAllDesignersByCompany,
}