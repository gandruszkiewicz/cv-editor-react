import { authenticationService } from '../../services/authentication.service';
import { alertActions } from './../alert.actions';
import history from '../../helpers/history';
import { authenticationResult } from '../authentication/authneticationResult.action';


export const authenticationActions = {
    login,
    register,
    logout
}

function login(email, password){
    
    return dispatch => {
        dispatch(authenticationResult.request({email}));
        authenticationService.login(email, password)
            .then(
                user => {
                    dispatch(authenticationResult.success(user));
                    localStorage.setItem(
                        "currentUser",
                        JSON.stringify(user.data));
                    history.push('/');
                },
                error =>{
                    var errors = error?.response ? 
                        error.response.data.errors
                        :new Array(error.message);

                    dispatch(authenticationResult.failure(errors));
                    dispatch(alertActions.error(errors));
                    dispatch(alertActions.clear(errors));
                }
            )
    };
}

function register(email, password){
    return dispatch => {
        dispatch(authenticationResult.request({email}));
        authenticationService.register(email, password)
            .then(
                user => {
                    dispatch(authenticationResult.success(user));
                    history.push('/');
                },
                error => {
                    var errors = error.response.data.errors;
                    dispatch(authenticationResult.failure(errors));
                    dispatch(alertActions.error(errors));
                    dispatch(alertActions.clear(errors));
                }
            )
    };
}

function logout(){
    return dispatch => {
        dispatch(authenticationResult.logOut());
        localStorage.removeItem('currentUser');
        history.push('/');
    };
}