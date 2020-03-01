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
    editButton,
}) => (
        <Link className='product-link' to={`/public/products/${product_id}`} >
            <img src={design_file} alt={company_name} id='product-img' />  <br />
            <div className='designer-products'>
                <h1>{product_id}</h1>
                <p>
                    <strong>Company Name:</strong> {company_name} <br />
                    <strong>Manufacturer Name:</strong> {manufacturer_name} <br />
                    <strong>Status:</strong> {JSON.stringify(complete)} <br />
                </p>
            </div>
        </Link>
    )

export default Product