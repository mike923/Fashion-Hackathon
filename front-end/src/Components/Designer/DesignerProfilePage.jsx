import React from 'react'

const DesignerProfile = ({designer_id, username, avatar_url, products}) => {
    return (
        <div>
            <img src={avatar_url} alt={username}/>
            <h1>{username} {designer_id}</h1>
            {products.map(({company_name, complete, design_company_id, design_file, designer_id, designer_specs, id, manufacturer_id, manufacturer_name, manufacturer_specs, product_id, specialty, user_id,}) => (<>
                <h1>product_id: {product_id}</h1>
                <p>
                    company_name: {company_name} <br/>
                    complete: {complete} <br/>
                    design_company_id: {design_company_id} <br/>
                    design_file: {design_file} <br/>
                    designer_id: {designer_id} <br/>
                    id: {id} <br/>
                    manufacturer_id: {manufacturer_id} <br/>
                    manufacturer_name: {manufacturer_name} <br/>
                    manufacturer_specs: {manufacturer_specs} <br/>
                    specialty: {specialty} <br/>
                    user_id: {user_id} <br/>
                </p>
            </>))}
        </div>
    )
}

export default DesignerProfile