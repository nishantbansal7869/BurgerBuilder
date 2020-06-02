import React from 'react';
import CssClasses from './Burger.css';
import BurgerIngredient from '../Burger/BurgerIngredients/BurgerIngredients'

const burger = (props) => {

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
        console.log(transformedIngredient);
    return(
        <div className={CssClasses.Burger}>
            <BurgerIngredient type="bread-top"/>
            {transformedIngredient}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    );
}

export default burger;