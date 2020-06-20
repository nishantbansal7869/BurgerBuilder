import React from 'react';
import NavigationItem from '../NavigationItems/NavigationItem/NavigationItem';
import CssClass from './NavigationItems.css';

const navingatonItems = (props) => (
    <ul className={CssClass.NavigationItems}>
       <NavigationItem link="/" >Burger Builder</NavigationItem>
       <NavigationItem link="/my-orders">My Orders</NavigationItem>
    </ul>
);

export default navingatonItems;