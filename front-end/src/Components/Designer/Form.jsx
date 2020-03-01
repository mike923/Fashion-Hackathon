import React from 'react'

const Form = ({handleSubmit, handleInput,manufacturers}) => {
    return (
        <form onSubmit={handleSubmit} className="form-data">
            <div className="design-specs">
                <select name="manufacturer_id" id="manufacturer-select" className='create-form-input' onChange={handleInput}>
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
                <input
                    type="text"
                    name="bust"
                    className="create-form-input"
                    onChange={handleInput}
                    placeholder="Bust (Circumference)"
                />
                <input
                    type="text"
                    name="above_bust"
                    className="create-form-input"
                    onChange={handleInput}
                    placeholder="Above Bust"
                />
                <input
                    type="text"
                    name="under_bust"
                    className="create-form-input"
                    onChange={handleInput}
                    placeholder="Under Bust"
                />
                <input
                    type="text"
                    name="across_shoulder"
                    className="create-form-input"
                    onChange={handleInput}
                    placeholder="Across Shoulder"
                />
                <input
                    type="text"
                    name="across_back"
                    className="create-form-input"
                    onChange={handleInput}
                    placeholder="Across  Back"
                />
                <input
                    type="text"
                    name="thigh"
                    className="create-form-input"
                    onChange={handleInput}
                    placeholder="Thigh"
                />
            </div>
            <button>Submit</button>
            {

                // <button onClick={this.showModal}>submit</button>
            }
        </form>
    )
}

export default Form