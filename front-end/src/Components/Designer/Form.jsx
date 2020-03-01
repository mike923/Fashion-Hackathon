import React, {useEffect} from 'react'
import axios from 'axios'
import P5Wrapper from 'react-p5-wrapper'
import "./form.css"
import { useState } from 'react'

const Form = ({handleSubmit, handleUpload, handleInput, sketch, setImgUrl, image_url, ...props}) => {
    const [manufacturers, loadManufacturers] = useState([])
    useEffect(() => {
        (async () => {
            try {
                let {data:{payload}} = await axios.get('/manufacturers/all')
                console.log(payload)
                loadManufacturers(payload)
                this.setState({manufacturers: payload})
            } catch (error) {
                console.log('error comp did mount')
            }
        })()
    },[])
    // console.log(manufacturers)
    return (<>
        <div className="form_wrapper">
            <section className="form_left">
                <form className="upload-photo" onSubmit={handleUpload}>
                    {props.image 
                        ? <P5Wrapper setLabels={props.setLabels} image={props.image} sketch={sketch} /> 
                        : <img src={image_url} alt="default image" className="design_file" /> 
                    }
                    <br/>
                    <input type="file" name="file" id="file" className='inputfile' onChange={setImgUrl} />
                    <label for="file">Choose a file</label>

                    {/* <input type="submit" value="Upload" id='input_submit' className='input_field input_submit' /> */}
                </form>
                {/* <img src="https://cdn.dribbble.com/users/2057890/screenshots/6123405/arion-people-dribbble.jpg" alt="computer icon" /> */}
            </section>
            <form onSubmit={handleSubmit} className="form_right">
                <h1>Specs</h1>
                <section className="input_container">
                    {/* <i className="fas fa-envelope"></i> */}
                    <select name="manufacturer_id" id="manufacturer-select" className='input_field' onChange={handleInput}>
                        <option>Select A Manufacturer</option>
                        {manufacturers.map(factory => {
                            console.log('manufacturers', manufacturers)
                            return (
                                <option name='manufacturer_id'
                                    value={factory.id}
                                    key={factory.id}
                                >
                                    {factory.manufacturer_name}
                                </option>
                            );
                        })}
                    </select>
                </section>
                <section className="input_container">
                    {/* <i className="fas fa-lock"></i> */}
                    <input
                        type="text"
                        name="product_name"
                        className="input_field"
                        onChange={handleInput}
                        placeholder="Product Name"
                    />
                </section>
                <section className="input_container">
                    {/* <i className="fas fa-lock"></i> */}
                    <input
                        type="text"
                        value={props.bust}
                        name="bust"
                        className="input_field"
                        onChange={handleInput}
                        placeholder="Bust (Circumference)"
                    />
                </section>
                <section className="input_container">
                    <input
                        type="text"
                        value={props.above_bust}
                        name="above_bust"
                        className="input_field"
                        onChange={handleInput}
                        placeholder="Above Bust"
                    />
                </section>
                <section className="input_container">
                    <input
                        type="text"
                        value={props.under_bust}
                        name="under_bust"
                        className="input_field"
                        onChange={handleInput}
                        placeholder="Under Bust"
                    />
                </section>
                <section className="input_container">
                    <input
                        type="text"
                        value={props.across_shoulder}
                        name="across_shoulder"
                        className="input_field"
                        onChange={handleInput}
                        placeholder="Across Shoulder"
                    />
                </section>
                <section className="input_container">
                    <input
                        type="text"
                        value={props.across_back}
                        name="across_back"
                        className="input_field"
                        onChange={handleInput}
                        placeholder="Across  Back"
                    />
                </section>
                <input type="submit" value="Submit" id='input_submit' className='input_field input_submit' />
            </form>
        </div>
    </>)
}

export default Form

