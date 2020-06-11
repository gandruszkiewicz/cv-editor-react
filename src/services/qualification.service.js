import axios from 'axios'
import ApiRouter from '../helpers/ApiRouter'

const user = JSON.parse(localStorage.getItem('currentUser')); 
axios.defaults.headers.common['Authorization'] = user 
    ? "bearer "+ user.token
    : null;
    
const apiController = "qualification";

export const qualificationService = {
    addQualification,
    deleteQualification
}

function addQualification(parameters){
    let url = ApiRouter.getUrlForRequest(apiController);
    return postRequest(url, parameters);
}

function deleteQualification(qualificationId){
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