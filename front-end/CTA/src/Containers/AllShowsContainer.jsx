import React, { useEffect, useState } from 'react'
import axios from 'axios'

import { AllShows } from '../Components'

const AllShowsContainer = (props) => {
    const [shows, setShows] = useState([])

    useEffect(() => {
        loadShows()
    }, [])

    const loadShows = async () => {
        try {
            let { data } = await axios.get('/shows')
            setShows(data.payload)
        } catch (error) {
            console.log('error', error)
        }
    }

    return (
        <AllShows shows={shows} user_id={props.match.params.id} />
    )
}

export default AllShowsContainer