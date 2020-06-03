import React from 'react';
import Aux from '../../hoc/Aux'
import CssClasses from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawr';

const layout = (props) => (
    <Aux>
        <Toolbar></Toolbar>
        <SideDrawer></SideDrawer>.
    <main className={CssClasses.Content}>
        {props.children}
    </main>
    </Aux>
);

export default layout;