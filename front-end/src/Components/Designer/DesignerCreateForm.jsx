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
        product_name:'',
        colors: ["red", "white"],
        bust: "26in",
        above_bust: "24in",
        under_bust: "19in",
        across_shoulder: "30in",
        across_back: "32in",
        manufacturer_id: '',
        // colors: [
        //     { name: "red", id: 1 },
        //     { name: "white", id: 2 }
        // ],
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
        const { imageFile, manufacturer_id, above_bust, under_bust, across_back, thigh,colors, product_name } = this.state;
        const { user, loadTechPack, labels } = this.props
        e.preventDefault();

        const designer_specs = {
            above_bust,
            under_bust,
            across_back,
            thigh,
            labels,
            colors
        }


        //creating new FormData object to submit
        const data = new FormData();
        // Object.keys(this.state).forEach(key => data.append(key, this.state[key]))
        data.append("design_file", imageFile);
        data.append("designer_specs", JSON.stringify(designer_specs));
        data.append('manufacturer_id', manufacturer_id)
        data.append('designer_id', user.designer_id)
        data.append('product_name', product_name)
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
        
        const { design_file, manufacturers,imageFile } = this.state;
        let image_url = design_file

        if (imageFile) {
          image_url = URL.createObjectURL(imageFile)
        }

        if (manufacturers.length) {
          return <Form 
            handleInput={this.handleInput} 
            handleSubmit={this.handleSubmit}
            handleUpload={this.handleUpload} 
            manufacturers={this.state.manufacturers}
            sketch={sketch}
            design_file={design_file}
            setImgUrl={this.setImgUrl}
            image_url={image_url}
            {...this.props}
            {...this.state}
        />
        } else {
          return <></>
        }
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
