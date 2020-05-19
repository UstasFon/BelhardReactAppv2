import React, { Component } from 'react';
import {Route, BrowserRouter, Link, Router} from 'react-router-dom';
import './menu.scss';
import Home from '../../../routes/home/home.js';
import Login from '../../../routes/login/login.js';


class Menu extends Component {
    render() {
        return(
            <Router>
                <div className="Menu_list">
                    <Link to='/'>Главная</Link>
                    <Route exact path={}></Route>
                </div>
            </Router>
        );
    }

}
export default Menu;