import React, { Component } from 'react';
import { AuthenticationForm } from './AuthenticationForm';
import { connect } from 'react-redux';
import { auhenticationActions } from '../../actions/authentication.action'

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