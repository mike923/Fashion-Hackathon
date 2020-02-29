import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

const AllManufacturers = ({manufacturers, getAll}) => {
    useEffect(() => {
        getAll('manufacturers')
        return () => manufacturers = []
    }, [])
    
    return (
        <div>
            {manufacturers.map(({id, manufacturer_name, specialty}) => (
                <Link to={`/private/manufacturer/${id}`}>
                    <h1>{manufacturer_name}</h1>
                    {specialty}
                </Link>
            ))}
        </div>
    )
}

export default AllManufacturers