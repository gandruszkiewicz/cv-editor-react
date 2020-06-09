import { qualificationConstants } from '../../constants/qualification.constants';

export const qualificationResult = {
    requestPost,
    successPost,
    failurePost,
    updateStore
}

function updateStore(parameters) 
    { return { type: qualificationConstants.QUALIFICATION_STORE_UPDATE, parameters }}
function requestPost(parameters) 
    { return { type: qualificationConstants.QUALIFICATION_POST_REQUEST, parameters } }
function successPost(parameters) 
    { return { type: qualificationConstants.QUALIFICATION_POST_SUCCESS, parameters } }
function failurePost(error) 
    { return { type: qualificationConstants.QUALIFICATION_POST_FAILURE, error } }