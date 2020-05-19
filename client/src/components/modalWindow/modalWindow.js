import React, { Component } from 'react';
import './modalWindow.scss';
import ReactDOM from 'react-dom';

class ModalWindow extends Component {
    render() {
        return ReactDOM.createPortal(
            <div className='modal'>
                <button className="modal_button" onClick={this.props.onClose}>Закрыть</button>
                {this.props.children}
            </div>,
            document.body
        );
    }
}

export default ModalWindow;