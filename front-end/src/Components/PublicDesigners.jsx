import React from 'react'
import { Link } from 'react-router-dom'

const linkStyle = {
    display: 'flex' ,
    alignItems:'center',
    // justifyContent:'flex-start',
    gap:'40px',
    padding:'30px',
    width:'40vw',
    borderRadius:'5px',
    background:'lightgrey',
    marginTop:'10px',
    height:'200px'
}

const PublicDesigners = ({ allDesigners }) => {
    return (
        <div className='public-designers' 
        style={{
            display:'flex',
            alignItems:'center',
            flexDirection:'column'
        }}>
        <h1>Whose using A9</h1>
            {
                allDesigners.map(designer => {
                    return (
                        <Link to={`/designer/public/${designer.user_id}`} key={designer.user_id} style={linkStyle}>
                            <div className='designer-profile-info' 
                            style={{
                                display:'flex',
                                gap:'10px',
                                alignItems:'center',
                                height:'185px',
                                // width:'30vw',
                            }}>
                                <img src={designer.avatar_url}
                                    alt={designer.username}
                                    style={{
                                        borderRadius: '70px',
                                        height: '240px',
                                        width: '140px',
                                        gap:'15px',
                                    }}
                                />
                                <p style={{fontSize:'60px'}}>{designer.username}</p>
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