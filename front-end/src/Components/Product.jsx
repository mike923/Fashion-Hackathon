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
        <Link to={`/public/products/${product_id}`}>
            <p className='product-card-container'>
                <p className='product-card'>
                    <h1>product_id: {product_id}</h1>
                    <img src={design_file} alt={company_name} id='product-img' />  <br />
                    Company Name: {company_name} <br />
                    Status: {JSON.stringify(complete)} <br />
                    design_company_id: {design_company_id} <br />
                    designer_id: {designer_id} <br />
                    id: {id} <br />
                    manufacturer_id: {manufacturer_id} <br />
                    Manufacturer Name: {manufacturer_name} <br />
                    manufacturer_specs: {manufacturer_specs} <br />
                    specialty: {specialty} <br />
                    user_id: {user_id} <br />
                </p>
                {editButton ? (
                    <div>
                        <button>Edit</button>
                    </div>
                ) : ''}
            </p>
        </Link>
    )

export default Product