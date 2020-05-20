import React, { Component } from 'react';
import { loginFormData } from "../../../api/profileForm";

import './dataForm.scss';
import {connect} from "react-redux";

class DataForm extends Component {
    constructor() {
        super();
        this.state = {
            title: '',
            text: ''
        };
    }



    handleSubmit(event) {
        event.preventDefault();
        loginFormData(this.state)
            .then(data => {
                dispatch('OPEN_MODAL', data.status === 404 ? true : false)
            })
    };

    handleTitleChange (event) {
        this.setState({title: event.target.value});
    };

    handleTextChange (event) {
        this.setState({text: event.target.value});
    };

    render() {
        return (
            <form action="" className="feedback" onSubmit={this.handleSubmit}>
                <input type="text" className="feedback_input" placeholder='Заголовок' onChange={this.handleTitleChange}/>
                <input type="text" className="feedback_input" placeholder='Ваш отзыв' onChange={this.handleTextChange}/>
                <input className='feedback_button' type='submit' value='Отправить'/>
            </form>
        );
    }
}


export default DataForm;
