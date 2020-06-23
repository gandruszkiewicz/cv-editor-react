import { authenticationService } from '../../services/authentication.service';
import { alertActions } from './../alert.actions';
import history from '../../helpers/history';
import { authenticationResult } from '../authentication/authneticationResult.action';
import spinActions from '../spin/spin.action';


export const authenticationActions = {
    login,
    register,
    logout
}

function login(email, password){
    
    return dispatch => {
        dispatch(authenticationResult.request({email}));
        dispatch(spinActions.toggleSpin());
        authenticationService.login(email, password)
            .then(
                user => {
                    dispatch(authenticationResult.success(user));
                    localStorage.setItem(
                        "currentUser",
                        JSON.stringify(user.data));
                    history.push('/');
                    dispatch(spinActions.toggleSpin());
                },
                error =>{
                    dispatch(spinActions.toggleSpin());
                    dispatch(authenticationResult.failure(error));
                    dispatch(alertActions.error(error));
                }
            )
    };
}

function register(email, password){
    return dispatch => {
        dispatch(authenticationResult.request({email}));
        dispatch(spinActions.toggleSpin());
        authenticationService.register(email, password)
            .then(
                user => {
                    dispatch(authenticationResult.success(user));
                    history.push('/');
                    dispatch(spinActions.toggleSpin());
                },
                error => {
                    var errors = error.response.data.errors;
                    dispatch(authenticationResult.failure(errors));
                    dispatch(alertActions.error(errors));
                    dispatch(spinActions.toggleSpin());
                }
            )
    };
}

function logout(){
    return dispatch => {
        dispatch(authenticationResult.logOut());
        localStorage.removeItem('currentUser');
        history.push('/login');
    };
}