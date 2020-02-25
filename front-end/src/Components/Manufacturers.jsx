import React, { useState, useEffect } from 'react'
// import userInputHook from './Hooks/UseInputHook'
import ManufacturerTabs from './ManufacturerTabs';
import ManufacturerOrders from './ManufacturerOrders';
import ManufacturerMaterialRecipts from './ManufacturerMaterialRecipts';
import ManufacturerDesignersList from './ManufacturerDesignersList';

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    }
}

const Manufacturers = () => {

    const [bannerImg, setBannerimg] = useState('');

    const getBannerImage = () => {
        // const response = await axios.get(`backend image`)
        const tempImg = 'https://www.mrcpa.org/wp-content/uploads/2017/06/Lean-Manufacturing-IoT-banner.jpg'

        setBannerimg(tempImg)
    }

    useEffect(() => {
        console.log('Hooks updated')
        getBannerImage();
    }, [])

    return (
        <div styles={styles}>
            <br />
            <img src={bannerImg} alt="banner" className="bannerimg"/>

            <h1>Manufactures Portal</h1>

            <ManufacturerTabs>
                <div label="Orders">
                    <ManufacturerOrders />
                </div>
                <div label="Material Recipts">
                    <ManufacturerMaterialRecipts />
                </div>
                <div label="Designers">
                    List of all Designers
                    <ManufacturerDesignersList />
                </div>
            </ManufacturerTabs>

        </div>
    )
}

export default Manufacturers