import React, {Component} from 'react';
import Modal from '../../components/UI/Modal/Modal';
import Aux from '../Aux';


const withErrorHandler = (WrapperComponent, axios) =>{
    return class extends Component{
        state={
            error: null,
        }
        //constructor is ComponentWillMount
        constructor(){
            super();
            this.reqInterceptor = axios.interceptors.request.use(request=>{
                this.setState({
                    error: null  
                });
                return request;
            })
            this.resInterceptor = axios.interceptors.response.use(res => res,error => {
                this.setState({
                    error: error
                })
            })
        }
        componentWillUnmount(){
           // console.log('Unmounted',this.reqInterceptor,this.resInterceptor)
            axios.interceptors.request.eject(this.reqInterceptor);
            axios.interceptors.response.eject(this.resInterceptor);
        }
        errorConfirmedHandler = () => {
            this.setState({error: null})
        }
        render(){
            return(
                <Aux>
                <Modal show={this.state.error}
                modalClosed={this.errorConfirmedHandler}>
                    {this.state.error?this.state.error.message:null}
                </Modal>
                <WrapperComponent {...this.props} />
                </Aux>
            );
        }
    }
}

export default withErrorHandler;
