import React,{Component} from 'react';
import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component{
    //this could be a functional component.
    componentWillUpdate(){
        console.log('[OrderSummary] did updtae')
    }
    render(){
        const ingredientsSummary = Object.keys(this.props.ingredients)
    .map(igKey => {
    return <li key={igKey}><span style={{textTransform: 'capitalize'}}>{igKey}</span>
    :{this.props.ingredients[igKey]}</li>})
        return(
            <Aux>
        <h3>Your order</h3>
        <p>Delicious burger with the following ingredients:</p>
        <ul>
            {ingredientsSummary}
        </ul>
        <p><strong>Total price: {this.props.totalSum.toFixed(2)}</strong></p>
        <p>Continue to Checkout?</p>
        <Button btnType="Danger" clicked={this.props.purchaseCancelled}>Cancel</Button>
        <Button btnType="Success" clicked={this.props.purchaseContinued}>Continue</Button>
    </Aux>
        )
        }
}

export default OrderSummary;