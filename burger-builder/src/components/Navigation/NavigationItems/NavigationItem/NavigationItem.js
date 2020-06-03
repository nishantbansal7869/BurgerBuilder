import React from 'react';
import CssClass from './NavigationItem.css';

const navingatonItem = (props) => (
    <li
    className={CssClass.NavigationItem}>
        <a 
        className={props.active?CssClass.active:null}
        href={props.link }>
            {props.children}</a>
        </li>
);

export default navingatonItem;