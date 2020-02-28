import React, { useState } from 'react'
import PublicDesigners from '../Components/PublicDesigners'
import axios from 'axios'
import { useEffect } from 'react'
const PublicContainer = (props) =>{

    const  [allDesigners, setAllDesigners] = useState([])

    const getAllDesigners = async() =>{
        try {
            const {data: {payload}} = await axios.get(`/designers/all`)
            console.log('all designers',payload);
            setAllDesigners(payload)
        } catch (error) {
            
        }
    }

    useEffect( () =>{
        getAllDesigners()
    },[])


    return <PublicDesigners allDesigners ={allDesigners}/>
 
}

export default PublicContainer