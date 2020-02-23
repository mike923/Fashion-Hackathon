const express = require('express');
const router = express.Router();
const { getAllShows, getShowByID, addNewShow, getShowByGenre, getShowByUser } = require('../db/queries/shows')
const { requireLoginMid } = require('../auth/helpers')


router.get('/', async(req, res, next) => {
    try {
        let shows = await getAllShows()
        res.json({
            payload: shows,
            msg: 'you have successfully retrieved all shows',
            err: false,
        })
    } catch (error) {
        console.log('error', error)
        res.json({
            payload: null,
            msg: 'There was an error retrieving all shows',
            err: true
        })
    }
});

router.get('/:id', async (req, res, next) => {
    try {
        let show = await getShowByID(req.params.id)
        res.json({
            payload: show,
            msg: `show with id:${req.params.id} successfully retrieved`,
            err: false
        })
    } catch (error) {
        console.log('error', error)
        res.json({
            payload: null,
            msg: 'There was an error retrieving the particular show you were looking for.',
            err: true
        })
    }
});

router.get('/genre/:genre_id', async (req, res, next) => {
    try {
        let shows = await getShowByGenre(req.params.genre_id)
        res.json({
            payload: shows,
            msg: `successfully retrieved shows with genre_id:${req.params.genre_id}`,
            err: false
        })
    } catch (error) {
        console.log('error', error)
        res.json({
            payload: null,
            msg: 'There was an error retrieving your shows by genre.',
            err: true
        })
    }
});

router.get('/user/:user_id', async (req, res, next) => {
    try {
        let shows = await getShowByUser(req.params.user_id)
        res.json({
            payload: shows,
            msg: `successfully retrieved shows by user_id:${req.params.user_id}`,
            err: false
        })
    } catch (error) {
        console.log('error', error)
        res.json({
            payload: null,
            msg: 'there was an error retrieving shows by user.',
            err: true
        })
    }
});

router.post('/', requireLoginMid, async (req, res, next) => {
    try {
        let newShow = await addNewShow(req.body)
        res.json({
            payload: newShow,
            msg: `successfully add show ${req.body.title}`,
            err: false
        })
    } catch (error) {
        console.log('error', error)
        res.json({
            payload: null,
            msg: 'There was an error adding new show.',
            err: true
        })
    }
});


module.exports = router;
