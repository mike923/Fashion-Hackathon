import React, { useState } from 'react'
import { ProductProfile } from '../Components'
import axios from 'axios'
import { useEffect } from 'react'
import { connect } from 'react-redux'

const ProductContainer = (props) => {
    const {match : {params}} = props
    const editButton = props.user.user_id
    console.log(editButton, props.user)
    // This contains all the backend connnecitons regarding a particular products page.
    // In a full build this is where our product wiki would be.

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

    return <ProductProfile {...product} editButton={editButton === product.user_id} materials={materials} />
}

const mapStateToProps = ({authReducer}) => {return {...authReducer}}

export default connect(mapStateToProps)(ProductContainer)