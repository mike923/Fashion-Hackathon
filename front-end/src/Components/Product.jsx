import React from 'react'
import { Link } from 'react-router-dom'

const Product = ({
    company_name, 
    complete, 
    design_company_id, 
    design_file, 
    designer_id, 
    designer_specs, 
    id, 
    manufacturer_id, 
    manufacturer_name, 
    manufacturer_specs, 
    product_id, 
    specialty, 
    user_id,
}) => (
    <Link to={`/public/products/${product_id}`}>
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
    </Link>
)

export default Product