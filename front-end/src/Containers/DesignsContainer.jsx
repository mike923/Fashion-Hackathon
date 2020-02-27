import React, { useEffect, useState } from 'react'
import DesignerProducts from '../Components/DesignerProducts'
import axios from 'axios'

const DesignsContainer = () => {

    const [products, setProducts] = useState([]);


    const fetchAllDesigns = async () => {
        try {
            const { data: { payload } } = await axios.get(`/api/products`)
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

export default DesignsContainer