import axios from 'axios'
import { BehaviorSubject } from 'rxjs';

const currentUserSubject = 
new BehaviorSubject(JSON.parse(localStorage.getItem('currentUser')));
const apiRoot = "https://localhost:44345/api";
const version = "/v1";
const authenticationEndpoint = apiRoot + version + "/identity";

export const authenticationService = {
    login,
    currentUser: currentUserSubject.asObservable(),
    get currentUserValue () { return currentUserSubject.value }
}

function login(email, password){
    let url = authenticationEndpoint +"/login"
    return axios.post(url,{email: email, password: password})
        .then(response =>{
           
            localStorage.setItem("currentUser",JSON.stringify("bearer "+response.data.token));
            currentUserSubject.next(response.token);
            return response.token;
        });
}