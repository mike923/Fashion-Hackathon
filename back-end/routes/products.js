const express = require('express');
const router = express.Router();
const {
    getProductByID,
    getProductsByStatus,
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

router.get('/:type/:id/status/:status', async (req, res, next) => {
    try {
        let products = await getProductsByStatus(req.params.status === 'complete', req.params.type.toUpperCase(), Number(req.params.id))
        res.json({
            payload: products,
            msg: 'Retrieved products by status',
            err: false
        })
    } catch (error) {
        console.log('get error /:type/:id/status/:status\n', error)
        res.status(500).json({
            payload: null,
            msg: 'Failed to retrieve products by status',
            err: true
        }) 
    }
})

router.get('/:id', async (req, res, next) => {
    try {
        let product = await getProductByID(Number(req.params.id))
        res.json({
            payload: product,
            msg: 'Retrieved product by id',
            err: false
        })
    } catch (error) {
        console.log('get error /:id\n', error)
        res.json({
            payload: null,
            msg: 'Failed to get product by id',
            err: true
        })
    }
})

router.patch('/update/:id', async (req, res, next) => {
    let product = {...req.body}
    try {
        let newProduct = ''
        res.json({
            payload: '',
            msg: '',
            err: false
        })
    } catch (error) {
        console.log('get error /update/:id\n', error)
        res.json({
            payload: null,
            msg: 'Failed to update product with id',
            err: true
        })
    }
})

module.exports = router