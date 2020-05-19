import React from 'react';
import './background.scss';

const Background = (props) =>  (
    <div className="background">
        <div className="background_planet">
            <div className="background_gradient">
                {props.children}
            </div>
        </div>
    </div>
);


export default Background;