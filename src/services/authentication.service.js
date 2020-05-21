import axios from 'axios'
import ApiRouter from '../helpers/ApiRouter'


const apiController = "identity";

export const authenticationService = {
    login,
    register,
    checkIfUserExist
}

function login(email, password){
    let url = ApiRouter.getUrlForRequest(apiController,"login");
    return postAuthentication(url, {email: email, password: password});
}

function register(email, password){
    let url = ApiRouter.getUrlForRequest(apiController,"register")
    return postAuthentication(url,{email: email, password: password});
}

function checkIfUserExist(userid){
    let url = ApiRouter.getUrlForRequest(apiController,'usercheck?userId='+userid)
    return axios.get(url)
        .then(response => {
            return response;
        })
}

function postAuthentication(url,body){
    return axios.post(url,body)
        .then(response =>{
            let user = {
                userId : response.data.userId,
                token : response.data.token
            }
            localStorage.setItem(
                "currentUser",
                JSON.stringify(user));
            return user;
        });
}

export default authenticationService;