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
        <div className="wrapper">
            <br />
            {/* <img className='homeimg' alt='' src='https://www.candlelightfashions.com/wp-content/uploads/2019/07/What-Is-the-Connection-between-Politics-and-Fashion-Trends.jpg' /> */}

            {/* top boxes */}
            <section className='top-container'>
                <header className="showcase">
                    <h1>Sustainable and Transparent</h1>
                    <p>Your choice of freedom</p>
                </header>
                <div className='top-box top-box-a'>
                    <h4>Membership</h4>
                    <p className='price'>$99/mo</p>
                    <a href='' className='home-btn'>Buy Now</a>
                </div>
                <div className='top-box top-box-b'>
                    <h4>Pro Membership</h4>
                    <p className='price'>$199/mo</p>
                    <a href='' className='home-btn'>Buy Now</a>
                </div>
            </section>

            {/* boxes */}

            <section className='boxes'>
                <div className="box">
                    {commentIcon}
                    <h3>Tracebility</h3>
                    <p>Lorem ipsum dolor sit amet, pro habeo doctus postulant no. Eligendi sensibus rationibus quo te. Commodo repudiare ut eos, qui eu semper vivendo gloriatur. Enim vero populo vim an, te.</p>
                </div>

                <div className="box">
                    {crowIcon}
                    <h3>Effcent Use of Water, Energy and Chemicals</h3>
                    <p>Lorem ipsum dolor sit amet, cu primis prompta instructior vix. Mei et recteque signiferumque. Ei nostrud convenire accommodare qui. Ut sed sint nostrud, vis et justo nostro eleifend. Ex magna.</p>
                </div>

                <div className="box">
                    {cubeIcon}
                    <h3>Respectful and Secure Workspace Environments</h3>
                    <p>Lorem ipsum dolor sit amet, an dicta evertitur nec, etiam recteque sit ei. Has oblique accusam cu. Unum dolorum ut vix. Id eam prompta discere, munere quidam eos in malis.</p>
                </div>

                <div className="box">
                    {compressIcon}
                    <h3>User Friendly</h3>
                    <p>Lorem ipsum dolor sit amet, mel diam simul id, ius elitr dicunt bonorum te, ne eos nulla mediocrem. Te sea error mentitum rationibus, ut vix audiam pericula omittantur. Mea nisl.</p>
                </div>
            </section>

            {/* Informaton Section */}
            <section className='info'>
                <img src='https://www.iso.cuhk.edu.hk/images/publication/sustainable-campus/201601/original/world_1.jpg' alt='' />
                <div>
                    <h2>The True Cost of Fast Fashion</h2>
                    <p>Lorem ipsum dolor sit amet, cetero oporteat
                         sensibus his eu. Has ex vidisse perpetua, vis
                          partem mollis mandamus at. Ea nam legere
                          mentitum prodesset, no quo lucilius liberavisse,
                      te oratio.</p>
                    <a href="#" className='home-btn'>Learn More</a>
                </div>

            </section>

            {/* portfolio images */}
            <section className='portfolio'>
                <img src='https://source.unsplash.com/random/200x200' alt='' />
                <img src='https://source.unsplash.com/random/200x201' alt='' />
                <img src='https://source.unsplash.com/random/200x202' alt='' />
                <img src='https://source.unsplash.com/random/200x203' alt='' />
                <img src='https://source.unsplash.com/random/200x204' alt='' />
                <img src='https://source.unsplash.com/random/200x205' alt='' />
                <img src='https://source.unsplash.com/random/200x206' alt='' />
                <img src='https://source.unsplash.com/random/200x207' alt='' />
                <img src='https://source.unsplash.com/random/200x208' alt='' />
                <img src='https://source.unsplash.com/random/200x209' alt='' />
                <img src='https://source.unsplash.com/random/200x210' alt='' />
                <img src='https://source.unsplash.com/random/200x211' alt='' />


            </section>

            {/* footer */}
            <footer>
                <p>A9 App &copy; 2020</p>
            </footer>
        </div>
    )
}

export default Home