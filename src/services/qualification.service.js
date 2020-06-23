import axiosConfig from './axios.config'
import ApiRouter from '../helpers/ApiRouter'

const user = JSON.parse(localStorage.getItem('currentUser')); 
const axios = axiosConfig();
    
const apiController = "qualification";

export const qualificationService = {
    addObject,
    deleteObject
}

function addObject(parameters){
    let url = ApiRouter.getUrlForRequest(apiController);
    return postRequest(url, parameters);
}

function deleteObject(qualificationId){
    let url = ApiRouter.getUrlForRequest(apiController);
    return deleteRequest(url,qualificationId)
}


function postRequest(url,body){
    return axios.post(url,body,)
        .then(response =>{
            return response;
        });
}

function deleteRequest(url,qualificationId){
    return axios.delete(url+ `?qualificationId=${qualificationId}`)        
        .then(response =>{
            return response;
        });
}

export default qualificationService;