const express = require('express');
const router = express.Router();
const {
    getAllProducts,
    getAllProductsByDesigner,
    getAllProductsByDesignCompany,
    getAllProductsByManufacturer,
} = require('../db/queries/products')

router.use('*', (req, res, next) => console.log('/products'))

router.get('/all', (req, res, next) => {
    try {
        let company = await addNewCompany(req.body.company_name)
        res.json({
            payload: company,
            msg: 'Successfully added design company',
            err: false
        })
    } catch (error) {
        console.log('get error /all\n', error)
        res.status(500).json({
            payload: null,
            msg: 'Failed to add design company',
            err: true
        }) 
    }
})

module.exports = router