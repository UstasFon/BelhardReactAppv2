import React, { Component } from 'react';
import Logo from './logo/logo';
import Calling from "./calling/calling";

import styles from './header.scss';

class Header  extends Component {
    constructor() {
        super();
    }

    render() {
        return (
             <div className="header_wrapper">
                 <Logo className="header_logo"/>
                 <Calling className="header_calling"/>
             </div>
        )
    }
}

export default Header;