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
            {/* <img className='homeimg' alt='' src={homepageimg} /> */}

            {/* top boxes */}
            <section className='top-container'>
                <header className="showcase">
                    <h1>Sustainable and Transparent</h1>
                </header>
                <div className='top-box top-box-a'>
                    <h2>Membership</h2>
                    <p className='price'>$99/mo</p>
                    <a href='' className='home-btn'>Buy Now</a>
                </div>
                <div className='top-box top-box-b'>
                    <h2>Pro Membership</h2>
                    <p className='price'>$199/mo</p>
                    <a href='' className='home-btn'>Buy Now</a>
                </div>
            </section>

            {/* boxes */}

            <section className='boxes'>
                <div className="box">
                    {commentIcon}
                    <br />
                    <br />
                    <h3>Tracebility</h3>
                    <br />
                    <p>Lorem ipsum dolor sit amet, pro habeo doctus postulant no. Eligendi sensibus rationibus quo te. Commodo repudiare ut eos, qui eu semper vivendo gloriatur. Enim vero populo vim an, te.</p>
                </div>

                <div className="box">
                    {crowIcon}
                    <br />
                    <br />
                    <h3>Effcent Use of Water, Energy and Chemicals</h3>
                    <br />
                    <p>Lorem ipsum dolor sit amet, cu primis prompta instructior vix. Mei et recteque signiferumque. Ei nostrud convenire accommodare qui. Ut sed sint nostrud, vis et justo nostro eleifend. Ex magna.</p>
                </div>

                <div className="box">
                    {cubeIcon}
                    <br />
                    <br />
                    <h3>Respectful and Secure Workspace Environments</h3>
                    <br />
                    <p>Lorem ipsum dolor sit amet, an dicta evertitur nec, etiam recteque sit ei. Has oblique accusam cu. Unum dolorum ut vix. Id eam prompta discere, munere quidam eos in malis.</p>
                </div>

                <div className="box">
                    {compressIcon}
                    <br />
                    <br />
                    <h3>User Friendly</h3>
                    <br />
                    <p>Lorem ipsum dolor sit amet, mel diam simul id, ius elitr dicunt bonorum te, ne eos nulla mediocrem. Te sea error mentitum rationibus, ut vix audiam pericula omittantur. Mea nisl.</p>
                </div>
            </section>

            {/* Informaton Section */}
            <section className='info'>
                <img src='https://www.iso.cuhk.edu.hk/images/publication/sustainable-campus/201601/original/world_1.jpg' alt='' />
                <div>
                    <h2>The True Cost of Fast Fashion</h2>
                    <br />
                    <p>Lorem ipsum dolor sit amet, nec viris nihil fastidii ex, eu pri dicit paulo mollis. Sed an sint reprimique. Id his facilis cotidieque, esse movet volutpat eos te, no ius velit quaeque alienum. Enim tibique eum te, explicari definiebas pri eu, in audire vituperata sed. Et novum soluta placerat eam, no sea esse zril scripta. Simul veritus partiendo eum ex, in vim porro eloquentiam disputationi, ad eam eirmod deterruisset.

Te brute scripta nam, in qui possit indoctum instructior. Ut doctus luptatum eloquentiam duo, quem dolorum officiis ad vel. Ex tale eius delicatissimi cum. Ne quot movet vivendo vel, ex sit dicam albucius intellegebat. Case consectetuer an duo.

Id per vide referrentur, te everti convenire sit. Odio facer cum an, ea fastidii deterruisset eam. Liber efficiendi interpretaris vix ex, iudico possim convenire in vix. Et per.</p>
                    <br />
                    <br />
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

        </div>
    )
}

export default Home