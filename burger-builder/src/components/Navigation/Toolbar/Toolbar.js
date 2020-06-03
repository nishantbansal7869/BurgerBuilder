import React from 'react';
import CssClass from './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';

const toolbar = (props) => (
    <header className={CssClass.Toolbar}>
        <div>MENU</div>
        <div className={CssClass.Logo}>
       <Logo/></div>
        <nav className={CssClass.DesktopOnly}>
            <NavigationItems/>
        </nav>
    </header>
);

export default toolbar;