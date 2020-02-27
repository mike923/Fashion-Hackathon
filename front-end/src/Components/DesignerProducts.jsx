import React from 'react'
import '../App.css';

const DesignerProducts = (props) => {
    const imageStyle = {
        'border-style': 'solid',
        'margin-right': '70%',
        'display': 'block',
        'margin-left': 'auto',
        'margin-right': 'auto',
        'width': '50%'
    }

    return (
        <div>
            <br />
            <ul>{
                props.products.map(product => {
                    return (
                        <div className="card" key={product.id} style={imageStyle}>
                            <li className="user-item">
                                <p>
                                    <img alt={'product'} src={product.design_file} />
                                
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

export default DesignerProducts;
