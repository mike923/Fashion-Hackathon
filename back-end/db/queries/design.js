const db = require('../config')

const getAllDesigns = async () => {
    let qryString = `
                    SELECT designs.id, designs.design_file,color,pattern,
                    height,width,designer_id,username,email, complete
                    FROM designs
                    INNER JOIN users ON designs.designer_id = users.id
                    
                    `

    return await db.any(qryString)
}

const getInCompleteDesignsByDesignerId = async (id) => {
    let qryString = `
                    SELECT designs.id, designs.design_file,designs.color,designs.pattern,
                    designs.height,designs.width,designs.designer_id,users.username,users.email, 
                    designs.complete
                    FROM designs
                    INNER JOIN users ON designs.designer_id = users.id
                    INNER JOIN manufacturer_design ON manufacturer_design.product_id = designs.id
                    WHERE designs.designer_id = $1
                    `

    return await db.any(qryString, [id])
}
const getDesignsByManufactureId = async (id) => {
    let qryString = `SELECT designs.id, designs.design_file,color,pattern,
                    height,width,designer_id,username,email
                    FROM designs
                    INNER JOIN users ON designs.designer_id = users.id
                    WHERE users.id = $1
                    `

    return await db.any(qryString, [id])
}

const addNewDesign = async (user) => {
    return await db.any(`
    INSERT INTO designs(design_file,color, pattern, height,width,designer_id,complete)
	VALUES($/design_file/,$/color/, $/pattern/, $/height/,$/width/,$/designer_id/,$/complete/)
	RETURNING *
`, user)

}


module.exports = {
    addNewDesign,
    getInCompleteDesignsByDesignerId,
    getAllDesigns,
    getDesignsByManufactureId
}
