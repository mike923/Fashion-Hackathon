import React from 'react'
import { Product } from '../'
import { ManufacturerProfile, DesignerProfile } from '../'

const ProductProfile = ({product_id, design_file, materials, manufacturer_name, specialty, ...product}) => (
    <div>
        <h1>This is the Product Profile Page</h1>
        <h1>This is product: {product_id}</h1>
        <img src={design_file} alt={product_id}/>

        {/* 
            This is just so that we can see the information regarding the product
            Feel free to change the styling for any of these!!!!!!!!!!
        */}
        <DesignerProfile {...product} products={[]} />
        <ManufacturerProfile manufacturer_name={manufacturer_name} specialty={specialty} products={[]} />
        <Product {...product} />
        {Object.keys(materials).map((material, i) => <h2 key={i}>{material}: {materials[material]}%</h2>)}
    </div>
)

export default ProductProfile