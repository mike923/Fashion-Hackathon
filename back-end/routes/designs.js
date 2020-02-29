const express = require('express');
const router = express.Router();
const queries = require('../db/queries/design')

router.get('/', async (req, res, next) => {

    let allDesign = await queries.getAllDesigns(req.params.id)

    try {
        res.json(
            {
                payload: allDesign,
                msg: 'all designs retrieved',
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

router.get('/incomplete/:id', async (req, res, next) => {

    let newDesign = await queries.getDesignsByStatus('false',req.params.id)

    try {
        res.json(
            {
                payload: newDesign,
                msg: 'all designs retrieved',
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

router.get('/completed/:id', async (req, res, next) => {

    let newDesign = await queries.getDesignsByStatus('true',req.params.id)

    try {
        res.json(
            {
                payload: newDesign,
                msg: 'all designs retrieved',
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

router.get('/manufacture_design/:manufacture_design_id', async (req, res, next) => {

    let newDesign = await queries.getDesignsByManufactureId(req.params.manufacture_design_id)

    try {
        res.json(
            {
                payload: newDesign,
                msg: 'all designs retrieved',
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

router.post('/', async (req, res, next) => {

    // const colors = [...req.body.colors.split(',')]
    try {
    
    console.log('uploading file!@#@#$@#$@#$%@#$%@#$%@#$%')
    
    let bodyCopy = {...req.body}
    console.log('bodycopy', bodyCopy)
    let design_file = "http://localhost:3100/" + req.file.path.replace('public/', '')
    bodyCopy.designer_specs = {
        height: 15,
        width: 25,
        colors: ['red', 'blue', 'green']
    }
    bodyCopy.design_file = design_file
    bodyCopy.designer_id = 1
    bodyCopy.manufacturer_id = 1

    let newDesign = await queries.addNewDesign(bodyCopy)

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

router.patch('/:id', async (req, res, next) => {

    
    try {
        let updatedDesign = await queries.updateDesignStatus(req.body,req.params.id)
        res.json(
            {
                payload: updatedDesign,
                msg: 'design status has changed',
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