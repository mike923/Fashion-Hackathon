import React, { useState, useEffect } from 'react'
import '../App.css';

const ManufacturerMaterialRecipts = ({manufacturerOrders}) => {
    const imageStyle = {
        // 'marginRight': '70%',
        // 'display': 'flex',
        // 'marginLeft': 'auto',
        // 'marginRight': 'auto',
        // 'width': '50%',
        // 'gap':'20px',
        // 'flexDirection':'flex'
    }

    const [designers, setDesigners] = useState([]);


    const getDesigners = () => {
        const isTrue = []
        setDesigners(isTrue)
    }

    useEffect(() => {
        console.log('Hooks updated')
        getDesigners();
    }, [])


    if (!manufacturerOrders.length) {
        return <div>No recipts yet. Create some new connections!</div>
    }

    return (
        <div>
            <br />
            <ul>{
                manufacturerOrders.map(designer => {
                    return (
                        <div className="card" key={designer.company_name} style={{
                            display:'flex',
                            flexDirection:'column'
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