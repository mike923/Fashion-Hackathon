import React, { useState, useEffect } from 'react'
// import userInputHook from './Hooks/UseInputHook'
import DesignerTabs from './DesignerTabs';
import DesignerCreateForm from './DesignerCreateForm';
import DesignerProducts from './DesignerProducts';

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    }
}

const Designers = () => {

    // const [userId, setUser] = useState(0);
    const [bannerImg, setBannerimg] = useState('');

    const getBannerImage = () => {
        // const response = await axios.get(`backend image`)
        const tempImg = 'https://cdn-media.threadless.com/cover_images/15/3364995.jpg'

        setBannerimg(tempImg)
    }

    useEffect(() => {
        console.log('Hooks updated')
        getBannerImage();
    }, [])

    return (
        <div styles={styles}>
            <br />
            <img src={bannerImg} alt="banner" className='bannerimg' />

            <h1>Designers Portal</h1>

            <DesignerTabs>
                <div label="Products">
                    <DesignerProducts />
                </div>
                <div label="Create Design">
                    <DesignerCreateForm />
                </div>
                <div label="Manufacturers">
                    List of all Manufacturers
                    <a href="/map">to map</a>
                </div>
            </DesignerTabs>
        </div>
    )
}

export default Designers