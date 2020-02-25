import React, { useState, useEffect } from 'react'
import '../App.css';

const DesignerProducts = () => {
    const imageStyle = {
        'border-style': 'solid',
        'margin-right': '70%',
        'display': 'block',
        'margin-left': 'auto',
        'margin-right': 'auto',
        'width': '50%'
    }

    const [products, setProducts] = useState([]);


    const getProducts = () => {
        const isTrue = []
        setProducts(isTrue)
    }

    useEffect(() => {
        console.log('Hooks updated')
        getProducts();
    }, [])


    if (true) {

        return <div>No product results. Create some new designs!</div>
    }

    return (
        <div>
            <br />
            <ul>{
                // this.displayShows()
                products.map((product, i) => {

                    return (
                        <div className="card" key={i}>
                            <li className="user-item">
                                <p>
                                    <img alt={i} src={product.img_url} />
                                    {product.title} - {' '}
                                    {product.genre_name} - {' '}
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
