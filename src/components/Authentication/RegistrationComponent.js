import React from 'react';

import {authenticationService} from '../../services/authentication.service';
import { AuthenticationForm } from './AuthenticationForm';
import { useHistory  } from 'react-router-dom'



const RegistrationComponent = () => {

    let history = useHistory();

    const onFinish = (e) => {
        authenticationService.register(e.email, e.password)
            .then(result =>{
                if(result){
                    history.push("/");
                }
            });
    }

    return(
        <AuthenticationForm 
            onFinish ={onFinish}
            submitButtonValue = {"Register"}
            displayRegister = {"hidden"}
            loginSection = {"none"}
        />
    )
    
}
export default RegistrationComponent;