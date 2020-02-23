import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import { AddShow } from '../Components'

const AddShowContainer = ({user: {id}, match: {params}, ...props}) => {
    console.log(props)


    const [genres, setGenres] = useState([{
        id: 0,
        genre_name: 'other',
    }])

    useEffect(() => {
        loadGenres()
    }, [])

    const loadGenres = async () => {
        try {
            const { data } = await axios.get('/genres')
            const newGenres = genres.concat(data.payload)
            setGenres(newGenres)
            console.log(newGenres, data.payload)
        } catch (error) {
            console.log('error', error)
        }
    }

    const addGenre = async (genre_name) => {
        try {
            const { data } =  await axios.post('/genres', {genre_name})
            const newGenres = genres.concat(data.payload)
            setGenres(newGenres)
        } catch (error) {
            console.log('error', error)
        }
    }

    const addShow = async (title, img_url, genre_id, genre_name) => {
        try {
            if (genre_id === 0) {
                const { data } = await addGenre(genre_name)
                genre_id = data.payload.id
            }
            const newShow = {title, img_url, genre_id}
            const { data } = await axios.post('/shows', newShow)
            console.log(data)
        } catch (error) {
            console.log('error', error)
        }
    }

    if (Number(params.id) !== Number(id)) {
        return <Redirect to={`/users/${id}/addShow`} />
    }
    return (
        <AddShow genres={genres} addShow={addShow} />
    )
}

const mapStateToProps = ({authReducer}) => { return { ...authReducer}}

export default connect(mapStateToProps)(AddShowContainer)