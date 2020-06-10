import React, { Component } from 'react';
import { AuthenticationForm } from './AuthenticationForm';
import { connect } from 'react-redux';
import { authenticationActions } from '../../actions/authentication/authentication.action'
import AlertNotification from '../Alerts/AlertNotification';

class LoginComponent extends Component {
    constructor(props){
        super(props);

        this.handleFinish = this.handleFinish.bind(this);
    }

    handleFinish = (e) => {
        const { dispatch } = this.props;
        dispatch(authenticationActions.login(e.email, e.password));
    }
    
    render(){
        return(
            <div>
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