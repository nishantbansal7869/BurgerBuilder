import React from 'react';
import CssClass from './Button.css';

const button = (props) => (
    <button className={[CssClass.Button, CssClass[props.btnType]].join(' ')}
    onClick={props.clicked}>{props.children}</button>
);
export default button;