import { qualificationConstants } from '../../constants/qualification.constants';

export const qualificationResult = {
    requestPost,
    successPost,
    failurePost,

    updateStore,

    requestDelete,
    successDelete,
    failureDelete
}

function requestPost(parameters) 
    { return { type: qualificationConstants.QUALIFICATION_POST_REQUEST, parameters } }
function successPost(parameters) 
    { return { type: qualificationConstants.QUALIFICATION_POST_SUCCESS, parameters } }
function failurePost(error) 
    { return { type: qualificationConstants.QUALIFICATION_POST_FAILURE, error } }

function updateStore(parameters) 
    { return { type: qualificationConstants.QUALIFICATION_STORE_UPDATE, parameters }}

function requestDelete(parameters) 
    { return { type: qualificationConstants.QUALIFICATION_DELETE_REQUEST, parameters } }
function successDelete(parameters) 
    { return { type: qualificationConstants.QUALIFICATION_DELETE_SUCCESS, parameters } }
function failureDelete(parameters) 
    { return { type: qualificationConstants.QUALIFICATION_DELETE_FAILURE, parameters } }