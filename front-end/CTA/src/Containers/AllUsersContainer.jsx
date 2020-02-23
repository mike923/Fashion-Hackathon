import React, { useState, useEffect } from "react";
import axios from 'axios';

import { AllUsers } from '../Components'

const AllUsersContainer = () => {
    const [users, setUsers] = useState([])
    
    useEffect(() => {
        (async () => {
            try {
                let { data: { payload } } = await axios.get('/users')
                setUsers(payload)
            } catch (err) {
                console.log('ERROR', err)
            }
        })()
    }, [])

    return (
        <AllUsers users={users} />
    )
}


export default AllUsersContainer;
