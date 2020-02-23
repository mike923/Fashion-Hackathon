const express = require('express');
const router = express.Router();
const queries = require('../db/queries/design')



router.post('/', async (req, res, next) => {

    let newDesign = await queries.addNewDesign(req.body)

    try {
        res.json(
            {
                payload: newDesign,
                msg: 'new design uploaded',
                error: 'false'
            }
        )
    } catch (error) {
        console.log(error)
        res.status(500).json({
            payload: null,
            message: 'you can\'t perform this action',
            error: true
        })
    }
})

module.exports = router