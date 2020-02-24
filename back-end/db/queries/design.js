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
                    WHERE users.id = $1 AND complete = false
                    `

    return await db.any(qryString, [id])
}

const getCompletedDesignsByDesignerId = async (id) => {
    let qryString = `
                    SELECT designs.id, designs.design_file,designs.color,designs.pattern,
                    designs.height,designs.width,designs.designer_id,users.username,users.email, 
                    designs.complete
                    FROM designs
                    INNER JOIN users ON designs.designer_id = users.id
                    WHERE users.id = $1 AND complete = true
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

const updateDesignStatus = async (obj,id) =>{
    console.log(obj);
    
    let qryString = `
    UPDATE designs
    SET complete = $1
    WHERE designs.id = $2
    RETURNING  *
    `
    return await db.one(qryString,[obj.complete,id])
}

const addNewDesign = async (design) => {

    return await db.any(`
    INSERT INTO designs(design_file,color, pattern, height,width,designer_id)
	VALUES($/design_file/,$/color/, $/pattern/, $/height/,$/width/,$/designer_id/)
	RETURNING *
`, design)

}


module.exports = {
    addNewDesign,
    getInCompleteDesignsByDesignerId,
    getCompletedDesignsByDesignerId,
    getAllDesigns,
    getDesignsByManufactureId,
    updateDesignStatus
}
