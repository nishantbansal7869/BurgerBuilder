import React from 'react';
import CssClasses from './BuildControls.css'
import BuildControl from '../BuildControls/BuildControl/BuildControl';

const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Tikki', type: 'tikki'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Bacon', type: 'bacon'},
];

const buildControls = (porps) => (
    <div className={CssClasses.BuildControls}>
        <p>Current price: <strong>{porps.price.toFixed(2)}</strong></p>
        {controls.map(ctrl => (
             <BuildControl key={ctrl.label} 
             label={ctrl.label}
             added={() => porps.ingredientAdded(ctrl.type)}
             removed={() => porps.ingredientRemoved(ctrl.type)}
             disabled={porps.disabled[ctrl.type]}
             ></BuildControl>
        ))}
        <button 
        className={CssClasses.OrderButton}
        disabled={!porps.purchasable}
        onClick={porps.ordered}
        >ORDER NOW</button>
    </div>
);

export default buildControls;