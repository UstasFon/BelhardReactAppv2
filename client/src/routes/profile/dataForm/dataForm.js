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

    render() {
        return (
            <form action="" className="form" onSubmit={this.handleSubmit}>
                <input type="text" className="form_input" placeholder='Заголовок' onChange={this.handleTitleChange}/>
                <input type="text" className="form_input" placeholder='Ваш отзыв' onChange={this.handleTextChange}/>
                <input className='form_button' type='submit' value='Отправить'/>
            </form>
        );
    }
}

export default DataForm;