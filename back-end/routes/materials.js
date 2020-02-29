const express = require('express');
const router = express.Router();
const { getMaterialsByDesign } = require('../db/queries/materials')
const { requireLoginMid } = require('../auth/helpers')


router.get('/', async (req, res, next) => {
    try {
        let materials = await getMaterialsByDesign(1)
        res.json({
            payload: materials,
            msg: 'Retrieved all users',
            err: false
            })
    } catch (error) {
        res.status(500).json({
            payload: null,
            msg: 'Failed retrieving all users',
            err: true
        }) 
    }
})

router.get('/product/:id', async (req, res, next) => {
    try {
        let materials = await getMaterialsByDesign(Number(req.params.id))
        res.json({
            payload: materials,
            msg: 'Retrieved materials for product',
            err: false
            })
    } catch (error) {
        res.status(500).json({
            payload: null,
            msg: 'Retrieved materials for product',
            err: true
        }) 
    }
})

module.exports = router;
