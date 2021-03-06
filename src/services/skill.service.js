import axiosConfig from './axios.config'
import ApiRouter from '../helpers/ApiRouter'

const user = JSON.parse(localStorage.getItem('currentUser')); 
const axios = axiosConfig();
    
const apiController = "skill";

export const skillService = {
    addObject,
    deleteObject
}

function addObject(parameters){
    let url = ApiRouter.getUrlForRequest(apiController);
    return postRequest(url, parameters);
}

function deleteObject(skillId){
    let url = ApiRouter.getUrlForRequest(apiController);
    return deleteRequest(url,skillId)
}


function postRequest(url,body){
    return axios.post(url,body,)
        .then(response =>{
            return response;
        });
}

function deleteRequest(url,skillId){
    return axios.delete(url+ `?skillId=${skillId}`)        
        .then(response =>{
            return response;
        });
}

export default skillService;