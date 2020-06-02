import React, { Component } from 'react';
import CssClasses from './BurgerIngredients.css';
import PropType from 'prop-types';


class BurgerIngredients extends Component{
    render(){
        let ingredient = null;

    switch(this.props.type){
        case ('bread-bottom'):
            ingredient = <div className={CssClasses.BreadBottom}></div>;
            break;
        case ('bread-top'):
            ingredient = (
                <div className={CssClasses.BreadTop}>
                <div className={CssClasses.Seeds1}></div>
                <div className={CssClasses.Seeds2}></div>
                </div>
            );
            break; 
        case ('tikki'):
            ingredient = <div className={CssClasses.Tikki}></div>;
            break;
        case ('cheese'):
            ingredient = <div className={CssClasses.Cheese}></div>;
            break;
        case ('salad'):
            ingredient = <div className={CssClasses.Salad}></div>;
            break;
        case ('bacon'):
                ingredient = <div className={CssClasses.Bacon}></div>;
                break;
        default:
            ingredient = null;
    }

    return ingredient;
    }
};

BurgerIngredients.propTypes = {
    type: PropType.string.isRequired,
}

export default BurgerIngredients;