import React, { Component } from "react";
import axios from 'axios'
import '../../App.css';
import { Multiselect } from 'multiselect-react-dropdown';

class DesignerCreateForm extends Component {
  state = {
    design_file: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRa9NQl0OadsMFUDS-0ycSNaU7OJiBvgefKvC8m7SLkAph1V7ya',
    imageFile: null,
    specs: {
      colors:[]
    },
    colors: [{ name: 'red', id: 1 }, { name: 'white', id: 2 }]
  }



  handleSubmit = async (e) => {
    const { imageFile } = this.state
    e.preventDefault()

    const data = new FormData()
    data.append('design_file', imageFile)
    console.log('data', data);


    try {
      const { data: { payload } } = await axios.post(`/productImg`, {


      })
      console.log(payload);

    } catch (error) {
      console.log('upload error', error);

    }

  }

  handleInput = e => this.setState({ [e.target.name]: e.target.value })

  setImgUrl = e => this.setState({ imageFile: e.target.files[0] })

  onSelect(selectedList, selectedItem) {
    this.setState({
      colors:[...colors,selectedItem]
    })
}

  render() {
    console.log('state', this.state);

    const { design_file } = this.state
    return (
      <div style={{
        display: 'grid',
        gridTemplateColumns: '500px 500px',
        gridTemplateRows: '500px',
        alignItems: 'center',
        gridColumnGap: '250px'
      }}>
        <img src={design_file} alt="default image" />
        <form onSubmit={this.handleSubmit}>
          <div className='upload-photo'>
            <input type="file"
              onChange={this.setImgUrl}
            />
          </div>
          <div
            className='design-specs'
            style={{
              display: 'flex',
              flexDirection: 'column',
              width: '40vw'
            }}>
            <input type="text" name='Bust' className='create-form-input' onChange={this.handleInput} placeholder='Bust (Circumference)' />
            <input type="text" name='Above Bust' className='create-form-input' onChange={this.handleInput} placeholder='Above Bust' />
            <input type="text" name='Under Bust' className='create-form-input' onChange={this.handleInput} placeholder='Under Bust' />
            <input type="text" name='Across Shoulder' className='create-form-input' onChange={this.handleInput} placeholder='Across Shoulder' />
            <input type="text" name='Across Back' className='create-form-input' onChange={this.handleInput} placeholder='Across  Back' />
            <input type="text" name='Thigh' className='create-form-input' onChange={this.handleInput} placeholder='Thigh' />
            <Multiselect
              options={this.state.colors}
              selectedValues={this.state.selectedValue}
              displayValue="name"
            />
          </div>
        </form>
      </div>
    );
  }
};

export default DesignerCreateForm;
