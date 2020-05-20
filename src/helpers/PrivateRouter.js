import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { authenticationService } from '../services/authentication.service';

const PrivateRouter = ({component: Component, ...rest}) =>(
    <Route {...rest} render={props =>{

        let currentUser = JSON.parse(localStorage.getItem("currentUser"));

        let isUserExist = currentUser == null 
            ? false 
            : authenticationService.checkIfUserExist(currentUser.userId)
                .then(response =>{
                    isUserExist = response.data;
                })

        if(!isUserExist){
            return (
                <Redirect to ={{ pathname: '/login', state: {from: props.location} }}/>
            ) 
        }

        return <Component {...props}/>
    }}/>
)
export default PrivateRouter;