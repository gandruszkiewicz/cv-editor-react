import { experienceConstants } from '../../constants/experience.constants';

export const experienceResult = {
    requestPost,
    successPost,
    failurePost,

    updateStore,

    requestDelete,
    successDelete,
    failureDelete
}

function updateStore(parameters) 
    { return { type: experienceConstants.EXPERIENCE_STORE_UPDATE, parameters }}
function requestPost(parameters) 
    { return { type: experienceConstants.EXPERIENCE_POST_REQUEST, parameters } }
function successPost(parameters) 
    { return { type: experienceConstants.EXPERIENCE_POST_SUCCESS, parameters } }
function failurePost(error) 
    { return { type: experienceConstants.EXPERIENCE_POST_FAILURE, error } }

function requestDelete(parameters) 
    { return { type: experienceConstants.EXPERIENCE_DELETE_REQUEST, parameters } }
function successDelete(parameters) 
    { return { type: experienceConstants.EXPERIENCE_DELETE_SUCCESS, parameters } }
function failureDelete(parameters) 
    { return { type: experienceConstants.EXPERIENCE_DELETE_FAILURE, parameters } }