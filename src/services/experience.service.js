import axiosConfig from './axios.config'
import ApiRouter from '../helpers/ApiRouter'

const user = JSON.parse(localStorage.getItem('currentUser')); 
const axios = axiosConfig();
    
const apiController = "experience";

export const experienceService = {
    addObject,
    deleteObject
}

function addObject(parameters){
    let url = ApiRouter.getUrlForRequest(apiController);
    return postRequest(url, parameters);
}

function deleteObject(experienceId){
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