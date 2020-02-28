import React, { useEffect, useState } from 'react'
// import {Link} from 'react-router-dom'
import ManufacturerOrders from '../ManufacturerOrders'
import ManufacturerMaterialRecipts from '../ManufacturerMaterialRecipts';
import ManufacturerDesignersList from '../ManufacturerDesignersList';
import ManufacturerTabs from '../Components/ManufacturerTabs';
import { connect } from 'react-redux';
import axios from 'axios'


const ManufacturersContainer = ({ user }) => {

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

    return (
        <ManufacturerTabs>
            <div label="Orders">
                <ManufacturerOrders manufacturerOrders={manufacturerProducts} />

            </div>
            <div label="Material Recipts">
                <ManufacturerMaterialRecipts manufacturerOrders={manufacturerProducts} />
            </div>
            <div label="Designers">
                List of all Designers
            <ManufacturerDesignersList />
            </div>
        </ManufacturerTabs>
    )

}

const mapSateToProps = (state) => {
    return {
        user: state.authReducer.user
    }
}

export default connect(mapSateToProps, null)(ManufacturersContainer)