import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { connect } from 'react-redux';

import { ManufacturersPortal } from '../'

const ManufacturerPortalContainer = ({ user }) => {
    const [manufacturerProducts, setManufacturersProducts] = useState([]);

    const fetchAllManufacturers = async () => {
        try {
            const { data: { payload } } = await axios.get(`/products/manufacturer/${user.manufacture_id}`)
            setManufacturersProducts(payload)
            console.log('manu', payload);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchAllManufacturers()
    }, [user])

    return <ManufacturersPortal manufacturerProducts={manufacturerProducts} />

}

const mapSateToProps = (state) => {
    return {
        user: state.authReducer.user
    }
}

export default connect(mapSateToProps)(ManufacturerPortalContainer)