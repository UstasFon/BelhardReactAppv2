import React, {Component} from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import Home from './home/home';
import Profile from './profile/profile.js';
import News from './news/news.js';
import Login from './login/login.js';
import storeUsers from '../../src/storeUser';
import './routes.scss';
import { connect } from 'react-redux';

class Routes extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Router>
                <div className='routes'>
                    <div className='routes_wrapper'>
                        <Link className='routes_item' to='/'>Главная</Link>
                        <Link className='routes_item' to='/news'>Новости</Link>
                        <Link className='routes_item' to='/login'>Авторизация</Link>
                        <Link className={(storeUsers.getState().isLogin === true) ? 'routes_item' : 'routes_hidden'} to='/profile'>Профиль</Link>
                    </div>

                    <Route exact path='/' component={Home}/>
                    <Route path='/news' component={News}/>
                    <Route path='/profile' component={Profile}/>
                    <Route path='/login' component={Login}/>
                </div>
                {this.props.children}
            </Router>
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

export default connect(mapDispatchToProps)(Routes);