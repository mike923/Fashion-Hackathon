import React, { useState, useEffect } from 'react'
import { Link, Switch, Route } from 'react-router-dom'
import ManufacturerOrders from './ManufacturerOrders'
import ManufacturerMaterialRecipts from './ManufacturerMaterialRecipts'
import ManufacturerDesignersList from './ManufacturerDesignersList'

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    }
}

const ManufacturersPortal = ({manufacturerProducts}) => {
    const [tab, setTab] = useState(0)

    return (
        <div styles={styles}>
            <br />
            <img src='https://www.mrcpa.org/wp-content/uploads/2017/06/Lean-Manufacturing-IoT-banner.jpg' alt="banner" className="bannerimg"/>
            <h1>Manufactures Portal</h1>
            <div className="tabs">
                <ol className="tab-list">
                    <Link to="/portal/Orders" onClick={() => setTab(0)}>
                        <li className={'tab-list-item' + (tab === 0 ? ' tab-list-active' : '')} >
                            Orders
                        </li>
                    </Link>
                    <Link to="/portal/Material/Recipts" onClick={() => setTab(1)}>
                        <li className={'tab-list-item' + (tab === 1 ? ' tab-list-active' : '')} >
                            Material Recipts
                        </li>
                    </Link>
                    <Link to="/portal/Designers" onClick={() => setTab(2)}>
                        <li className={'tab-list-item' + (tab === 2 ? ' tab-list-active' : '')} >
                            Designers
                        </li>
                    </Link>
                </ol>
                <div className="tab-content">
                    <Switch>
                        <Route 
                            path="/portal/Orders" 
                            render={() => <ManufacturerOrders manufacturerOrders={manufacturerProducts} />}
                        />
                        <Route 
                            path="/portal/Material/Recipts" 
                            render={() => <ManufacturerMaterialRecipts manufacturerOrders={manufacturerProducts} />}
                        />
                        <Route 
                            path="/portal/Designers" 
                            render={() => <ManufacturerDesignersList />}
                        />
                    </Switch>
                </div>
            </div>
        </div>
    )
}



export default ManufacturersPortal