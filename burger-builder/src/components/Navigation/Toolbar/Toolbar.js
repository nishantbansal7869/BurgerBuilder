import React from 'react';
import CssClass from './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

const toolbar = (props) => (
    <header className={CssClass.Toolbar}>
        <DrawerToggle toggleDrawer={props.toggleDrawer}/>
        <div className={CssClass.Logo}>
       <Logo/></div>
        <nav className={CssClass.DesktopOnly}>
            <NavigationItems/>
        </nav>
    </header>
);

export default toolbar;