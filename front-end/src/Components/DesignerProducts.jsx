import React, { useState, useEffect } from 'react'
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

    // const [products, setProducts] = useState([]);


    // const getProducts = () => {
    //     const isTrue = []
    //     setProducts(isTrue)
    // }

    // useEffect(() => {
    //     console.log('Hooks updated')
    //     getProducts();
    // }, [])


    // if (true) {

    //     return <div>No product results. Create some new designs!</div>
    // }

    return (
        <div>
            <br />
            <ul>{
                // this.displayShows()
                props.products.map(product => {
                    return (
                        <div className="card" key={product.id}>
                            <li className="user-item">
                                <p>
                                    <img alt={'product'} src={product.design_file} />
                                
                                </p>
                                <p>Being Watched By:
                                    {/* {this.findUsersWhoBingeproduct(product)} */}
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
