const express = require('express');
const router = express.Router();
const { addNewUser } = require('../db/queries/users')
const { hashPass, requireLoginMid} = require('../auth/helpers')
const passport = require('../auth/passport');


router.post('/signup', async (req, res, next) => {
    try {
        const password_digest = await hashPass(req.body.password)
        const user = {
            username: req.body.username,
            password: password_digest,
            avatar_url: req.body.avatar_url,
        }

        let newUser = await addNewUser(user)
        res.json({
            payload: newUser,
            msg: 'Success adding a new user',
            err: false
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            payload: null,
            msg: 'Failure adding a new user',
            err: true
        })
    }
})

router.post('/login', (req, res, next) => {console.log('this req', req); next()} ,passport.authenticate('local'), (req, res, next) => {
    console.log(req.body)
    res.json({
        payload: req.user,
        msg: 'User successfully logged in',
        err: false
    })
})

router.get('/logout', requireLoginMid, (req, res, next) => {
    req.logOut()
    res.json({
        payload: null,
        msg: 'User logged out successfully',
        err: false
    })
})

router.get('/isUserLoggedIn', requireLoginMid, (req, res) => {
    res.json({
        payload: req.user,
        msg: 'User is logged in. Session active',
        err: false
    })
})

module.exports = router;
