import { authenticationService } from '../services/authentication.service';
import { authenticationConstants } from '../constants/authentication.constants';
import { alertActions } from './alert.actions';
import history from '../helpers/history';


export const auhenticationActions = {
    login,
    register,
    logout
}

function login(email, password){
    
    return dispatch => {
        dispatch(request({email}));
        authenticationService.login(email, password)
            .then(
                user => {
                    dispatch(success(user));
                    localStorage.setItem(
                        "currentUser",
                        JSON.stringify(user.data));
                    history.push('/');
                },
                error =>{
                    var errors = error.response.data.errors;

                    dispatch(failure(errors));
                    dispatch(alertActions.error(errors));
                    dispatch(alertActions.clear(errors));
                }
            )
    };

    function request(user) { return { type: authenticationConstants.LOGIN_REQUEST, user } }
    function success(user) { return { type: authenticationConstants.LOGIN_SUCCESS, user } }
    function failure(error) { return { type: authenticationConstants.LOGIN_FAILURE, error } }
}

function register(email, password){
    return dispatch => {
        dispatch(request({email}));
        authenticationService.register(email, password)
            .then(
                user => {
                    dispatch(success(user));
                    history.push('/');
                },
                error => {
                    var errors = error.response.data.errors;
                    dispatch(failure(errors));
                    dispatch(alertActions.error(errors));
                    dispatch(alertActions.clear(errors));
                }
            )
    };

    function request(user) { return { type: authenticationConstants.LOGIN_REQUEST, user } }
    function success(user) { return { type: authenticationConstants.LOGIN_SUCCESS, user } }
    function failure(error) { return { type: authenticationConstants.LOGIN_FAILURE, error } }
}

function logout(){
    return dispatch => {
        dispatch(logOut());
        localStorage.removeItem('currentUser');
        history.push('/');
    };

    function logOut() { return { type: authenticationConstants.LOGOUT } }
}