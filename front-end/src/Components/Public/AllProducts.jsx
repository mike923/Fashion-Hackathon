import React, { useEffect } from 'react'
import { Product } from '../'

const AllProducts = ({products, getAll}) => {
    useEffect(() => {
        getAll('products')
        return () => products = []
    }, [])
    
    return (
        <div>
            {products.map((product, i) => <Product {...product} key={i} />)}
        </div>
    )
}

export default AllProducts