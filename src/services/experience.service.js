import axios from 'axios'
import ApiRouter from '../helpers/ApiRouter'

const user = JSON.parse(localStorage.getItem('currentUser')); 
axios.defaults.headers.common['Authorization'] = user 
    ? "bearer "+ user.token
    : null;
    
const apiController = "experience";

export const experienceService = {
    addExperience,
    deleteExperience
}

function addExperience(parameters){
    let url = ApiRouter.getUrlForRequest(apiController);
    return postRequest(url, parameters);
}

function deleteExperience(experienceId){
    let url = ApiRouter.getUrlForRequest(apiController);
    return deleteRequest(url,experienceId)
}


function postRequest(url,body){
    return axios.post(url,body,)
        .then(response =>{
            return response;
        });
}

function deleteRequest(url,experienceId){
    return axios.delete(url+ `?experienceId=${experienceId}`)        
        .then(response =>{
            return response;
        });
}

export default experienceService;