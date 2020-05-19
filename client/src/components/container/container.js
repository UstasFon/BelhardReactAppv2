import React from 'react';
import './container.scss';

const Container = (props) => (
  <div className='container'>
      {props.children}
  </div>
);

export default Container;