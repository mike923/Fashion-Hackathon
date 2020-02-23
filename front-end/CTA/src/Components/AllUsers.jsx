import React from "react";
import { Link } from "react-router-dom";

const AllUsers = ({users}) => (
    <div>
        <h2>Users</h2>
        <ul>
            {users.map(({username, id, avatar_url}, i) => (
                <li key={i}>
                    <Link to={`/users/${id}`}>
                        <img src={avatar_url} alt={username} height="40px" />
                        <p>{username}</p>
                    </Link>
                </li>
            ))}
        </ul>
    </div>
)


export default AllUsers;
