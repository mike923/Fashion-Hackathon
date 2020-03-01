import React from 'react'
import Product from '../Product'
import { Link } from 'react-router-dom'

const DesignerProfile = ({ designer_id, username, avatar_url, products }) => {
    return (
            <section>
            <br />
            <div>
            <img src={avatar_url} alt={username} className='designer-profile' />
            <h1>{username}</h1>
            <button>{
                <Link to='/create'>
                Create
                </Link>
            }</button>
            </div>
            <div className='designer-product-container'>
                {/* <h1>{designer_id}</h1> */}
                {products.map(
                    Product
                    )}
            </div>
        </section>
    )
}

export default DesignerProfile

{/* <section className='info'>
<img src='https://www.iso.cuhk.edu.hk/images/publication/sustainable-campus/201601/original/world_1.jpg' alt='' />
<div>
    <h2>The True Cost of Fast Fashion</h2>
    <p>Lorem ipsum dolor sit amet, nec viris nihil fastidii ex, eu pri dicit paulo mollis. Sed an sint reprimique. Id his facilis cotidieque, esse movet volutpat eos te, no ius velit quaeque alienum. Enim tibique eum te, explicari definiebas pri eu, in audire vituperata sed. Et novum soluta placerat eam, no sea esse zril scripta. Simul veritus partiendo eum ex, in vim porro eloquentiam disputationi, ad eam eirmod deterruisset.

Te brute scripta nam, in qui possit indoctum instructior. Ut doctus luptatum eloquentiam duo, quem dolorum officiis ad vel. Ex tale eius delicatissimi cum. Ne quot movet vivendo vel, ex sit dicam albucius intellegebat. Case consectetuer an duo.

Id per vide referrentur, te everti convenire sit. Odio facer cum an, ea fastidii deterruisset eam. Liber efficiendi interpretaris vix ex, iudico possim convenire in vix. Et per.</p>
    <a href="#" className='home-btn'>Learn More</a>
</div>

</section> */}