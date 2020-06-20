import React from 'react';
import {NavLink} from 'react-router-dom';
import CssClass from './NavigationItem.css';

const navingatonItem = (props) => (
    <li
    className={CssClass.NavigationItem}>
        <NavLink
        activeClassName={CssClass.active}
        to={props.link }
        exact>
            {props.children}</NavLink>
        </li>
);

export default navingatonItem;