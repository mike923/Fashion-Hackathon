import React from 'react'
import { Product } from '../'
import { ManufacturerProfile, DesignerProfile } from '../'

const ProductProfile = ({ product_id, design_file, designer_specs = {}, materials, ...product }) => (
    <div className='product-profile-page'>
        <h1>{product.product_name}</h1>
        <div className='product-profile-details'>
            <div className="product-profile-image">
                <img src={design_file} alt={product_id} className='product-profile-img' />
            </div>
            <div  className='product-showcase'>
                {/* <h1>Manufactured By: {product.manufacturer_name}</h1> */}
                {/* <h1>Completed: {JSON.stringify(product.complete)}</h1> */}

              <h1>Manufactured By: {product.manufacturer_name}</h1>
              <br/>
              <p>
              {
                  Object.keys(designer_specs).map(item => {
                      console.log(item, designer_specs[item])
                      if (item === "colors") {
                        return <h2>{item}: black, grey</h2>
                      }
                      return <h2>{item}: {JSON.stringify(designer_specs[item])}</h2>
                  })
              }
              </p>
            </div>
            <div className="product-profile-materials">
                <h1>Materials</h1>
                <br/>
              <p>
              {Object.keys(materials).map((material, i) => <h2 key={i}>{material}: {materials[material]}%</h2>)}
              </p>
            </div>
        </div>
        

    </div>
)

export default ProductProfile