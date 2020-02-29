import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Switch, Redirect, Route} from 'react-router-dom'

import { AllManufacturers, DesignerProfile, EmployeeProfile, ManufacturerProfile, CompanyProfile } from '../Components'
import { PrivateRoute, ProductContainer } from './'
import { connect } from 'react-redux'

const ProfileContainer = (props) => {
    const [profile, setprofile] = useState({})
    const [products, setproducts] = useState([])
    const [manufacturers, setmanufacturers] = useState([])

    useEffect(() => {
        getProfile()
        getProducts()
        return () => {
            setprofile({})
            setproducts([])
        }
    }, [])

    const getProfile = async (type, id) => {
        try {
            let { data: { payload } } = await axios.get(`/designers/${props.user.designer_id}`)
            console.log('profile', payload)
            setprofile(payload)
        } catch (error) {
            console.log(`error retrieving ${type} with id${id}`, error)
        }
    }

    const getProducts = async (type, id) => {
        try {
            let { data: { payload } } = await axios.get(`/products/designer/${props.user.designer_id}`)
            console.log('products ', type, id, payload)
            setproducts(payload)
        } catch (error) {
            console.log(`error retrieving products for ${type} with id${id}`)
        }
    }

    const getAll = async () => {
        try {
            const {data : {payload}} = await axios.get(`/manufacturers/all`)
            console.log(`all `, payload)
            setmanufacturers(payload)
        } catch (error) {
            console.log(`error retrieving all `)
        }
    }

    return (
        <div>
            <Switch>
                <PrivateRoute 
                    path='/private/employee/:id' 
                    render={() => <EmployeeProfile {...profile} products={products} />} 
                />
                <PrivateRoute 
                    path='/private/manufacturer/:id' 
                    render={() => <ManufacturerProfile {...profile} products={products} />} 
                />
                <PrivateRoute 
                    path='/private/designcompany/:id' 
                    render={() => <CompanyProfile {...profile} products={products} />} 
                />
                <PrivateRoute 
                    path="/products/:id" 
                    render={(props) => <ProductContainer {...props} />} 
                />
                <PrivateRoute 
                    path='/products' 
                    render={() => <DesignerProfile {...profile} products={products} />} 
                />
                <Route 
                    path="/manufacturers" 
                    render={() => <AllManufacturers manufacturers={manufacturers} getAll={getAll} />} 
                />
                <PrivateRoute 
                    path='/' 
                    render={() => <DesignerProfile {...profile} products={products} />} 
                />
            </Switch>
        </div>
    )
}

const mapStateToProps = ({ authReducer,  }) => {
    return { ...authReducer }
}

export default connect(mapStateToProps)(ProfileContainer)