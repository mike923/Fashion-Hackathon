const db = require('../config')

const getDesignersById = async (id) => {
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
    INSERT INTO designs(design_file,color, pattern, height,width,designer_id)
	VALUES($/design_file/,$/color/, $/pattern/, $/height/,$/width/,$/designer_id/)
	RETURNING *
`, user)

}


module.exports = {
    addNewDesign,
    getDesignersById
}
