import React, { useState, useEffect } from 'react'
import '../App.css';

const ManufacturerOrders = ({manufacturerOrders}) => {
    const imageStyle = {
        'marginRight': '70%',
        'display': 'block',
        'marginLeft': 'auto',
        'marginRight': 'auto',
        'width': '50%'
    }

    if (!manufacturerOrders) return <div>No orders yet. Create some new connections!</div>
 
    return (
        <div>
            <br />
            <ul>{
                manufacturerOrders.map(orders => {
                    return (
                        <div className="card" key={orders.id}>
                            <li className="user-item" style={imageStyle} key={orders.product_id}>
                                <p>
                                    <img alt={orders.design_file} src={orders.design_file} />
                                </p>
                                <p>Client Name: {orders.company_name}</p>
                                <p>Complete Status: {JSON.stringify(orders.complete)}</p>
                                <span>Design Specs:{
                                    Object.values(orders.designer_specs).map( el =>{
                                        return <p key={orders.product_id}>{el}</p>
                                    })
                                }
                                </span>
                            </li>
                        </div>
                    )
                })
            }
            </ul>

        </div>
    );
};

export default ManufacturerOrders;