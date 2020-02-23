import React from 'react'
import { Link } from 'react-router-dom'

const Comments = ({comments}) => (
    <ul>
        {comments.map(({username, comment_body, user_id, avatar_url}, i) => (
            <li key={i}>
                <Link to={`/users/${user_id}`}>
                    <img src={avatar_url} alt={username} height="40px" />
                    <h4>{username}</h4>
                </Link>
                <p>{comment_body}</p>
            </li>
        ))}
    </ul>
)

export default Comments