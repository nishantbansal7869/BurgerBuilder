import React from 'react';
import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';
import CssClass from './CheckoutSummary.css';

const checkoutSummary = (props) =>{
return(
    <div className={CssClass.CheckoutSummary}>
        <h1>I'm Lovin it</h1>
        <div style={{width:'100%', margin:'auto'}}>
            <Burger ingredients={props.ingredients}/>
        </div>
        <Button 
        btnType="Danger"
        clicked={props.checkoutCancelled}
        >Cancel</Button>
        <Button 
        btnType="Success"
        clicked={props.checkoutContinued}
        >Continue</Button>
    </div>
)
}

export default checkoutSummary;