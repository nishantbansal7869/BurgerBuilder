import React from 'react';
import NavigationItem from '../NavigationItems/NavigationItem/NavigationItem';
import CssClass from './NavigationItems.css';

const navingatonItems = (props) => (
    <ul className={CssClass.NavigationItems}>
       <NavigationItem link="/" active>Burger Builder</NavigationItem>
       <NavigationItem link="/">Checkout</NavigationItem>
    </ul>
);

export default navingatonItems;