import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { authenticationService } from '../services/authentication.service';

const PrivateRouter = ({component: Component, ...rest}) =>(
    <Route {...rest} render={props =>{

        let currentUser = JSON.parse(localStorage.getItem("currentUser"));

        const isUserLogged = () => {
            let result = false;
            authenticationService.checkIfUserExist(currentUser?.userId)
                .then(
                    response =>{
                        result =  response.data
                    },
                    error => {
                        console.log(error);
                    }
                )
            return result;
        }

        if(!isUserLogged){
            return (
                <Redirect to ={{ pathname: '/login', state: {from: props.location} }}/>
            ) 
        }

        return <Component {...props}/>
    }}/>
)
export default PrivateRouter;