import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import { Route } from 'react-router-dom';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';

class App extends Component {
 /* state={
    show: true
  }
  componentDidMount(){
    setTimeout(()=>{
      this.setState({
        show:false
      })
    },5000)
  }*/
  render() {
    return (
      <div>
        <Layout>
         <Route path="/" exact component={BurgerBuilder}/>
         <Route path="/checkout" component={Checkout}/>
        </Layout>
      </div>
    );
  }
}

export default App;
