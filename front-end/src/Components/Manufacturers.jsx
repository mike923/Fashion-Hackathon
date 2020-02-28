import React, { useState, useEffect } from 'react'
// import userInputHook from './Hooks/UseInputHook'
import ManufacturerContainer from '../Containers/ManufacturersContainer'
import { connect } from 'react-redux';

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    }
}

const Manufacturers = (props) => {

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

    console.log('lol',props.user);
    
    return (
        <div styles={styles}>
            <br />
            <img src={bannerImg} alt="banner" className="bannerimg"/>

            <h1>Manufactures Portal</h1>

            <ManufacturerContainer user={props.user}/>

        </div>
    )
}

const mapSateToProps =(state) =>{
    return{
        user: state.authReducer.user
    }
}

export default connect(mapSateToProps,null)( Manufacturers)