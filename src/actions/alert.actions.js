import { alertConstants } from '../constants/alert.constants';
import { authenticationActions } from './authentication/authentication.action';

export const alertActions = {
    success,
    error,
    clear
};

function success(message) {
    return { type: alertConstants.SUCCESS, message };
}

function error(error) {
    // Later on will be added refresh token handling
    if(error?.response?.status === 401){
        return dispatch => dispatch(authenticationActions.logout());
    }
    var errors = error?.response?.data ? 
        error.response.data.errors
        :new Array(error.message);

    return { type: alertConstants.ERROR, errors };
}

function clear() {
    return { type: alertConstants.CLEAR };
}