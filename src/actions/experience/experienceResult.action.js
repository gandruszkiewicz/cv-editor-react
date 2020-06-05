import { experienceConstants } from '../../constants/experience.constants';

export const experienceResult = {
    requestPost,
    successPost,
    failurePost,
    updateStore
}

function updateStore(parameters) 
    { return { type: experienceConstants.EXPERIENCE_STORE_UPDATE_STORE_UPDATE, parameters }}
function requestPost(parameters) 
    { return { type: experienceConstants.EXPERIENCE_POST_REQUEST_POST_REQUEST, parameters } }
function successPost(parameters) 
    { return { type: experienceConstants.EXPERIENCE_POST_SUCCESS_POST_SUCCESS, parameters } }
function failurePost(error) 
    { return { type: experienceConstants.EXPERIENCE_POST_FAILURE_POST_FAILURE, error } }