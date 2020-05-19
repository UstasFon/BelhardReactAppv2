import React, { Component } from 'react';
import './logo.scss';

class Logo extends Component {
    render() {
        return (
            <div className='logo'>
                <h1 className='logo_title'>EventBizPro</h1>
                <p className='logo_text'>Организация семинаров</p>
            </div>
        )
    }
}

export default Logo;