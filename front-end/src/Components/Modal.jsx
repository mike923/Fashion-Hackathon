import React from "react";
import './modal.scss'
export default class Modal extends React.Component {

    onClose = e => {
        this.props.onClose && this.props.onClose(e);
    }

    render() {
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
                </div>
            </div>
        )

    }
}