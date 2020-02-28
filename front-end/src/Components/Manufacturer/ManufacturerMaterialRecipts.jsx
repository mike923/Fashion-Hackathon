import React from 'react'

const ManufacturerMaterialRecipts = ({ manufacturerOrders }) => {

    if (!manufacturerOrders.length) {
        return <div>No recipts yet. Create some new connections!</div>
    }

    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column'
        }}>
            <br />
            <ul>{
                manufacturerOrders.map(designer => {
                    return (
                        <div className="card" key={designer.company_name} style={{
                            display: 'flex',
                            flexDirection: 'column',
                            width: '50vw'
                        }}>
                            <li className="order-info">
                                <p>Client Name: {designer.company_name}</p>
                                <div>
                                    Materials used:
                                <p> {designer.manufacturer_specs}</p>
                                </div>

                            </li>
                        </div>
                    )
                })
            }
            </ul>

        </div>
    );
};

export default ManufacturerMaterialRecipts;