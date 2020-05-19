import React, { Component } from 'react';
import { loginFormData } from "../../../api/profileForm";

import './dataForm.scss';

class DataForm extends Component {
    constructor() {
        super();
        this.state = {
            title: '',
            text: ''
        };

        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }



    handleSubmit(event) {
        event.preventDefault();
        loginFormData(this.state)
    }

    handleTitleChange(event) {
        this.setState({title: event.target.value});
    }

    handleTextChange(event) {
        this.setState({text: event.target.value});
    }

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