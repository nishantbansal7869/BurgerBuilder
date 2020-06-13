import React from 'react';
import CssClasses from './Burger.css';
//import {withRouter} from 'react-router-dom';
import BurgerIngredient from '../Burger/BurgerIngredients/BurgerIngredients'

//wrap at export burger with withRouter to pass on the routing props from burgerbuilder to burger.
const burger = (props) => {
    //console.log(props);
    let transformedIngredient = Object.keys(props.ingredients).map(
        igKey => {
            return [...Array(props.ingredients[igKey])].map((_, i) => {
                return <BurgerIngredient key={igKey + i} type={igKey} />
            })
        }
    ).reduce((arr, el)=> {
        return arr.concat(el);
    }, []);
    if(transformedIngredient.length === 0){
        transformedIngredient = <p>Please start adding ingredients</p>
    }
    return(
        <div className={CssClasses.Burger}>
            <BurgerIngredient type="bread-top"/>
            {transformedIngredient}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    );
}

export default burger;