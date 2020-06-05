import React from 'react';
import CssClass from './DrawerToggle.css';

const drawerToggle = (props) =>(
    <div className={CssClass.DrawerToggle} onClick={props.toggleDrawer}>
        <div></div>
        <div></div>
        <div></div>
    </div>
);

export default drawerToggle; 