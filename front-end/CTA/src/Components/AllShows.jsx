import React from 'react'
import { Link } from 'react-router-dom'

const AllShows = ({shows}) => (
    <ul>
        {shows.map(({title, genre_name, img_url, show_id, viewers}, i) => (
            <Link to={`/shows/${show_id}`} key={i}>
                <li key={i}>
                    <img src={img_url} alt={title} height="200px"/>
                    <h3>{title}</h3>
                    <h4>{genre_name}</h4>
                    Being watched by: 
                    <ol>
                        {viewers.map(({user_id, username, avatar_url}, i) => (
                            <Link to={`/users/${user_id}`} key={i}>
                                <li>
                                    <img src={avatar_url} alt={username} height="20px"/>
                                    {username}
                                </li>
                            </Link>
                        ))}
                    </ol>
                </li>
            </Link>
        ))}
    </ul>
)

export default AllShows
