import React from 'react'
import { Link } from 'react-router-dom'

const AllUserShows = ({shows, user_id}) => (
    <ul>
        {shows.map(({show_id, title, img_url, genre_name}) => (
            <li key={show_id}>
                <Link to={`/shows/${show_id}/user/${user_id}`}>
                    <img src={img_url} alt={title}/>
                    <h3>{title}</h3>
                    <h4>{genre_name}</h4>
                </Link>
            </li>
        ))}
    </ul>
)

export default AllUserShows