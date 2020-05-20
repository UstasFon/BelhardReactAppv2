import React, {Component} from 'react';
import ReactDOM from 'react-dom'
import {connect} from 'react-redux';
import storeUsers from '../../storeUser';
import './profile.scss';
import DataForm from "./dataForm/dataForm";
import Modal from "react-modal";

class Profile extends Component {
    logoutAction() {
        storeUsers.dispatch({type: 'USER_LOGOFF'});
        this.props.history.push('/login')
    };

    constructor() {
        super();
        this.state = {
            isModalOpen: false
        }
    };

    toggleModal(inOpen) {
        this.setState(
            {
                isModalOpen: inOpen
            }
        )
    }

    render() {
        const user  = storeUsers.getState();
        return(
            <div className="profile">
                <div className="profile_wrapper">
                    <p className="profile_text">Имя пользователя: {user.name}</p>
                    <p className="profile_text">Статус пользователя: {user.status}</p>
                    <p className="profile_text">О пользователе: {user.data}</p>
                    <p className="profile_text">Дата регистрации: {user.registrationData}</p>
                </div>
                <img className="profile_image" src={user.avatar}/>
                <button className="profile_logout" onClick={() => this.logoutAction()}>Выход</button>
                <Modal
                    onOpen={this.state.isModalOpen}>
                    <p className="profile_modalWindow">
                        Соединение с интереном отсутствует, данные будут сохранены локально
                    </p>
                    <button onClick={this.toggleModal.bind(this, true)}>Закрыть</button>
                </Modal>
                <DataForm openModal={this.toggleModal.bind(this)}/>
            </div>
        );
    }
}

const userLogout = () => ({
    type: 'USER_LOGOFF'
});

const mapDispatchToProps = dispatch => {
    return {
        onUserLogin: () => {
            dispatch(userLogout());
        }
    };
};

export default connect(null, mapDispatchToProps)(Profile);