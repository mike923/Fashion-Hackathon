import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { User, AllUserShows } from '../Components'
import { connect } from 'react-redux'

const UserConatiner = ({match: {params}, user: {id}}) => {
    const [user, setUser] = useState({})
    const [shows, setShows] = useState([])
    const profile_id = params.id ? params.id : id

    useEffect(() => {
        (async (id) => {
            try {
                let { data } = await axios.get(`/users/${id}`)
                setUser(data.payload)
            } catch (error) {
                console.log('error', error)
            }
            try {
                let { data } = await axios.get(`/shows/user/${id}`)
                setShows(data.payload)
            } catch (error) {
                console.log('error', error)
            }
        })(profile_id)
    }, [profile_id])

    return (
        <div>
            <User {...user} showButtons={Number(params.id) === id} />
            <AllUserShows shows={shows} user_id={profile_id} />
        </div>
    )
}

const mapStateToProps = ({authReducer}) => {
    return { ...authReducer}
}

export default connect(mapStateToProps)(UserConatiner)