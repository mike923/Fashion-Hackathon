import React from "react";
import { connect } from "react-redux";
class Modal extends React.Component {

    onClose = e => {
        this.props.onClose && this.props.onClose(e);
    }

    render() {
        const { techPack } = this.props
        console.log('techpack', techPack);
        if (!this.props.show) {
            return null
        }
        return (
            <div className='modal' id='modal'>
                <div className='content'>{this.props.children}</div>
                <div className='modal-button actions'>
                    <button onClick={this.onClose} className='toggle-button'>
                        Close
                    </button>
                    <div>
                        <img src={techPack.design_file} alt="" />
                        <div>{techPack.id}</div>
                      
                    </div>
                </div>
            </div>
        )

    }
}

const mapStateToProps = (state) => {
    return {
        techPack: state.inputReducer.tech_pack
    }
}

export default connect(mapStateToProps)(Modal)