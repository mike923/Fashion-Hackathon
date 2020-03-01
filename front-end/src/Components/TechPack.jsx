import React from 'react'
import { connect } from 'react-redux'

const TechPack = (props) => {
    const { techPack } = props


    console.log('techpack', techPack.designer_specs);
    return (
        <div>
            <img src={techPack.design_file} alt="" />
            <div>{techPack.id}</div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        techPack: state.inputReducer.tech_pack
    }
}

export default connect(mapStateToProps)(TechPack)