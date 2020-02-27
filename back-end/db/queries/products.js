const db = require('../config')

const getAllProducts = async () => await db.any(`
    SELECT *
    FROM product_design
    INNER JOIN designers
    ON product_design.designer_id = designers.designer_id
    INNER JOIN design_companies
    ON design_companies.id = design_company_id
    INNER JOIN manufacturers 
    ON manufacturer_id = manufacturers.id
`)

const getAllProductsByDesigner = async (id) => await db.any(`
    SELECT *
    FROM product_design
    INNER JOIN designers
    ON product_design.designer_id = designers.designer_id
    INNER JOIN design_companies
    ON design_companies.id = design_company_id
    INNER JOIN manufacturers 
    ON manufacturer_id = manufacturers.id
    WHERE designer_id = $1
`, [id])

const getAllProductsByDesignCompany = async (id) => await db.any(`
    SELECT *, product_design.id AS product_id
    FROM product_design
    INNER JOIN designers
    ON designers.id = product_design.designer_id
    INNER JOIN design_companies
    ON design_companies.id = design_company_id
    INNER JOIN manufacturers 
    ON manufacturer_id = manufacturers.id
    WHERE design_company_id = $1
`, [id])

const getAllProductsByManufacturer = async (id) => await db.any(`
    SELECT *, product_design.id AS product_id
    FROM product_design
    INNER JOIN designers
    ON designers.id = product_design.designer_id
    INNER JOIN design_companies
    ON design_companies.id = design_company_id
    INNER JOIN manufacturers
    ON manufacturers.id = manufacturer_id
    WHERE manufacturer_id = $1
`, [id])

const getProductsByStatus = async (status, type, id) => await db.any(`
    SELECT *
    FROM product_design
    INNER JOIN designers
    ON product_design.designer_id = designers.designer_id
    INNER JOIN design_companies
    ON design_companies.id = design_company_id
    INNER JOIN manufacturers 
    ON manufacturer_id = manufacturers.id
    WHERE complete = $1
    AND ${type === 'DESIGNER' 
        ? `designers.id`
        : `manufacturers.id`}
        = $2
`, [status, id])

const updateDesignStatus = async (obj,id) => await db.one(`
    UPDATE designs
    SET complete = $1
    WHERE designs.id = $2
    RETURNING  *
`, [obj.complete, id])

const addNewDesign = async (design) => await db.any(`
    INSERT INTO designs(design_file,colors, pattern, height,width,designer_id)
	VALUES($/design_file/,$/colors/, $/pattern/, $/height/,$/width/,$/designer_id/)
	RETURNING *
`, design)



const getDesignsByDesign = async (id) => await db.any(`
    SELECT manufacturer_id, product_id,
        JSON_OBJECT_AGG(
            material, percentage_used
        ) all_materials
    FROM materials
    JOIN materials_used
    ON materials.id = materials_used.material_id
    WHERE product_id = $1
    GROUP BY manufacturer_id, product_id
`, [id])

module.exports = {
    getProductsByStatus,
    getAllProducts,
    getAllProductsByDesigner,
    getAllProductsByManufacturer,    
    getAllProductsByDesignCompany,
}
