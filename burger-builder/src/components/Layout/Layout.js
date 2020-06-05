import React,{Component} from 'react';
import Aux from '../../hoc/Aux'
import CssClasses from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawr';

class Layout extends Component{
    state = {
        showSideDrawer: false,
    }

    closeSideDrawerHandler = () => {
        this.setState({showSideDrawer: false});
    }

    toggleSideDrawerHandler = () => {
        this.setState({
             showSideDrawer: !this.state.showSideDrawer
        });
    }

    render(){
        return(
            <Aux>
            <Toolbar toggleDrawer={this.toggleSideDrawerHandler}></Toolbar>
            <SideDrawer open={this.state.showSideDrawer} 
            closed = {this.closeSideDrawerHandler}/>
        <main className={CssClasses.Content}>
            {this.props.children}
        </main>
        </Aux>
        )
    }
}

export default Layout;