const db = require('../config')


const addNewDesign = async (user) => await db.one(`
    INSERT INTO designs(design_file,color, pattern, height,width)
	VALUES($/design_file/,$/color/, $/pattern/, $/height/,$/width/)
	RETURNING *
`, user)


module.exports = {
    addNewDesign
}
