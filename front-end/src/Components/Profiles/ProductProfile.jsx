import React from 'react'
import { Product } from '../'
import { ManufacturerProfile, DesignerProfile } from '../'

const ProductProfile = ({ product_id, design_file, designer_specs = {}, materials, ...product }) => (
    <div>
        <h1>This is the Product Profile Page</h1>
        <h1>This is product: {product_id}</h1>
        <div className='product-profile-details'>
            <img src={design_file} alt={product_id} className='product-profile-img' />
            <div>
            <p>{product.company_name}</p>
            <p>Manufactured By: {product.manufacturer_name}</p>
            <p>Project Status: {JSON.stringify(product.complete)}</p>
            {
            //     Object.keys(designer_specs).map(item => {
            //     console.log(item, designer_specs[item])
            //     // return <h2>{item}: {JSON.stringify(designer_specs[item])}</h2>
            // })
        }
            </div>
        </div>
        {Object.keys(product).map(item => {
            // console.log(item, product[item], Object.keys(designer_specs))
            return <h2>{item}: {JSON.stringify(product[item])}</h2>
        })
    }
        {/* 
    */}
        {
            // Object.keys(designer_specs).map(item => <h2>{designer_specs[item]}</h2>)
        }
        {Object.keys(materials).map((material, i) => <h2 key={i}>{material}: {materials[material]}%</h2>)}
    </div>
)

export default ProductProfile