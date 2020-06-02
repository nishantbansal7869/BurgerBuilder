import React from 'react';
import CssClasses from './BuildControl.css';

const buildControl = (props) => (
    <div className={CssClasses.BuildControl}>
        <div className={CssClasses.Label}>{props.label}</div>
        <button className={CssClasses.Less} onClick={props.removed} 
        disabled={props.disabled}>Less</button>
        <button className={CssClasses.More} onClick={props.added}>More</button>
    </div>
);

export default buildControl;