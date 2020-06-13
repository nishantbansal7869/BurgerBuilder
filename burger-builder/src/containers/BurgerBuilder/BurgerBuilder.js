import React, {Component} from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import axios from '../../axios-orders';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    tikki: 1.7,
    bacon: 0.3,
}

class BurgerBuilder extends Component{

    state = {
        ingredients: null,
        totalPrice: 4.0,
        purchasable: false,
        purchasing: false,
        loading: false,
        error: false,
    }

    componentDidMount(){
       // console.log(this.props);
        axios.get('https://react-my-burger-eda0f.firebaseio.com/ingredients.json').then(
            response => {
               // console.log(response.data)
                this.setState({
                    ingredients: response.data
                });
            }
        ).catch(error => {
            this.setState({
                error: true
            })
        })
    }

    updatePurchasableState (ingredients) {
        const sum = Object.keys(ingredients).map(igKEy => {
            return ingredients[igKEy]
        }).reduce((sum,el)=>{
            return sum + el;
        },0);
        this.setState({purchasable: sum > 0});
    }

    addIngredientHandler = (type) => {
        const oldIngredientCount = this.state.ingredients[type];
        const updatedCount = oldIngredientCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        }
        updatedIngredients[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState({
            totalPrice: newPrice,
            ingredients: updatedIngredients
        })
        this.updatePurchasableState(updatedIngredients);
    }

    removeIngredientHandler = (type) => {
        const oldIngredientCount = this.state.ingredients[type];
        if(oldIngredientCount <= 0){
            return;
        }
        const updatedCount = oldIngredientCount - 1;
        const updatedIngredients = {
            ...this.state.ingredients
        }
        updatedIngredients[type] = updatedCount;
        const priceDeduction = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceDeduction;
        this.setState({
            totalPrice: newPrice,
            ingredients: updatedIngredients
        })
        this.updatePurchasableState(updatedIngredients);
    }

    purchaseHandler = () => {
        this.setState({purchasing: true});
    }
    purchaseCancelHandler = () => {
        this.setState({purchasing:false});
    }
   
    purchaseContinueHandler = () => {
        /**/
        const queryParams = [];
        for(let i in this.state.ingredients){
            queryParams.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.state.ingredients[i]));
        }
        queryParams.push("price="+this.state.totalPrice)
       // console.log("Query Params are: " + queryParams);
        const queryString = queryParams.join('&')
        this.props.history.push({
            pathname: '/checkout',
            search: '?' + queryString
        });
    }
    render(){
        let orderSummary = null;
    
        let burger = this.state.error?
        <p style={{textAlign:'center'}}>Ingredients can't be loaded</p>
        :<Spinner/>;

        
        const disabledInfo = {
            ...this.state.ingredients
        };
        for(let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <= 0;
        }
        if(this.state.ingredients){
            burger = (
           <Aux>
           <Burger ingredients={this.state.ingredients}/>
           <BuildControls
           ingredientAdded = {this.addIngredientHandler}
           ingredientRemoved = {this.removeIngredientHandler}
           purchasable = {this.state.purchasable}
           disabled = {disabledInfo}
           ordered = {this.purchaseHandler}
           price = {this.state.totalPrice}
           />
           </Aux>);
   
            orderSummary =  <OrderSummary ingredients={this.state.ingredients}
            totalSum={this.state.totalPrice}
            purchaseCancelled = {this.purchaseCancelHandler}
            purchaseContinued = {this.purchaseContinueHandler}/>
           }
           if(this.state.loading){
               orderSummary = <Spinner/>;
           }
        return(
            <Aux>
                <Modal show={this.state.purchasing}
                modalClosed={this.purchaseCancelHandler}>
                   {orderSummary}
                </Modal>
                {burger}
            </Aux>
        );
    }
}

export default withErrorHandler(BurgerBuilder, axios);