import axios from 'axios'
import ApiRouter from '../helpers/ApiRouter'

const user = JSON.parse(localStorage.getItem('currentUser')); 
axios.defaults.headers.common['Authorization'] = user 
    ? "bearer "+ user.token
    : null;
    
const apiController = "resume";

export const resumeService = {
    addObject,
    getQuantityByUser
}

async function addObject(parameters){
    await getQuantityByUser()
        .then(response =>{
            parameters.DocumentName = "CV"+ (Number(response.data) + 1);
        })
    let url = ApiRouter.getUrlForRequest(apiController);
    return postRequest(url, parameters);
}

async function getQuantityByUser(){
    let url = ApiRouter
        .getUrlForRequest(apiController);

    return getRequest(url + "/getQuantityByUser/" + user.userId)
}

function postRequest(url,body){
    return axios.post(url,body,)
        .then(response =>{
            return response;
        });
}

function getRequest(url){
    return axios.get(url);
}

export default resumeService;