const express = require('express');
const router = express.Router();
const {
    addNewCompany,
    addNewDesigner,
    getDesignerByID,
    getDesignCompanyByID,
    getAllDesigners,
    getAllDesignCompanies,
    getAllDesignersByCompany,
} = require('../db/queries/designers')

router.post('/company', async (req, res, next) => {
    try {
        let company = await addNewCompany(req.body.company_name)
        res.json({
            payload: company,
            msg: 'Successfully added design company',
            err: false
        })
    } catch (error) {
        res.status(500).json({
            payload: null,
            msg: 'Failed to add design company',
            err: true
        }) 
    }
})

router.post('/designer', async (req, res, next) => {
    try {
        let designer = await addNewDesigner(req.body.designer_id, req.body.design_company_id)
        res.json({
            payload: designer,
            msg: 'Successfully added designer',
            err: false
        })
    } catch (error) {
        res.status(500).json({
            payload: null,
            msg: 'Failed to add  designer',
            err: true
        }) 
    }
})

router.get('/all', async (req, res, next) => {
    try {
        let designers = await getAllDesigners()
        res.json({
            payload: designers,
            msg: 'Retrieved all designers',
            err: false
            })
    } catch (error) {
        res.status(500).json({
            payload: null,
            msg: 'Failed to retrieved all designers',
            err: true
        }) 
    }
})

router.get('/all/companies', async (req, res, next) => {
    try {
        let companies = await getAllDesignCompanies()
        res.json({
            payload: companies,
            msg: 'Retrieved all design companies',
            err: false
        })
    } catch (error) {
        res.status(500).json({
            payload: null,
            msg: 'Failed to retrieved all design companies',
            err: true
        }) 
    }
})

router.get('/company/:id/designers', async (req, res, next) => {
    try {
        let designers = await getAllDesignersByCompany(Number(req.params.id))
        res.json({
            payload: designers,
            msg: `Retrieved all designers in company_id: ${Number(req.params.id)}`,
            err: false
            })
    } catch (error) {
        res.status(500).json({
            payload: null,
            msg: `Failed to retrieved all designers in company_id: ${Number(req.params.id)}`,
            err: true
        }) 
    }
})

router.get('/company/:id', async (req, res, next) => {
    try {
        let company = await getDesignCompanyByID(Number(req.params.id))
        res.json({
            payload: company,
            msg: 'Retrieved design company',
            err: false
            })
    } catch (error) {
        res.status(500).json({
            payload: null,
            msg: 'Failed to retrieved design company',
            err: true
        }) 
    }
})

router.get('/:id', async (req, res, next) => {
    try {
        let designer = await getDesignerByID(Number(req.params.id))
        res.json({
            payload: designer,
            msg: 'Retrieved designer',
            err: false
            })
    } catch (error) {
        res.status(500).json({
            payload: null,
            msg: 'Failed to retrieved designer',
            err: true
        }) 
    }
})

module.exports = router;
