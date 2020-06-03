import React from 'react';
import BurgerLogo from '../../assets/images/original.png';
import cssClass from './Logo.css';

const logo = (props) => (
    <div className={cssClass.Logo}>
        <img src={BurgerLogo} alt="MyBurger"/>
    </div>
);

export default logo;