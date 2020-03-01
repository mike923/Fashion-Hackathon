import React from 'react'
import { Product } from '../'
import { ManufacturerProfile, DesignerProfile } from '../'

const ProductProfile = ({ product_id, design_file, designer_specs = {}, materials, ...product }) => (
    <div>
        <h1>Product Name: {product.product_name}</h1>
        <div className='product-profile-details'>
            <img src={design_file} alt={product_id} className='product-profile-img' />
            <div style={{
                display:'flex',
                alignItems:'center',
                flexDirection:'column',
                justifyContent:'center',
                gap:'10px'
            }}>
                <h2>Manufactured By: {product.manufacturer_name}</h2>
                <h2>Completed: {JSON.stringify(product.complete)}</h2>

              <div style={{
                  display:'flex',
                  marginTop:'15px'
              }}>
              {Object.keys(materials).map((material, i) => <h2 key={i}>{material}: {materials[material]}%</h2>)}
              {
                  Object.keys(designer_specs).map(item => {
                      console.log(item, designer_specs[item])
                      return <h2>{item}: {JSON.stringify(designer_specs[item])}</h2>
                  })
              }
              </div>
            </div>
        </div>
        {/* 
    */}
        {
            // Object.keys(designer_specs).map(item => <h2>{designer_specs[item]}</h2>)
        }
    </div>
)

export default ProductProfile