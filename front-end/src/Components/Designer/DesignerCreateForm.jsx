import React, { Component } from "react";
import axios from "axios";
import "../../App.css";
import { Multiselect } from "multiselect-react-dropdown";
import { connect } from "react-redux";

class DesignerCreateForm extends Component {
  state = {
    design_file:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRa9NQl0OadsMFUDS-0ycSNaU7OJiBvgefKvC8m7SLkAph1V7ya",
    imageFile: null,

    colors: ["red", "white"],
    bust: "",
    above_bust: "",
    under_bust: "",
    across_shoulder: "",
    across_back: "",
    thigh: "",
    manufacturer_id: '',
    colors: [
      { name: "red", id: 1 },
      { name: "white", id: 2 }
    ]
  };

  handleSubmit = async e => {
    const { imageFile, manufacturer_id, above_bust, under_bust, across_back,
      thigh,
    } = this.state;
    const { user } = this.props
    e.preventDefault();

    const designer_specs = {
      above_bust, under_bust, across_back,
      thigh
    }

    const data = new FormData();
    data.append("design_file", imageFile);
    data.append("designer_specs", JSON.stringify(designer_specs));
    data.append('manufacturer_id', manufacturer_id)
    data.append('designer_id', user.user_id)
    try {
      const {
        data: { payload }
      } = await axios.post(`/productImg`, data);
      console.log(payload);
      this.setState({ design_file: payload[0].design_file });
    } catch (error) {
      console.log("upload error", error);
    }
  };

  handleInput = e => this.setState({ [e.target.name]: e.target.value });

  setImgUrl = e => this.setState({ imageFile: e.target.files[0] });

  render() {
    console.log("state", this.state);
    const { manufacturers } = this.props;
    const { design_file } = this.state;
    return (
      <div className="upload-form">
        <div className="upload-photo">
          <img src={design_file} alt="default image" className="design_file" />
          <input type="file" onChange={this.setImgUrl} />
        </div>
        <form onSubmit={this.handleSubmit}>
          <div className="design-specs">
            <select name="manufacturer_id" id="manufacturer-select" onChange={this.handleInput}>
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
            <Multiselect
              options={this.state.colors}
              selectedValues={this.state.selectedValue}
              displayValue="name"
            />
            <input
              type="text"
              name="bust"
              className="create-form-input"
              onChange={this.handleInput}
              placeholder="Bust (Circumference)"
            />
            <input
              type="text"
              name="above_bust"
              className="create-form-input"
              onChange={this.handleInput}
              placeholder="Above Bust"
            />
            <input
              type="text"
              name="under_bust"
              className="create-form-input"
              onChange={this.handleInput}
              placeholder="Under Bust"
            />
            <input
              type="text"
              name="across_shoulder"
              className="create-form-input"
              onChange={this.handleInput}
              placeholder="Across Shoulder"
            />
            <input
              type="text"
              name="across_back"
              className="create-form-input"
              onChange={this.handleInput}
              placeholder="Across  Back"
            />
            <input
              type="text"
              name="thigh"
              className="create-form-input"
              onChange={this.handleInput}
              placeholder="Thigh"
            />
          </div>
          <button>submit</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = ({ designerReducer: { manufacturers }, authReducer: { user } }) => {
  return { manufacturers, user };
};

export default connect(mapStateToProps)(DesignerCreateForm);
