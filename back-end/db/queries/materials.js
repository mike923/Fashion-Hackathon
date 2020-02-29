const db = require('../config')

const getAllMaterials = async () => await db.any('SELECT * FROM materials')

const getMaterialsByDesign = async (id) => await db.one(`
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
    getMaterialsByDesign
}
