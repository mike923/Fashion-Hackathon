import React, {useState, useEffect} from 'react'
import {Link, Switch, Route} from 'react-router-dom'

import DesignerProducts from './DesignerProducts'
import DesignerCreateForm from './DesignerCreateForm'
import Map from './Map'

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    }
}

const Products = ({products}) => products.length 
    ? <DesignerProducts products={products}/> 
    : <div>No product results. \n\nCreate some new designs!</div>

const Manufacturers = ({manufacturers}) => (
    <>
        <ul>
            {manufacturers.map(factory => <li>{factory.manufacturer_name}</li>)}
        </ul>
        <a href="/map">to map</a>
    </>
)

const DesignerPortal = ({products, manufacturers}) => {
    const [tab, setTab] = useState(0)

    return (
        <div styles={styles}>
            <br />
            <img alt="banner" className='bannerimg' src='https://cdn-media.threadless.com/cover_images/15/3364995.jpg'/>
            <h1>Designers Portal</h1>
            <div className="tabs">
                <ol className="tab-list">
                    <Link to="/designer/portal/Products" onClick={() => setTab(0)}>
                        <li className={'tab-list-item' + (tab === 0 ? ' tab-list-active' : '')} >
                            Products
                        </li>
                    </Link>
                    <Link to="/designer/portal/Create" onClick={() => setTab(1)}>
                        <li className={'tab-list-item' + (tab === 1 ? ' tab-list-active' : '')} >
                            Create Design
                        </li>
                    </Link>
                    <Link to="/designer/portal/Manufacturers" onClick={() => setTab(2)}>
                        <li className={'tab-list-item' + (tab === 2 ? ' tab-list-active' : '')} >
                            Manufacturers
                        </li>
                    </Link>
                    <Link to="/designer/portal/Map" onClick={() => setTab(3)}>
                        <li className={'tab-list-item' + (tab === 3 ? ' tab-list-active' : '')} >
                            Map
                        </li>
                    </Link>
                </ol>
                <div className="tab-content">
                    <Switch>
                        <Route 
                            path="/designer/portal/Products" 
                            render={() => <Products products={products} />}
                        />
                        <Route 
                            path="/designer/portal/Create" 
                            render={() => <DesignerCreateForm />}
                        />
                        <Route 
                            path="/designer/portal/Manufacturers" 
                            render={() => <Manufacturers manufacturers={manufacturers}/>}
                        />
                        <Route 
                            path="/designer/portal/Map" 
                            render={() => <Map />}
                        />
                    </Switch>
                </div>
            </div>
        </div>
    )
}


export default DesignerPortal