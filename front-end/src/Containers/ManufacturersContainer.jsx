import React, { useEffect, useState } from 'react'
// import {Link} from 'react-router-dom'
import ManufacturerOrders from '../Components/ManufacturerOrders'
import ManufacturerMaterialRecipts from '../Components/ManufacturerMaterialRecipts';
import ManufacturerDesignersList from '../Components/ManufacturerDesignersList';
import axios from 'axios'
import ManufacturerTabs from '../Components/ManufacturerTabs';


const ManufacturersContainer = (props) => {    

    const [manufacturerProducts, setManufacturersProducts] = useState([]);

// console.log('user',props.user);

    const fetchAllManufacturers = async () => {
        try {
            const { data: { payload } } = await axios.get(`/products/manufacturer/${props.user.user_id}`)
            setManufacturersProducts(payload)
            console.log('manu',payload);

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
                <ManufacturerOrders manufacturerOrders={manufacturerProducts}/>
            
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



export default ManufacturersContainer