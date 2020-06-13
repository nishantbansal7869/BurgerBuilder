import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import CheckouSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from '../Checkout/ContactData/ContactData';

class Checkout extends Component{
    state={
        ingredients: null,
        totalPrice:0,
    }
    componentWillMount(){
        const query = new URLSearchParams(this.props.location.search);
        //console.log("query" + query);
        const ingredient = {};
        let totalPrice = 0;
        for(let params of query.entries()){
            if(params[0] === 'price'){
                totalPrice = +params[1];
            }
            else{
                ingredient[params[0]] = +params[1];
            }
            
        }
        this.setState({
            ingredients: ingredient,
            totalPrice: totalPrice
        })
    }
    checkoutCancelledHandler =() => {
        this.props.history.goBack();
    }
    checkoutContinuedHandler = () => {
        this.props.history.replace('/checkout/contact-data');
    }
render(){
    return(
        <div>
            <CheckouSummary ingredients={this.state.ingredients}
            checkoutCancelled={this.checkoutCancelledHandler}
            checkoutContinued={this.checkoutContinuedHandler}
            />
            <Route path={this.props.match.path + '/contact-data'} render={(props)=>(
                <ContactData 
                ingredients={this.state.ingredients}
                totalPrice={this.state.totalPrice}
                {...props}/>
            )} />
        </div>
    );
}
}

export default Checkout;