import React, {useState} from 'react'
import {Link, Switch, Route} from 'react-router-dom'

import DesignerProducts from './DesignerProducts'
import DesignerCreateForm from './DesignerCreateForm'
import Map from '../Map'
import P5Wrapper from 'react-p5-wrapper';
import Sketch from '../../p5classification/sketch'

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
            {manufacturers.map((factory, i) => <li key={i}>{factory.manufacturer_name}</li>)}
        </ul>
        <a href="/map">to map</a>
    </>
)

const DesignerPortal = ({products, manufacturers}) => {
    const [tab, setTab] = useState(null)

    return (
        <div styles={styles}>
            <br />
            <img alt="banner" className='bannerimg' src='https://cdn-media.threadless.com/cover_images/15/3364995.jpg'/>
            <h1>Designers Portal</h1>
            <div className="tabs">
                <ol className="tab-list">
                    <Link to="/portal/Products" onClick={() => setTab(0)}>
                        <li className={'tab-list-item' + (tab === 0 ? ' tab-list-active' : '')} >
                            Products
                        </li>
                    </Link>
                    <Link to="/portal/Create" onClick={() => setTab(1)}>
                        <li className={'tab-list-item' + (tab === 1 ? ' tab-list-active' : '')} >
                            Create Design
                        </li>
                    </Link>
                    <Link to="/portal/Manufacturers" onClick={() => setTab(2)}>
                        <li className={'tab-list-item' + (tab === 2 ? ' tab-list-active' : '')} >
                            Manufacturers
                        </li>
                    </Link>
                    <Link to="/portal/Map" onClick={() => setTab(3)}>
                        <li className={'tab-list-item' + (tab === 3 ? ' tab-list-active' : '')} >
                            Map
                        </li>
                    </Link>
                    <Link to="/portal/Classification" onClick={() => setTab(4)}>
                        <li className={'tab-list-item' + (tab === 4 ? ' tab-list-active' : '')} >
                            Classification
                        </li>
                    </Link>
                </ol>
                <div className="tab-content">
                    <Switch>
                        <Route 
                            path="/portal/Products" 
                            render={() => {
                                setTab(0)
                                return <Products products={products} />
                            }}
                        />
                        <Route 
                            path="/portal/Create" 
                            render={() => {
                                setTab(1)
                                return <DesignerCreateForm />
                            }}
                        />
                        <Route 
                            path="/portal/Manufacturers" 
                            render={() => {
                                setTab(2)
                                return <Manufacturers manufacturers={manufacturers}/>
                            }}
                        />
                        <Route 
                            path="/portal/Map" 
                            render={() => {
                                setTab(3)
                                return <Map />
                            }}
                        />
                        <Route 
                            path="/portal/Classification" 
                            render={() => {
                                setTab(4)
                                return <P5Wrapper sketch={Sketch} />
                            }}
                        />
                    </Switch>
                </div>
            </div>
        </div>
    )
}


export default DesignerPortal