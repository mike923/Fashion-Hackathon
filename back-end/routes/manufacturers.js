const express = require('express');
const router = express.Router();
const {
	addNewEmployee,
    addNewManufacturer,
    getEmployeeByID,
    getCompanyByID,
	getAllManufacturers,
    getAllEmployees,
    getAllEmployeesByCompany,
} = require('../db/queries/manufacturers');

router.post('/company', async (req, res, next) => {
    try {
        let company = await addNewManufacturer(req.body.manufacturer_name, req.body.specialty)
        res.json({
            payload: company,
            msg: 'Successfully added manufacturing company',
            err: false
        })
    } catch (error) {
        console.log('post error /company\n', error)
        res.status(500).json({
            payload: null,
            msg: 'Failed to add manufacturing company',
            err: true
        }) 
    }
})

router.post('/employee', async (req, res, next) => {
    try {
        let employee = await addNewEmployee(req.body.employee_id, req.body.company_id)
        res.json({
            payload: employee,
            msg: 'Successfully added employee',
            err: false
        })
    } catch (error) {
        console.log('post error /employee\n', error)
        res.status(500).json({
            payload: null,
            msg: 'Failed to add employee',
            err: true
        }) 
    }
})

router.get('/all', async (req, res, next) => {
    try {
        let manufacturers = await getAllManufacturers()
        res.json({
            payload: manufacturers,
            msg: 'Retrieved all manufacturers',
            err: false
        })
    } catch (error) {
        console.log('get error /all\n', error)
        res.status(500).json({
            payload: null,
            msg: 'Failed to retrieved all manufacturers',
            err: true
        }) 
    }
})

router.get('/all/employees', async (req, res, next) => {
    try {
        let employees = await getAllEmployees()
        res.json({
            payload: employees,
            msg: 'Retrieved all manufacturing employees',
            err: false
        })
    } catch (error) {
        console.log('get error /all/employees\n', error)
        res.status(500).json({
            payload: null,
            msg: 'Failed to retrieved all manufacturing employees',
            err: true
        }) 
    }
})

router.get('/:id/employees', async (req, res, next) => {
    try {
        let employees = await getAllEmployeesByCompany(Number(req.params.id))
        res.json({
            payload: employees,
            msg: `Retrieved all employees in company_id: ${Number(req.params.id)}`,
            err: false
        })
    } catch (error) {
        console.log('get error /:id/employees\n', error)
        res.status(500).json({
            payload: null,
            msg: `Failed to retrieved all employees in company_id: ${Number(req.params.id)}`,
            err: true
        }) 
    }
})

router.get('/employee/:id', async (req, res, next) => {
    try {
        let employee = await getEmployeeByID(Number(req.params.id))
        res.json({
            payload: employee,
            msg: 'Retrieved company employee',
            err: false
        })
    } catch (error) {
        console.log('get error /employee/:id\n', error)
        res.status(500).json({
            payload: null,
            msg: 'Failed to retrieved company employee',
            err: true
        }) 
    }
})

router.get('/:id', async (req, res, next) => {
    try {
        let company = await getCompanyByID(Number(req.params.id))
        res.json({
            payload: company,
            msg: 'Retrieved company',
            err: false
        })
    } catch (error) {
        console.log('get error /:id\n', error)
        res.status(500).json({
            payload: null,
            msg: 'Failed to retrieved company',
            err: true
        }) 
    }
})

module.exports = router;
