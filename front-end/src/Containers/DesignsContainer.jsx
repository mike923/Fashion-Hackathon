import React, { useEffect, useState } from 'react'
import DesignerProducts from '../Components/DesignerProducts'
import {connect} from 'react-redux'
import axios from 'axios'

const DesignsContainer = (props) => {
    console.log('user',props.user);
    

    const [products, setProducts] = useState([]);
    const [manufacturers, setManufacturers] = useState([]);


    const fetchAllDesigns = async () => {
        try {
            const { data: { payload } } = await axios.get(`/products/designer/${props.user.id}`)
            setProducts(payload)
            console.log(payload);

        } catch (error) {
            console.log(error);
        }
    }

    console.log(manufacturers);
    
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


    if (products.length) {
        return <DesignerProducts products={products}/>
    } else {
        return <div>No product results. Create some new designs!</div>
    }

}

const mapSateToProps =(state) =>{
    return{
        user: state.authReducer.user
    }
}

export default connect(mapSateToProps,null)(DesignsContainer)