const express = require('express');
const router = express.Router();
const { getAllGenres, addNewGenre } = require('../db/queries/genres')
const { requireLoginMid } = require('../auth/helpers')

router.get('/', async (req, res, next) => {
    try {
        let genres = await getAllGenres()
        res.json({
            payload: genres,
            msg: 'successfully retrieved all genres.',
            err: false
        })
    } catch (error) {
        console.log('error', error)
        res.json({
            payload: null,
            msg: 'There was an erro retreiving genres.',
            err: true
        })
    }
});

router.post('/', requireLoginMid, async(req, res, next) => {
    try {
        let genre = await addNewGenre(req.body)
        res.json({
            payload: genre,
            msg: 'successfully added new genre.',
            err: false
        })
    } catch (error) {
        console.log('error', error)
        res.json({
            payload: null, 
            msg: 'There was an error adding a new genre.',
            err: true
        })
    }
});


module.exports = router;
