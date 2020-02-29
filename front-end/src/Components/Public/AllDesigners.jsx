import React, { useEffect } from 'react'
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

const AllDesigners = ({designers, getAll}) => {
    useEffect(() => {
        getAll('designers')
        return () => designers = []
    }, [])
    
    return (
        <div 
            className='public-designers'
            style={{
                display:'flex',
                alignItems:'center',
                flexDirection:'column'
            }}
        >
            <h1>A9 Fashion Designers</h1>
            {designers.map(({designer_id, username, avatar_url, company_name, email}, i) => (
                <Link to={`/private/designer/${designer_id}`} key={i} style={linkStyle}>
                    <div 
                        className='designer-profile-info' 
                        style={{
                            display:'flex',
                            gap:'10px',
                            alignItems:'center',
                            height:'185px',
                            // width:'30vw',
                        }}
                    >
                        <img src={avatar_url}
                            alt={username}
                            style={{
                                borderRadius: '70px',
                                height: '240px',
                                width: '140px',
                                gap:'15px',
                            }}
                        />
                        <p style={{fontSize:'60px'}}>{username}</p>
                    </div>
                    <div 
                        className='designer-meta-data' 
                        style={{
                            display:'flex',
                            justifyContent:'flex-end',
                            flexDirection:'column'
                        }}
                    >
                        <p>Company: {company_name}</p>
                        <p>Email: {email}</p>
                    </div>
                </Link>
            ))}
        </div>
    )
}

export default AllDesigners