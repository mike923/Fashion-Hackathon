import React from 'react'
import { Link } from 'react-router-dom'

const linkStyle = {
    display: 'flex' ,
    // alignItems:'center',
    justifyContent:'center',
    gap:'40px',
    padding:'30px'
}

const PublicDesigners = ({ allDesigners }) => {
    return (
        <div className='public-designers'>
            {
                allDesigners.map(designer => {
                    return (
                        <Link to={`/designers/${designer.user_id}`} key={designer.user_id} style={linkStyle}>
                            <div className='designer-profile-info' style={{
                                display:'flex',
                                gap:'10px'
                            }}>
                                <img src={designer.avatar_url}
                                    alt={designer.username}
                                    style={{
                                        borderRadius: '70px',
                                        height: '140px',
                                        width: '140px'
                                    }}
                                />
                                <p style={{fontSize:'30px'}}>{designer.username}</p>
                            </div>
                            <div className='designer-meta-data' style={{
                                display:'flex',
                                justifyContent:'flex-end',
                                flexDirection:'column'
                            }}>
                                <p>Company: {designer.company_name}</p>
                                <p>Email: {designer.email}</p>
                            </div>
                        </Link>
                    )
                })
            }
        </div>
    )
}

export default PublicDesigners