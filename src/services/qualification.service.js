import axios from 'axios'
import ApiRouter from '../helpers/ApiRouter'

const user = JSON.parse(localStorage.getItem('currentUser')); 
axios.defaults.headers.common['Authorization'] = user 
    ? "bearer "+ user.token
    : null;
    
const apiController = "qualification";

export const qualificationService = {
    addQualification
}

function addQualification(parameters){
    let url = ApiRouter.getUrlForRequest(apiController);
    return postAuthentication(url, parameters);
}


function postAuthentication(url,body){
    return axios.post(url,body,)
        .then(response =>{
            return response;
        });
}

export default qualificationService;