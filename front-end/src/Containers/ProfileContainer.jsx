import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Switch, Redirect } from 'react-router-dom'

import { DesignerProfile, EmployeeProfile, ManufacturerProfile, CompanyProfile } from '../Components'
import { PrivateRoute } from './'

const ProfileContainer = ({match: {params: {id, type}}}) => {
    // This contains all the backend connections for four different types of users.
    // This would make all the request to the backend to find a certain typ of user
    // The four being designers, manufacturers, design companies, and manufacturer employee
    // This displays that individuals personal page which is all private since we want users to be logged in

    const [profile, setprofile] = useState({})
    const [products, setproducts] = useState([])
    let productType = type
    let productTypeID = id

    useEffect(() => {
        (async () => {
            try {
                await getProfile(type, id)
                productTypeID = profile.manufacture_id ? profile.manufacture_id : productTypeID
                await getProducts(productType, productTypeID)
            } catch (error) {
                console.log('usereffect error')
            }
        })()
        return () => {
            setprofile({})
            setproducts([])
        }
    }, [])

    switch (type) {
        case 'employee':
            type = 'manufacturers/employee'
            productType = 'manufacturer'
            break;
        case 'designcompany':
            type = 'designers/company'
            productType = 'design/company'
            break;
        case 'manufacturer':
            type = 'manufacturers'
            break;
        case 'designer':
            type = 'designers'
            break;
        default:
            return <Redirect to="/" />
    }

    const getProfile = async (type, id) => {
        try {
            let { data: { payload } } = await axios.get(`/${type}/${id}`)
            console.log('profile', payload)
            setprofile(payload)
        } catch (error) {
            console.log(`error retrieving ${type} with id${id}`)
        }
    }

    const getProducts = async (type, id) => {
        try {
            let { data: { payload } } = await axios.get(`/products/${type}/${id}`)
            console.log('products ', type, id, payload)
            setproducts(payload)
        } catch (error) {
            console.log(`error retrieving products for ${type} with id${id}`)
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
                    path='/private/designer/:id' 
                    render={() => <DesignerProfile {...profile} products={products} />} 
                />
                <PrivateRoute 
                    path='/private/manufacturer/:id' 
                    render={() => <ManufacturerProfile {...profile} products={products} />} 
                />
                <PrivateRoute 
                    path='/private/designcompany/:id' 
                    render={() => <CompanyProfile {...profile} products={products} />} 
                />
            </Switch>
        </div>
    )
}

export default ProfileContainer