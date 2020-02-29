import React, { useState } from 'react'
import { ProductProfile } from '../Components'
import axios from 'axios'
import { useEffect } from 'react'

const ProductContainer = ({match : {params}}) => {
    const [product, setproduct] = useState({})
    const [materials, setmaterials] = useState({})

    useEffect(() => {
        getProduct(params.id)
        getMaterials(params.id)
        return () => {
            setproduct({})
            setmaterials({})
        }
    }, [])

    const getProduct = async (id) => {
        try {
            const { data: { payload } } = await axios.get(`/products/${id}`)
            console.log(`product with id: ${id}`, payload)
            setproduct(payload)
        } catch (error) {
            console.log(`error getting product with id ${id}`)
        }
    }

    const getMaterials = async (id) => {
        try {
            const { data: { payload } } = await axios.get(`/materials/product/${id}`)
            console.log(`materials for product with id: ${id}`, payload)
            setmaterials(payload.all_materials)
        } catch (error) {
            console.log(`error getting materials for product with id ${id}`)
        }
    }

    return <ProductProfile {...product} materials={materials} />
}

export default ProductContainer