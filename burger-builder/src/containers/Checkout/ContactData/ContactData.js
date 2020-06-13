import React, {Component} from 'react';
import Button from '../../../components/UI/Button/Button';
import CssClass from './ContactData.css';
import axios from '../../../axios-orders';
import Spinner from '../../../components/UI/Spinner/Spinner';

class ContactData extends Component{
    state={
        name:'',
        email:'',
        address:{
            street:'',
            postalCode:'',
        },
        loading: false,
        ordered: false,
    }
    
    orderHandler = (event) => {
        event.preventDefault();
        //console.log(this.props.ingredients)
        this.setState({
            loading: true,
        })
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.totalPrice,
            customer: {
                name: 'Test',
                Age: '29',
                address: {
                    city: 'testCity',
                    state: 'testState',
                    Country: 'testCountry'
                },
                email: 'test@test.com'
            },
            delievery: 'fastest'
        }
        //alert('Continue!!')
        axios.post('/orders.json',order).then(response => {
            this.setState({
                loading: false,
                ordered: true,
            })
            this.props.history.push('/')
        }).catch(error => {
            this.setState({
                loading: false,
            })
        })
    }

render(){
    let form = (<form>
        <input className={CssClass.Input} type="text" name="name" placeholder="Your name please"/>
        <input className={CssClass.Input} type="email" name="email" placeholder="You email address"/>
        <input className={CssClass.Input} type="text" name="street" placeholder="Street"/>
        <input className={CssClass.Input} type="text" name="postal" placeholder="Postal code"/>
        <Button btnType="Success" clicked={this.orderHandler}>ORDER</Button>
    </form>);
    if(this.state.loading){
        form = <Spinner/>
    }
    if(this.state.ordered){
        form = <h4>Thank you for you order!</h4>
    }
    return(
        <div className={CssClass.ContactData}>
            <h4>Please enter your contact details!</h4>
            {form}
        </div>
    );
}
}

export default ContactData;