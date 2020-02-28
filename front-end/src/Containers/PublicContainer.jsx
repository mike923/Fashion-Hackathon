import React, { useState } from 'react'
import PublicDesigners from '../Components/PublicDesigners'
import axios from 'axios'
import { useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'
import DesignerProfile from '../Components/DesignerProfilePage'
const PublicContainer = (props) => {

    const [allDesigners, setAllDesigners] = useState([])

    const getAllDesigners = async () => {
        try {
            const { data: { payload } } = await axios.get(`/designers/all`)
            console.log('all designers', payload);
            setAllDesigners(payload)
        } catch (error) {

        }
    }

    useEffect(() => {
        getAllDesigners()
    }, [])




    return (
        <div>
            <Switch>
            </Switch>

            <PublicDesigners allDesigners={allDesigners} />
        </div>
    )

}

export default PublicContainer