import React, { Component } from 'react';
import { AuthenticationForm } from './AuthenticationForm';
import { connect, useSelector } from 'react-redux';
import { auhenticationActions } from '../../actions/authentication.action'
import AlertNotification from '../Alerts/AlertNotification';

class LoginComponent extends Component {
    constructor(props){
        super(props);

        this.handleFinish = this.handleFinish.bind(this);
    }

    handleFinish = (e) => {
        const { dispatch } = this.props;
        dispatch(auhenticationActions.login(e.email, e.password));
    }
    
    render(){
        const errorMessage = this.props.state.alertReducer.error;
        return(
            <div>
                <AlertNotification errorMessage = {errorMessage}/>
                <AuthenticationForm 
                onFinish ={this.handleFinish}
                submitButtonValue = {"Login"}
                displayRegister = {"visible"}
                loginSection = {"unset"}
                />
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return{
        state: state
    }
}

export default connect(mapStateToProps)(LoginComponent);