import React from 'react'
import { Link } from 'react-router-dom'

const User = ({id, username, avatar_url, showButtons}) => (
    <div>
        <h2>This is a user profile page</h2>
        <h2>{username}</h2>
        <img src={avatar_url} alt={username}/>
        {showButtons
            ? <Link to={`/users/${id}/addShow`}>Add Show</Link>
            : ''
        }
        <h3>Watching:</h3>
    </div>
)

export default User