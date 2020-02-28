import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

const linkStyle = {
    display: 'flex' ,
    // alignItems:'center',
    justifyContent:'center',
    gap:'40px',
    padding:'30px'
}

const AllDesigners = ({designers, getAll}) => {
    useEffect(() => {
        getAll('designers')
        return () => designers = []
    }, [])
    
    return (
        <div className='public-designers'>
            <h1>Whose using A9</h1>
            {designers.map(({user_id, username, avatar_url, company_name, email}) => (
                <Link to={`/designer/public/${user_id}`} key={user_id} style={linkStyle}>
                    <div className='designer-profile-info' style={{
                        display:'flex',
                        gap:'10px'
                    }}>
                        <img src={avatar_url}
                            alt={username}
                            style={{
                                borderRadius: '70px',
                                height: '140px',
                                width: '140px'
                            }}
                        />
                        <p style={{fontSize:'30px'}}>{username}</p>
                    </div>
                    <div className='designer-meta-data' style={{
                        display:'flex',
                        justifyContent:'flex-end',
                        flexDirection:'column'
                    }}>
                        <p>Company: {company_name}</p>
                        <p>Email: {email}</p>
                    </div>
                </Link>
            ))}
        </div>
    )
}

export default AllDesigners