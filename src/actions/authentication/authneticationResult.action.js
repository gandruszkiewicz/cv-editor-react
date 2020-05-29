import { authenticationConstants } from '../../constants/authentication.constants';

export const authenticationResult = {
    request,
    success,
    failure,
    logOut
}

function request(user) { return { type: authenticationConstants.LOGIN_REQUEST, user } }
function success(user) { return { type: authenticationConstants.LOGIN_SUCCESS, user } }
function failure(error) { return { type: authenticationConstants.LOGIN_FAILURE, error } }
function logOut() { return { type: authenticationConstants.LOGOUT } }