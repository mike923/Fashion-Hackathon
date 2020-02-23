const db = require('../config')

const getAllShows = async () => await db.any(`
    SELECT show_id, title, img_url, genre_id, genre_name, 
    ARRAY_AGG(
        JSON_BUILD_OBJECT(
            'user_id', user_id,
            'username', username,
            'avatar_url', avatar_url
        )
        ORDER BY shows_users.id
    ) viewers
    FROM shows_users
    JOIN shows
    ON show_id = shows.id
    JOIN genres
    ON genre_id = genres.id
    JOIN users
    ON user_id = users.id
    GROUP BY show_id, title, img_url, genre_id, genre_name
`)

const getShowByID = async (id) => await db.oneOrNone(`
    SELECT show_id, title, img_url, genre_id, genre_name, 
    ARRAY_AGG(
        JSON_BUILD_OBJECT(
            'user_id', user_id,
            'username', username,
            'avatar_url', avatar_url
        )
        ORDER BY shows_users.id
    ) viewers
    FROM shows_users
    JOIN shows
    ON show_id = shows.id
    JOIN genres
    ON genre_id = genres.id
    JOIN users
    ON user_id = users.id
    WHERE show_id = $1
    GROUP BY show_id, title, img_url, genre_id, genre_name
`, [id])

const addNewShow = async (show) => await db.one(`
    INSERT INTO shows(title, img_url, genre_id)
    VALUES($/title/, $/img_url/, $/genre_id/)
    RETURNING *
`, show)

const getShowByGenre = async (id) => await db.any(`
    SELECT *, shows.id AS show_id
    FROM shows 
    JOIN genres
    ON genre_id = genres.id
    WHERE genre_id = $1
`, [id])

const getShowByUser = async (id) => await db.any(`
    SELECT *
    FROM shows 
    JOIN shows_users
    ON shows.id = show_id
    JOIN genres
    ON genre_id = genres.id
    WHERE user_id = $1
`, [id])



module.exports = {
    getAllShows,
    getShowByID,
    addNewShow,
    getShowByGenre,
    getShowByUser,
}