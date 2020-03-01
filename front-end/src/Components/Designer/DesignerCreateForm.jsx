import React, { Component } from "react";
import axios from "axios";
import "../../App.css";
import { connect } from "react-redux";
import Modal from '../Modal'
import { loadTechPack, loadManufacturers } from "../../store/actions/userActions";
import P5Wrapper from 'react-p5-wrapper';
import {setLabels, setImg} from '../../store/actions/userActions'
import sketch from '../../p5classification/sketch'
import TechPack from '../TechPack'
import Form from "./Form";

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
        ],
        show: false,
        manufacturers: []
    };

    componentDidMount = () => {
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
    }

    handleSubmit = async e => {
        const { imageFile, manufacturer_id, above_bust, under_bust, across_back, thigh } = this.state;
        const { user, loadTechPack, labels } = this.props
        e.preventDefault();

        const designer_specs = {
            above_bust,
            under_bust,
            across_back,
            thigh,
            labels,
        }


        //creating new FormData object to submit
        const data = new FormData();
        data.append("design_file", imageFile);
        data.append("designer_specs", JSON.stringify(designer_specs));
        data.append('manufacturer_id', manufacturer_id)
        data.append('designer_id', user.user_id)
        try {
            const {
                data: { payload }
            } = await axios.post(`/productImg`, data);
            
            //loading returned payload into redux storte
            loadTechPack(payload)
            console.log(payload);
            // this.props.setImg(payload.design_file)
            
            this.setState({ design_file: payload.design_file });
        } catch (error) {
            console.log("upload error", error);
        }
    };
    
    handleUpload = async e => {
        const {imageFile} = this.state;
        e.preventDefault();
        
        const data = new FormData();
        data.append("design_file", imageFile);
        try {
            const {data: { payload }} = await axios.post(`/productImg`, data);
            console.log(payload)
            this.props.setImg(payload)

            this.setState({ design_file: payload });
        } catch (error) {
            console.log("upload error", error);
        }
    };

    handleInput = e => this.setState({ [e.target.name]: e.target.value });

    setImgUrl = e => {
        console.log(e.target.files[0])
        // this.props.setImg(e.target.files[0])
        this.setState({ imageFile: e.target.files[0] })
    };

    render() {
        console.log("state", this.state);
        
        const { design_file, manufacturers } = this.state;
        return (
            <div className="upload-form">
                <form className="upload-photo" onSubmit={this.handleUpload}>
                    {this.props.image 
                        ? <P5Wrapper setLabels={this.props.setLabels} image={this.props.image} sketch={sketch} /> 
                        : <img src={design_file} alt="default image" className="design_file" /> 
                    }
                    <input type="file" onChange={this.setImgUrl} />
                    <button type="submit">Submit</button>
                </form>
                <Form handleInput={this.handleInput} handleSubmit={this.handleSubmit} manufacturers={manufacturers}/>
            </div>
        );
    }
}

const mapStateToProps = ({ designerReducer: { manufacturers }, authReducer: { user }, inputReducer: { image } }) => {
    return { manufacturers, user, image };
};
const mapDispatchToProps = (dispatch) => {
    return {
        loadManufacturers: (data) => dispatch(loadManufacturers(data)),
        loadTechPack: data => dispatch(loadTechPack(data)),
        setLabels: (labels) => dispatch(setLabels(labels)),
        setImg: (img) => dispatch(setImg(img))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DesignerCreateForm);
