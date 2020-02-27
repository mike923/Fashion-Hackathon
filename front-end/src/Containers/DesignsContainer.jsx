import React, { useEffect, useState } from 'react'
import DesignerProducts from '../Components/DesignerProducts'
import {connect} from 'react-redux'
import axios from 'axios'

const DesignsContainer = (props) => {
    console.log('user',props.user);
    

    const [products, setProducts] = useState([]);


    const fetchAllDesigns = async () => {
        try {
            const { data: { payload } } = await axios.get(`/api/products/designer/${1}`)
            setProducts(payload)
            console.log(payload);

        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchAllDesigns()
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