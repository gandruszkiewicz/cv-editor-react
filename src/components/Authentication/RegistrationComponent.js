import React, { Component } from 'react';

import {authenticationService} from '../../services/authentication.service';
import { AuthenticationForm } from './AuthenticationForm';
import { useHistory  } from 'react-router-dom'
import { connect } from 'react-redux';
import { auhenticationActions } from '../../actions/authentication.action'



class RegistrationComponent extends Component{
    constructor(props){
        super(props);

        this.handleFinish = this.handleFinish.bind(this);
    }

    handleFinish = (e) => {
        const { dispatch } = this.props;
        dispatch(auhenticationActions.register(e.email, e.password));
    }

    render(){
        return(
            <AuthenticationForm 
                onFinish ={this.handleFinish}
                submitButtonValue = {"Register"}
                displayRegister = {"hidden"}
                loginSection = {"none"}
            />
        )
    }
}

const mapStateToProps = (state) =>{
    return{
        state:state
    }
}

export default connect(mapStateToProps)(RegistrationComponent);