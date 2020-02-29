import React from 'react'
import { Product } from '..'

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    }
}

const ManufacturerProfile = ({manufacturer_name, specialty, products}) => (
    <div styles={styles}>
        <br />{

            // <img alt="banner" className='bannerimg' src='https://cdn-media.threadless.com/cover_images/15/3364995.jpg'/>
        }
        <h1>{manufacturer_name}</h1>
        <h2>{specialty}</h2>
        {products.map(Product)}
    </div>
)

export default ManufacturerProfile