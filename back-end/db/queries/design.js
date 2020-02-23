const db = require('../config')


const addNewDesign = async (user) => {
    return await db.any(`
    INSERT INTO designs(design_file,color, pattern, height,width,designer_id)
	VALUES($/design_file/,$/color/, $/pattern/, $/height/,$/width/,$/designer_id/)
	RETURNING *
`, user)

}


module.exports = {
    addNewDesign
}
