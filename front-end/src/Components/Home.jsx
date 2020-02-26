import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComments } from '@fortawesome/free-solid-svg-icons'
import { faCrow } from '@fortawesome/free-solid-svg-icons'
import { faCube } from '@fortawesome/free-solid-svg-icons'
import { faCompress } from '@fortawesome/free-solid-svg-icons'


const Home = () => {

    const commentIcon = <FontAwesomeIcon color='blue' size='6x' icon={faComments} />
    const crowIcon = <FontAwesomeIcon color='rgb(100,1,221)' size='6x' icon={faCrow} />
    const cubeIcon = <FontAwesomeIcon color='green' size='6x' icon={faCube} />
    const compressIcon = <FontAwesomeIcon color='teal' size='6x' icon={faCompress} />



    return (
        <div>
            <br />
            <img className='homeimg' alt='Michael' src='https://www.candlelightfashions.com/wp-content/uploads/2019/07/What-Is-the-Connection-between-Politics-and-Fashion-Trends.jpg' />
            <h1>Welcome to Home</h1>
            <div className='top-box top-box-a'>
                <h4>Membership</h4>
                <p className='price'>$99/mo</p>
                <a href='' className='home-btn'>Buy Now</a>
            </div>
            <div className='top-box top-box-p'>
                <h4>Pro Membership</h4>
                <p className='price'>$199/mo</p>
                <a href='' className='home-btn'>Buy Now</a>
            </div>
            <section className='boxes'>
                <div className="box">
                    {commentIcon}
                    <h3>Analytics</h3>
                    <p>Each wee fruit solos on top of the closet. The
                    mod buyer builds a battery.</p>
                </div>

                <div className="box">
                    {crowIcon}
                    <h3>Analytics</h3>
                    <p>Each wee fruit solos on top of the closet. The
                    mod buyer builds a battery.</p>
                </div>

                <div className="box">
                    {cubeIcon}
                    <h3>Analytics</h3>
                    <p>Each wee fruit solos on top of the closet. The
                    mod buyer builds a battery.</p>
                </div>

                <div className="box">
                    {compressIcon}
                    <h3>Analytics</h3>
                    <p>Each wee fruit solos on top of the closet. The
                    mod buyer builds a battery.</p>
                </div>
            </section>

        </div>
    )
}

export default Home