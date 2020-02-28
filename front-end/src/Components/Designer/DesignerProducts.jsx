import React from 'react'

const DesignerProducts = (props) => {
    const imageStyle = {
        'borderStyle': 'solid',
        'marginRight': '70%',
        'display': 'block',
        'marginLeft': 'auto',
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
