import React, { useState, useEffect } from 'react'
import '../App.css';

const ManufacturerMaterialRecipts = () => {
    const imageStyle = {
        'border-style': 'solid',
        'margin-right': '70%',
        'display': 'block',
        'margin-left': 'auto',
        'margin-right': 'auto',
        'width': '50%'
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


    if (true) {

        return <div>No recipts yet. Create some new connections!</div>
    }

    return (
        <div>
            <br />
            <ul>{
                // this.displayShows()
                designers.map((designer, i) => {

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

export default ManufacturerMaterialRecipts;