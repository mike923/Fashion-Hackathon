const express = require('express');
const router = express.Router();
const {
    getAllProducts,
    getAllProductsByDesigner,
    getAllProductsByDesignCompany,
    getAllProductsByManufacturer,
} = require('../db/queries/products')

router.use('*', async (req, res, next) => {
    console.log('/products')
    next()
})

router.get('/all', async (req, res, next) => {
    try {
        let products = await getAllProducts()
        res.json({
            payload: products,
            msg: 'Retrieved all products',
            err: false
        })
    } catch (error) {
        console.log('get error /all\n', error)
        res.status(500).json({
            payload: null,
            msg: 'Failed to retrieve all products',
            err: true
        }) 
    }
})

router.get('/designer/:id', async (req, res, next) => {
    try {
        let products = await getAllProductsByDesigner(Number(req.params.id))
        res.json({
            payload: products,
            msg: 'Retrieved all products by designer',
            err: false
        })
    } catch (error) {
        console.log('get error /designer/:id\n', error)
        res.status(500).json({
            payload: null,
            msg: 'Failed to retrieve all products by designer',
            err: true
        }) 
    }
})

router.get('/design/company/:id', async (req, res, next) => {
    try {
        let products = await getAllProductsByDesignCompany(Number(req.params.id))
        res.json({
            payload: products,
            msg: 'Retrieved all products by design company',
            err: false
        })
    } catch (error) {
        console.log('get error /design/company/:id\n', error)
        res.status(500).json({
            payload: null,
            msg: 'Failed to retrieve all products by design company',
            err: true
        }) 
    }
})

router.get('/manufacturer/:id', async (req, res, next) => {
    try {
        let products = await getAllProductsByManufacturer(Number(req.params.id))
        res.json({
            payload: products,
            msg: 'Retrieved all products by manufacturer',
            err: false
        })
    } catch (error) {
        console.log('get error /manufacturer/:id\n', error)
        res.status(500).json({
            payload: null,
            msg: 'Failed to retrieve all products by manufacturer',
            err: true
        }) 
    }
})

module.exports = router