import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import CssClass from './SideDrawer.css';

const sideDrawer = (props) => { 

    return(
        <div className={CssClass.SideDrawer}>
            <div className={CssClass.Logo}>
       <Logo/></div>
            <nav>
                <NavigationItems></NavigationItems>
            </nav>
        </div>
    );
};

export default sideDrawer;