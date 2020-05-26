import React, { Component } from 'react';


import { AuthenticationForm } from './AuthenticationForm';

import { connect } from 'react-redux';
import { login } from '../../actions/authentication.action'


class LoginComponent extends Component {
    

    onFinish = (e) => {
        this.props.Login(e.email,e.password);
        
        this.props.history.push('/')
    }

    render(){
        return(
            <AuthenticationForm 
                onFinish ={this.onFinish}
                submitButtonValue = {"Login"}
                displayRegister = {"visible"}
                loginSection = {"unset"}
            />
        )
    }
}

const mapStateToProps = (state) =>{
    return{
        user: state.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        Login: (email,password) => {dispatch(login(email, password))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent);