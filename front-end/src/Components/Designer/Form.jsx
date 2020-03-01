import React from 'react'
import P5Wrapper from 'react-p5-wrapper'
import "./form.css"

const Form = ({handleSubmit, handleUpload, handleInput, manufacturers, sketch, setImgUrl, design_file, ...props}) => {
    return (<>
        <div className="form_wrapper">
            <section className="form_left">
                <form className="upload-photo" onSubmit={handleUpload}>
                    {props.image 
                        ? <P5Wrapper setLabels={props.setLabels} image={props.image} sketch={sketch} /> 
                        : <img src={design_file} alt="default image" className="design_file" /> 
                    }
                    <input type="file" onChange={setImgUrl} />
                    <input type="submit" value="Upload" id='input_submit' className='input_field input_submit' />
                </form>
                {/* <img src="https://cdn.dribbble.com/users/2057890/screenshots/6123405/arion-people-dribbble.jpg" alt="computer icon" /> */}
            </section>
            <form onSubmit={handleSubmit} className="form_right">
                <h1>Specs</h1>
                <section className="input_container">
                    <i className="fas fa-envelope"></i>
                    <select name="manufacturer_id" id="manufacturer-select" className='input_field' onChange={handleInput}>
                        <option>Select A Manufacturer</option>
                        {manufacturers.map(factory => {
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
                    <i className="fas fa-lock"></i>
                    <input
                        type="text"
                        name="bust"
                        className="input_field"
                        onChange={handleInput}
                        placeholder="Bust (Circumference)"
                    />
                </section>
                <section className="input_container">
                    <input
                        type="text"
                        name="above_bust"
                        className="input_field"
                        onChange={handleInput}
                        placeholder="Above Bust"
                    />
                </section>
                <section className="input_container">
                    <input
                        type="text"
                        name="under_bust"
                        className="input_field"
                        onChange={handleInput}
                        placeholder="Under Bust"
                    />
                </section>
                <section className="input_container">
                    <input
                        type="text"
                        name="across_shoulder"
                        className="input_field"
                        onChange={handleInput}
                        placeholder="Across Shoulder"
                    />
                </section>
                <section className="input_container">
                    <input
                        type="text"
                        name="across_back"
                        className="input_field"
                        onChange={handleInput}
                        placeholder="Across  Back"
                    />
                </section>
                <section className="input_container">
                    <input
                        type="text"
                        name="thigh"
                        className="input_field"
                        onChange={handleInput}
                        placeholder="Thigh"
                    />
                </section>
                <input type="submit" value="Submit" id='input_submit' className='input_field input_submit' />
                {/* <span>Forgot <a href="#"> Username / Password ?</a></span>
                <span id='create_account'>
                    <a href="#">Create your account ➡ </a>
                </span> */}
                {/* <Form handleInput={handleInput} handleSubmit={handleSubmit} manufacturers={manufacturers}/> */}
            </form>
        </div>
    </>)
}

export default Form

