import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import CssClass from './SideDrawer.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Aux';

const sideDrawer = (props) => { 
    let attachedClass = [CssClass.SideDrawer, CssClass.Close];
    if(props.open){
         attachedClass = [CssClass.SideDrawer, CssClass.Open];
    }
    return(
        <Aux>
            <Backdrop show={props.open} clicked={props.closed}/>
            <div className={attachedClass.join(' ')}>
            <div className={CssClass.Logo}>
                <Logo/></div>
                <nav>
                    <NavigationItems></NavigationItems>
                </nav>
            </div>
        </Aux>
    );
};

export default sideDrawer;