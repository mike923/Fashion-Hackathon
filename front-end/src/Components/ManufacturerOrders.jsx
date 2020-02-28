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
                // this.displayShows()
                manufacturerOrders.map((designer, i) => {

                    return (
                        <div className="card" key={i}>
                            <li className="user-item">
                                <p>
                                    <img alt={i} src={designer.img_url} />
                                    {designer.title} - {' '}
                                    {designer.genre_name} - {' '}
                                </p>
                                <p>Being Watched By:
                                    {/* {this.findUsersWhoBingedesigner(designer)} */}
                                </p>
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