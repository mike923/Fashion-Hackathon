const express = require('express');
const router = express.Router();
const { getCommentsByShow, addNewComment } = require('../db/queries/comments')
const { requireLoginMid } = require('../auth/helpers')

router.get('/show/:show_id', async (req, res, next) => {
    try {
        let comments = await getCommentsByShow(req.params.show_id)
        console.log(comments)
        res.json({
            payload: comments,
            msg: `success retrieving /comments/show/${req.params.show_id}`,
            err: false
        })
    } catch (error) {
        console.log('error', error)
        res.json({
            payload: null,
            msg: 'There was an error retrieving your comments',
            err: true
        })
    }
});

router.post('/', requireLoginMid, async (req, res, next) => {
    try {
        let comment = await addNewComment(req.body)
        res.json({
            payload: comment,
            msg: 'success posting comment',
            err: false
        })
    } catch (error) {
        console.log('error', error)
        res.json({
            payload: null,
            msg: 'There was an error adding your comment. Please try again.',
            err: true
        })
    }
});


module.exports = router;
