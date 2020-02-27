import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import ManufacturerOrders from '../Components/ManufacturerOrders'
import ManufacturerMaterialRecipts from '../Components/ManufacturerMaterialRecipts';
import ManufacturerDesignersList from '../Components/ManufacturerDesignersList';
import {connect} from 'react-redux'
import axios from 'axios'
import ManufacturerTabs from '../Components/ManufacturerTabs';


const ManufacturersContainer = (props) => {    

    const [manufacturers, setManufacturers] = useState([]);


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
        fetchAllManufacturers()
    }, [])


    // if (manufacturers.length) {
    //     return <div>
    //         <ul>
    //         {
    //             manufacturers.map(factory =>{
    //                 return <Link>{factory.manufacturer_name}</Link>
    //             })
    //         }
    //         </ul>
    //     </div>
    // } else {
    //     return <div>No product results. Create some new designs!</div>
    // }
    return(
        <ManufacturerTabs>
        <div label="Orders">
                <ManufacturerOrders />
            
        </div>
        <div label="Material Recipts">
            <ManufacturerMaterialRecipts />
        </div>
        <div label="Designers">
            List of all Designers
            <ManufacturerDesignersList />
        </div>
    </ManufacturerTabs>
    )

}

const mapSateToProps =(state) =>{
    return{
        user: state.authReducer.user
    }
}

export default connect(mapSateToProps,null)(ManufacturersContainer)