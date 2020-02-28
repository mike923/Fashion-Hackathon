import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { DesignerProfilePage } from '../Components'

const ProfileContainer = ({match: {params}}) => {
    const [user, setuser] = useState({})
    const [products, setproducts] = useState([])
    console.log(params.id)

    const getUser = async () => {
        try {
            let { data: { payload } } = await axios.get(`/designers/${params.id}`)
            console.log(payload)
            setuser(payload)
        } catch (error) {
            console.log(`error retrieving designer with id${params.id}`)
        }
    }

    const getProducts = async () => {
        try {
            let { data: { payload } } = await axios.get(`/products/designer/${params.id}`)
            console.log(payload)
            setproducts(payload)
        } catch (error) {
            console.log(`error retrieving products for designer with id${params.id}`)
        }
    }

    useEffect(() => {
        getUser()
        getProducts()
        return () => {
            setuser({})
        }
    }, [])

    return <DesignerProfilePage {...user} products={products} />
}

export default ProfileContainer