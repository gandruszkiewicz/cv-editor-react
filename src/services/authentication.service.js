import axios from 'axios'
import ApiRouter from '../helpers/ApiRouter'


const apiController = "identity";

export const authenticationService = {
    login,
    checkIfUserExist
}

function login(email, password){
    let url = ApiRouter.getUrlForRequest(apiController,"login")
    return axios.post(url,{email: email, password: password})
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

function checkIfUserExist(userid){
    let url = ApiRouter.getUrlForRequest(apiController,'usercheck?userId='+userid)
    return axios.get(url)
        .then(response => {
            return response;
        })
}

export default authenticationService;