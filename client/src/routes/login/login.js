import React, { Component } from 'react';
import { connect } from 'react-redux';
import storeUsers from '../../storeUser';
import './login.scss';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            password: ''
        };

        this.handleChangeLogin = this.handleChangeLogin.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();

        const currentState  = storeUsers.getState();
        if (this.state.name === currentState.name && this.state.password === currentState.password) {
            storeUsers.dispatch({type: 'USER_LOGIN'});
            this.props.history.push('/profile')
        } else {
            alert('Неверное имя пользователя или пароль');
            storeUsers.dispatch({type: 'USER_LOGOFF'});
        }
    }

    handleChangeLogin(event) {
        this.setState({name: event.target.value});
    }

    handleChangePassword(event) {
        this.setState({password: event.target.value});
    }

    render() {
        return (
            <form className='form' onSubmit={this.handleSubmit}>
                <input className='form_input' value={this.state.name} type='text' placeholder='Имя пользователя' onChange={this.handleChangeLogin}/>
                <input className='form_input' value={this.state.password} type='text' placeholder='Пароль' onChange={this.handleChangePassword}/>
                <input className='form_button' type='submit' value='Отправить'/>
            </form>
        );
    }
}

    const mapDispatchToProps = dispatch => {
        return {
            onUserLogin: () => {
                dispatch
            }
        };
    };

    export default connect(null, mapDispatchToProps)(Login);
