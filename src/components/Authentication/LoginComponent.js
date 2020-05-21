import React from 'react';

import {authenticationService} from '../../services/authentication.service';
import { AuthenticationForm } from './AuthenticationForm';
import { useHistory  } from 'react-router-dom'



const LoginComponent = () => {

    let history = useHistory();

    const onFinish = (e) => {
        authenticationService.login(e.email, e.password)
            .then(result =>{
                if(result){
                    history.push("/");
                }
            });
    }

    return(
        <AuthenticationForm 
            onFinish ={onFinish}
            submitButtonValue = {"Login"}
            displayRegister = {"visible"}
            loginSection = {"unset"}
        />
    )
    
}
export default LoginComponent;