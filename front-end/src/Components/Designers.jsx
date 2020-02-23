import React, { useState, useEffect } from 'react'
// import userInputHook from './Hooks/UseInputHook'
import DesignerTabs from './DesignerTabs';

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
            <img src={bannerImg} alt="banner" />

            <h1>Welcome to Designers</h1>

            <DesignerTabs>
                <div label="Design">
                    Created and pending Designs
      </div>
                <div label="Create Design">
                    Form to create your design
      </div>
                <div label="Manufacturers">
                    List of all Manufacturers
      </div>
            </DesignerTabs>
        </div>
    )
}

export default Designers