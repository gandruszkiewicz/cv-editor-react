import axiosConfig from './axios.config'
import ApiRouter from '../helpers/ApiRouter'
    
const apiController = "resume";

const user = JSON.parse(localStorage.getItem('currentUser')); 

export const resumeService = {
    addObject,
    getQuantityByUser,
    getByResumeId,
    getAllByUser
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

    return getRequest(url + "/getQuantityByUser/" + user?.userId)
}

function getByResumeId(resumeId){
    let url = ApiRouter
    .getUrlForRequest(apiController);
    return getRequest(url+"/"+resumeId)
}

function getAllByUser(){
    let url = ApiRouter
    .getUrlForRequest(apiController);
    let user = JSON.parse(localStorage.getItem('currentUser')); 
    return getRequest(url +'?userId='+ user?.userId);
}

function postRequest(url,body){
    return axiosConfig().post(url,body,)
        .then(response =>{
            return response;
        });
}

function getRequest(url){
    return axiosConfig().get(url)
        .then(response => {
            return response;
        })
}

export default resumeService;