import React, { useEffect } from 'react'
import { Product } from '../'

const AllProducts = ({products, getAll}) => {
    useEffect(() => {
        getAll('products')
        return () => products = []
    }, [])
    
    return (
        <div>
            {products.map(Product)}
        </div>
    )
}

export default AllProducts