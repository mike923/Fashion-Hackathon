import React, { useState, useEffect } from 'react'
import '../App.css';

const ManufacturerOrders = ({manufacturerOrders}) => {
    const imageStyle = {
        'border-style': 'solid',
        'margin-right': '70%',
        'display': 'block',
        'margin-left': 'auto',
        'margin-right': 'auto',
        'width': '50%'
    }

    if (!manufacturerOrders) {

        return <div>No orders yet. Create some new connections!</div>
    }

    return (
        <div>
            <br />
            <ul>{
                manufacturerOrders.map(orders => {
                    return (
                        <div className="card" key={orders.id}>
                            <li className="user-item">
                                <p>
                                    <img alt={orders.design_file} src={orders.design_file} />
                                    {orders.title} - {' '}
                                    {orders.genre_name} - {' '}
                                </p>
                                <p>Status: {JSON.stringify(orders.complete)}</p>
                                <p>Design Company: {orders.company_name}</p>
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