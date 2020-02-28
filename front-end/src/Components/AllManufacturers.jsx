import React, { useEffect } from 'react'

const AllManufacturers = ({manufacturers, getAll}) => {
    useEffect(() => {
        getAll('manufacturers')
        return () => manufacturers = []
    }, [])
    
    return (
        <div>
            {manufacturers.map(({id, manufacturer_name, specialty}) => (<>
                {id}
                <h1>{manufacturer_name}</h1>
                {specialty}
            </>))}
        </div>
    )
}

export default AllManufacturers