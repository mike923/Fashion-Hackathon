import React, { useState } from 'react'
import axios from 'axios'
import { Switch, Route } from 'react-router-dom'
import {
    AllManufacturers,
    AllDesigners,
    AllProducts,
} from '../Components'
import { ProductContainer } from './'

const PublicContainer = (props) => {
    const [manufacturers, setmanufacturers] = useState([])
    const [designers, setdesigners] = useState([])
    const [products, setproducts] = useState([])

    const getAll = async (type) => {
        try {
            const {data : {payload}} = await axios.get(`/${type}/all`)
            console.log(`all ${type}`, payload)
            switch (type) {
                case 'manufacturers':
                    setmanufacturers(payload)
                    break;
                case 'designers':
                    setdesigners(payload)
                    break;
                case 'products':
                    setproducts(payload)
                    break;
                default:
                    break;
            }
        } catch (error) {
            console.log(`error retrieving all ${type}`)
        }
    }

    return (
        <div>
            <Switch>
                <Route 
                    path="/public/manufacturers" 
                    render={() => <AllManufacturers manufacturers={manufacturers} getAll={getAll} />} 
                />
                <Route 
                    path="/public/designers" 
                    render={() => <AllDesigners designers={designers} getAll={getAll} />} 
                />
                <Route 
                    path="/public/products/:id" 
                    render={(props) => <ProductContainer {...props} />} 
                />
                <Route 
                    path="/public/products" 
                    render={() => <AllProducts products={products} getAll={getAll} />} 
                />
            </Switch>
        </div>
    )

}

export default PublicContainer