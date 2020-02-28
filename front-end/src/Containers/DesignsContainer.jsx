import React, { useEffect, useState } from 'react'
import DesignerProducts from '../Components/DesignerProducts'
import DesignerCreateForm from '../Components/DesignerCreateForm'
import Map from '../Components/Map'
import {loadManufacturers} from '../store/actions/userActions'
import {connect} from 'react-redux'
import axios from 'axios'
import { Switch, Link, Route } from 'react-router-dom'

const DesignsContainer = ({user, loadManufacturers}) => {
    console.log('user', user);
    const [products, setProducts] = useState([]);
    const [manufacturers, setManufacturers] = useState([]);
    const [tab, setTab] = useState(0)

    const fetchAllDesigns = async () => {
        try {
            const { data: { payload } } = await axios.get(`/products/designer/${user.user_id}`)
            setProducts(payload)
            console.log(payload);
        } catch (error) {
            console.log(error);
        }
    }

    console.log(manufacturers);
    
    const fetchAllManufacturers = async () => {
        try {
            const { data: { payload } } = await axios.get(`/manufacturers/all`)
            loadManufacturers(payload)
            console.log(payload);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchAllDesigns()
        fetchAllManufacturers()
    }, [])


    const Products = () => products.length 
        ? <DesignerProducts products={products}/> 
        : <div>No product results. Create some new designs!</div>

    const Manufacturers = (props) => (<>
        <ul>
        {
            props.designer.map( factory =>{
                return <li>{factory.manufacturer_name}</li>
            })
        }
        </ul>
        <a href="/map">to map</a>
    </>)

    const className = 'tab-list-item'
    const active = ' tab-list-active'

    const styles = {
        container: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        }
    }

    return (
        <div styles={styles}>
            <br />
            <img alt="banner" className='bannerimg' src='https://cdn-media.threadless.com/cover_images/15/3364995.jpg'/>
            <h1>Designers Portal</h1>
            <div className="tabs">
                <ol className="tab-list">
                    <Link to="/users/designer/portal/Products" >
                        <li className={className + (tab === 0 ? active : '')} onClick={() => setTab(0)}>
                            Products
                        </li>
                    </Link>
                    <Link to="/users/designer/portal/Create" >
                        <li className={className + (tab === 1 ? active : '')} onClick={() => setTab(1)}>
                        Create Design
                        </li>
                    </Link>
                    <Link to="/users/designer/portal/Manufacturers" >
                        <li className={className + (tab === 2 ? active : '')} onClick={() => setTab(2)}>
                            Manufacturers
                        </li>
                    </Link>
                    <Link to="/users/designer/portal/Map" >
                        <li className={className + (tab === 3 ? active : '')} onClick={() => setTab(3)}>
                            Map
                        </li>
                    </Link>
                </ol>
                <div className="tab-content">
                    <Switch>
                        <Route path="/users/designer/portal/Products" render={() => <Products />}/>
                        <Route path="/users/designer/portal/Create" render={() => <DesignerCreateForm />}/>
                        <Route path="/users/designer/portal/Manufacturers" render={() => <Manufacturers />}/>
                        <Route path="/users/designer/portal/Map" render={() => <Map />}/>
                    </Switch>
                </div>
            </div>
        </div>
    )

}

const mapSateToProps =(state) =>{
    return{
        user: state.authReducer.user
    }
}

const mapDispatchToProps =(dispatch) =>{
    return{
        loadManufacturers: data => dispatch(loadManufacturers(data))
    }
}

export default connect(mapSateToProps,mapDispatchToProps)(DesignsContainer)