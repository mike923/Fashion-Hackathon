const db = require('../config')

const getAllGenres = async () => await db.any('SELECT * FROM genres')

const addNewGenre = async (genre_name) => await db.one(`
    INSERT INTO genres(genre_name)
    VALUES($/genre_name/)
    RETURNING *
`, genre_name)


module.exports = {
    getAllGenres,
    addNewGenre,
}