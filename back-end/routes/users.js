const express = require('express');
const router = express.Router();
const { getAllUsers, getUserByID } = require('../db/queries/users')
const { requireLoginMid } = require('../auth/helpers')


router.get('/', requireLoginMid, async (req, res, next) => {
    try {
        let users = await getAllUsers()
        res.json({
            payload: users,
            msg: 'Retrieved all users',
            err: false
        })
    } catch (error) {
        console.log('get error /\n', error)
        res.status(500).json({
            payload: null,
            msg: 'Failed retrieving all users',
            err: true
        })
    }
});

router.get('/:id', async (req, res, next) => {
    try {
        let user = await getUserByID(req.params.id)
        res.json({
            payload: user,
            msg: 'Retrieved all user',
            err: false
        })
    } catch (error) {
        console.log('error', error)
        res.status(500).json({
            payload: null,
            msg: `Failed retrieving user by id:${req.params.id}`,
            err: true
        })
    }
    res.send(`you've hit GET /users/${req.params.id} route`)
})

router.post('/', (req, res, next) => {
    res.send(`you've hit POST /users route`)
})

module.exports = router;
