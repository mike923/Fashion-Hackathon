import React, { useEffect, useState } from 'react'
import DesignerProducts from '../Components/DesignerProducts'
import DesignerPortal from '../Components/DesignerPortal'
import Map from '../Components/Map'
import {loadManufacturers} from '../store/actions/userActions'
import {connect} from 'react-redux'
import axios from 'axios'
import { Switch, Link, Route } from 'react-router-dom'

const DesignerPortalContainer = ({user, loadManufacturers}) => {
    console.log('user', user);
    const [products, setProducts] = useState([]);
    const [manufacturers, setManufacturers] = useState([]);

    const fetchAllDesigns = async () => {
        try {
            const { data: { payload } } = await axios.get(`/products/designer/${user.user_id}`)
            setProducts(payload)
            console.log(payload);
        } catch (error) {
            console.log(error);
        }
    }
    
    const fetchAllManufacturers = async () => {
        try {
            const { data: { payload } } = await axios.get(`/manufacturers/all`)
            setManufacturers(payload)
            console.log(payload);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchAllDesigns()
        fetchAllManufacturers()
    }, [])
    
    return (
        <DesignerPortal
            products={products}
            manufacturers={manufacturers}
        />
    )
}

const mapStateToProps = ({authReducer: {user}}) => {return {user}}


export default connect(mapStateToProps)(DesignerPortalContainer)