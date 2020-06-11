import React, { Component } from 'react';

import { AuthenticationFormComponent } from './authenticationForm.component';
import { connect } from 'react-redux';
import { authenticationActions } from '../../actions/authentication/authentication.action'



class RegistrationFormComponent extends Component{
    constructor(props){
        super(props);

        this.handleFinish = this.handleFinish.bind(this);
    }

    handleFinish = (e) => {
        const { dispatch } = this.props;
        dispatch(authenticationActions.register(e.email, e.password));
    }

    render(){
        return(
            <div>
                <AuthenticationFormComponent 
                onFinish ={this.handleFinish}
                submitButtonValue = {"Register"}
                displayRegister = {"hidden"}
                loginSection = {"none"}
                />
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return{
        state:state
    }
}

export default connect(mapStateToProps)(RegistrationFormComponent);